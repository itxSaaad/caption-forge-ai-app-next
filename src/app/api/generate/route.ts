import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

interface CaptionSet {
  caption: string;
  hashtags: string[];
}

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: (() => {
    const apiKey = process.env.OPENAI_API_KEY || process.env.CHATANYWHERE_API_KEY;

    if (!apiKey) {
      throw new Error(
        'API key is missing. Please set either OPENAI_API_KEY or CHATANYWHERE_API_KEY in your environment variables.'
      );
    }

    return apiKey;
  })(),
  ...(process.env.OPENAI_API_BASE_URL || process.env.CHATANYWHERE_API_BASE_URL
    ? { baseURL: process.env.OPENAI_API_BASE_URL || process.env.CHATANYWHERE_API_BASE_URL }
    : {}),
});

const USAGE_COOKIE_NAME = 'caption_forge_usage';
const USAGE_LIMIT_HOURS = 24;

export async function POST(request: NextRequest) {
  try {
    // Check if user has reached usage limit
    const cookieStore = await cookies();

    const usageCookie = cookieStore.get(USAGE_COOKIE_NAME);

    if (usageCookie) {
      return NextResponse.json(
        { error: 'Usage limit reached. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse form data
    const formData = await request.formData();
    const description = formData.get('description') as string;
    const imageFile = formData.get('image') as File;

    if (!description || !imageFile) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Convert image to base64 for OpenAI API
    const imageBuffer = await imageFile.arrayBuffer();
    const imageBase64 = Buffer.from(imageBuffer).toString('base64');
    const mimeType = imageFile.type;
    const dataURI = `data:${mimeType};base64,${imageBase64}`;

    // Generate caption using OpenAI
    const isChatAnywhere =
      process.env.CHATANYWHERE_API_KEY && openai.apiKey === process.env.CHATANYWHERE_API_KEY;

    const response = await openai.chat.completions.create({
      model: isChatAnywhere ? 'gpt-3.5-turbo' : 'gpt-4-vision-preview',
      messages: [
        {
          role: 'system',
          content:
            'You are an expert Social Media Content Strategist, a 5 Year Experienced Digital Marketer or a Content Writer with experience across Instagram, TikTok, Facebook, LinkedIn, and Twitter. Your specialty is crafting high-converting captions that maximize engagement. For each caption, focus on these elements: (1) an attention-grabbing hook, (2) relevant emotional storytelling, (3) clear value proposition, and (4) strong call-to-action. Use concise language, varied sentence structures, and platform-appropriate tone. Hashtags should be strategic - include a mix of popular, niche, and branded tags (7-12 hashtags total per caption). Also use Best Practices Followerd by Every Social Media Manager. Your task is to generate engaging, SEO-friendly social media captions with trending and relevant hashtags based on an image and description. Think about what would perform well on platforms like Instagram, Facebook, and Twitter. Focus on creating content that is attention-grabbing, authentic, and optimized for engagement.',
        },
        {
          role: 'user',
          content: isChatAnywhere
            ? `Create 5 distinctly different social media captions for this description, each with a unique style:
            Option 1: Professional/informative style (ideal for LinkedIn/Facebook)
            Option 2: Casual/conversational style (ideal for Instagram)
            Option 3: Witty/humorous style (ideal for Twitter/TikTok)
            Option 4: Inspirational/motivational style (works across platforms)
            Option 5: Question-based engagement style (works across platforms)
            
            For each caption, follow this EXACT format:
            "Option 1: [caption text]
            Hashtags 1: [hashtags with # symbol]"
            
            Description: ${description}`
            : [
                {
                  type: 'text',
                  text: `Create 5 distinctly different social media captions for this image and description, each with a unique style:
                  Option 1: Professional/informative style (ideal for LinkedIn/Facebook)
                  Option 2: Casual/conversational style (ideal for Instagram)
                  Option 3: Witty/humorous style (ideal for Twitter/TikTok)
                  Option 4: Inspirational/motivational style (works across platforms)
                  Option 5: Question-based engagement style (works across platforms)
                  
                  For each caption, follow this EXACT format:
                  "Option 1: [caption text]
                  Hashtags 1: [hashtags with # symbol]"
                  
                  Make sure each caption is optimized for its intended platform, with appropriate length and tone.
                  
                  Description: ${description}`,
                },
                {
                  type: 'image_url',
                  image_url: {
                    url: dataURI,
                  },
                },
              ],
        },
      ],
      max_tokens: 1000,
    });

    // Parse the response to extract caption and hashtags
    const content = response.choices[0]?.message?.content || '';

    const captionSets: CaptionSet[] = [];

    // Extract each option with its hashtags using regex
    for (let i = 1; i <= 5; i++) {
      try {
        const optionRegex = new RegExp(`Option ${i}:(.*?)(?=Hashtags ${i}:|$)`, 's');
        const hashtagsRegex = new RegExp(`Hashtags ${i}:(.*?)(?=Option ${i + 1}:|$)`, 's');

        const captionMatch = content.match(optionRegex);
        const hashtagsMatch = content.match(hashtagsRegex);

        if (captionMatch) {
          // Get the caption and remove any leading markdown formatting characters
          const caption = captionMatch[1].trim().replace(/^\*\*\s*/, '');
          let hashtags: string[] = [];

          if (hashtagsMatch) {
            const hashtagText = hashtagsMatch[1].trim();
            hashtags = hashtagText
              .split(/\s+/)
              .filter(tag => tag.startsWith('#'))
              .map(tag => tag.trim());
          }

          // If no explicit hashtags were found, try to extract them from the caption
          if (hashtags.length === 0) {
            hashtags = caption
              .split(/\s+/)
              .filter(word => word.startsWith('#'))
              .map(tag => tag.trim());
          }

          captionSets.push({ caption, hashtags });
        }
      } catch (err) {
        console.warn(`Failed to parse Option ${i}:`, err);
      }
    }

    // Fallback if structured parsing fails
    if (captionSets.length === 0) {
      // Just split the content into 5 roughly equal parts as a fallback
      const parts = content
        .split(/Option \d+:|Caption \d+:/i)
        .filter(part => part.trim().length > 0);

      for (let i = 0; i < Math.min(parts.length, 5); i++) {
        const text = parts[i].trim();
        const hashtags = text
          .split(/\s+/)
          .filter(word => word.startsWith('#'))
          .map(tag => tag.trim());

        const caption = text.split(/Hashtags \d+:|Hashtags:/i)[0].trim();

        captionSets.push({
          caption: caption.replace(/#\w+/g, '').trim(),
          hashtags,
        });
      }
    }

    // If we still don't have 5 captions, fill in the missing ones
    while (captionSets.length < 5) {
      if (captionSets.length > 0) {
        // Create variations of existing captions
        const originalCaption = captionSets[0].caption;
        const originalHashtags = captionSets[0].hashtags;

        captionSets.push({
          caption: `Alternative version of caption: ${originalCaption}`,
          hashtags: originalHashtags,
        });
      } else {
        // Last resort fallback
        captionSets.push({
          caption: `Engaging caption for your ${description} image.`,
          hashtags: ['#content', '#socialmedia'],
        });
      }
    }

    // Set cookie to track usage
    cookieStore.set({
      name: USAGE_COOKIE_NAME,
      value: 'used',
      expires: Date.now() + USAGE_LIMIT_HOURS * 60 * 60 * 1000, // 24 hours in milliseconds
      path: '/',
    });

    console.log('Generated captions:', captionSets);

    return NextResponse.json({ captionSets });
  } catch (error) {
    console.error('Error generating caption:', error);
    return NextResponse.json({ error: 'Failed to generate caption' }, { status: 500 });
  }
}
