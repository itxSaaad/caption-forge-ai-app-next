import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import {
  FiArrowRight,
  FiCheck,
  FiDownload,
  FiImage,
  FiMessageCircle,
  FiStar,
  FiUpload,
  FiUser,
  FiZap,
} from 'react-icons/fi';

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CaptionForge AI',
  url: 'https://caption-forge-ai.vercel.app',
  description:
    'Generate viral, SEO-friendly captions and hashtags for your images using AI in one click.',
  publisher: {
    '@type': 'Organization',
    name: 'CaptionForge AI',
    logo: {
      '@type': 'ImageObject',
      url: 'https://caption-forge-ai.vercel.app/favicon.ico',
    },
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://caption-forge-ai.vercel.app/generate-caption?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
  breadcrumbs: {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://caption-forge-ai.vercel.app',
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section - Improved height and structure */}
      <section className="relative flex min-h-[90vh] items-center py-24 md:pt-4 md:pb-24">
        <div className="from-primary-50/80 dark:from-primary-900/20 absolute inset-0 -z-10 bg-gradient-to-br to-transparent dark:to-transparent"></div>
        <div className="container-custom">
          <div className="grid items-center gap-16 md:grid-cols-2 md:gap-10">
            <div className="fade-in-scale max-w-xl">
              <div className="badge badge-primary mb-6 px-4 py-1.5 text-sm">
                AI-Powered Captions
              </div>
              <h1 className="mb-8 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl lg:text-6xl">
                Create Perfect Social Media Captions with AI
              </h1>
              <p className="mb-10 text-lg text-[var(--muted)] md:text-xl">
                Generate engaging, SEO-friendly captions and trending hashtags for your social media
                posts in seconds. Powered by advanced AI technology.
              </p>
              <div className="flex flex-col gap-5 sm:flex-row">
                <Link
                  href="/generate-caption"
                  className="btn btn-accent group text-center shadow-[var(--accent)]/20 shadow-lg hover:bg-[var(--accent)]/10 hover:shadow-[var(--accent)]/30 hover:shadow-xl"
                >
                  Try It Free
                  <FiArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#features"
                  className="btn btn-outline text-center hover:bg-[var(--primary-50)] dark:hover:bg-[var(--primary-900)]/10"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative h-96 md:h-[500px] lg:h-[550px]">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[var(--accent)]/20 blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-[var(--primary)]/20 blur-3xl"></div>
              <div className="slide-in relative h-full overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src="/hero-image.jpg"
                  alt="Social media caption generator"
                  className="h-full w-full rounded-3xl object-cover transition-all duration-700 hover:scale-105"
                  width={600}
                  height={700}
                  priority
                />
                <div className="glass absolute right-6 bottom-6 left-6 rounded-xl p-6 shadow-lg">
                  <p className="text-center font-semibold text-white">
                    Transform your social presence today
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Consistent height */}
      <section
        id="features"
        className="section flex min-h-[80vh] items-center bg-gradient-to-b from-transparent to-[var(--primary-50)]/30 py-24 dark:to-[var(--primary-900)]/10"
      >
        <div className="container-custom">
          <div className="mb-20 text-center">
            <div className="badge badge-outline mx-auto mb-5 px-4 py-1.5">Features</div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              Features That Make Us Stand Out
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-[var(--muted)] md:text-xl">
              Our AI technology thinks like a professional content strategist, writer, and digital
              marketer all in one.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            <div className="card card-hover fade-in flex flex-col items-start p-8 delay-100">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--primary)]/10 dark:bg-[var(--primary)]/20">
                <FiCheck className="h-8 w-8 text-[var(--primary)]" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">SEO-Optimized Captions</h3>
              <p className="text-[var(--muted)]">
                Our AI generates captions that are optimized for search engines, helping your
                content reach a wider audience and increase engagement.
              </p>
            </div>

            <div className="card card-hover fade-in flex flex-col items-start p-8 delay-200">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--secondary)]/10 dark:bg-[var(--secondary)]/20">
                <FiZap className="h-8 w-8 text-[var(--secondary)]" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Trending Hashtags</h3>
              <p className="text-[var(--muted)]">
                Get recommendations for viral and trending hashtags that are relevant to your
                content and industry to maximize your content&apos;s reach.
              </p>
            </div>

            <div className="card card-hover fade-in flex flex-col items-start p-8 delay-300">
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--accent)]/10 dark:bg-[var(--accent)]/20">
                <FiImage className="h-8 w-8 text-[var(--accent)]" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Image Analysis</h3>
              <p className="text-[var(--muted)]">
                Upload your images and our AI will analyze them to generate content that perfectly
                matches what you&apos;re sharing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section relative flex min-h-[80vh] items-center py-24">
        <div className="absolute inset-0 -z-10 bg-[var(--gradient-cool)] opacity-[0.03]"></div>
        <div className="container-custom">
          <div className="mb-20 text-center">
            <div className="badge badge-outline mx-auto mb-5 px-4 py-1.5">Simple Process</div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">How It Works</h2>
            <p className="mx-auto max-w-3xl text-lg text-[var(--muted)] md:text-xl">
              Generate perfect captions in just three simple steps
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="bounce-in flex flex-col items-center text-center">
              <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--gradient-primary)] shadow-[var(--primary)]/20 shadow-lg">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Upload Your Image</h3>
              <p className="mx-auto max-w-xs text-[var(--muted)]">
                Upload the image you want to post on your favorite social media platforms.
              </p>
              <div className="mt-6 flex justify-center">
                <FiUpload className="h-10 w-10 text-[var(--primary)]/50" />
              </div>
            </div>

            <div className="bounce-in flex flex-col items-center text-center delay-200">
              <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--gradient-cool)] shadow-[var(--secondary)]/20 shadow-lg">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Describe Your Content</h3>
              <p className="mx-auto max-w-xs text-[var(--muted)]">
                Tell us what your image is about and what you want to communicate to your audience.
              </p>
              <div className="mt-6 flex justify-center">
                <FiMessageCircle className="h-10 w-10 text-[var(--secondary)]/50" />
              </div>
            </div>

            <div className="bounce-in flex flex-col items-center text-center delay-400">
              <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[var(--gradient-accent)] shadow-[var(--accent)]/20 shadow-lg">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold">Get Your Caption</h3>
              <p className="mx-auto max-w-xs text-[var(--muted)]">
                Receive a professionally crafted caption with trending hashtags tailored to your
                content.
              </p>
              <div className="mt-6 flex justify-center">
                <FiDownload className="h-10 w-10 text-[var(--accent)]/50" />
              </div>
            </div>
          </div>

          <div className="mt-20 flex justify-center">
            <Link
              href="/generate-caption"
              className="btn btn-lg btn-primary group shadow-[var(--primary)]/20 shadow-lg"
            >
              Start Generating Captions
              <FiArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section flex min-h-[80vh] items-center bg-gradient-to-b from-transparent to-[var(--secondary-light)]/5 py-24 dark:to-[var(--secondary)]/10">
        <div className="container-custom">
          <div className="mb-20 text-center">
            <div className="badge badge-outline mx-auto mb-5 px-4 py-1.5">Testimonials</div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">What Our Users Say</h2>
            <p className="mx-auto max-w-3xl text-lg text-[var(--muted)] md:text-xl">
              Join thousands of content creators who trust CaptionForge for their social media
              success
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="card card-hover p-8 transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[var(--primary-light)]/20">
                    <FiUser className="h-8 w-8 text-[var(--primary-light)]" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Sarah Johnson</p>
                    <p className="text-sm text-[var(--muted)]">Content Creator</p>
                  </div>
                </div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-lg text-[var(--muted)]">
                &quot;CaptionForge AI has completely transformed my Instagram strategy. I save hours
                of time and my engagement has increased by 45%!&quot;
              </p>
            </div>

            <div className="card card-hover p-8 transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[var(--secondary-light)]/20">
                    <FiUser className="h-8 w-8 text-[var(--secondary-light)]" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Mark Chen</p>
                    <p className="text-sm text-[var(--muted)]">Digital Marketer</p>
                  </div>
                </div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-lg text-[var(--muted)]">
                &quot;The hashtag recommendations are incredibly accurate. Our reach has expanded
                dramatically since we started using CaptionForge.&quot;
              </p>
            </div>

            <div className="card card-hover p-8 transition-all duration-300 hover:-translate-y-2">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-[var(--accent-light)]/20">
                    <FiUser className="h-8 w-8 text-[var(--accent-light)]" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Priya Patel</p>
                    <p className="text-sm text-[var(--muted)]">Small Business Owner</p>
                  </div>
                </div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-lg text-[var(--muted)]">
                &quot;As a small business owner, this tool has been a game-changer.
                Professional-quality captions without hiring a copywriter!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section flex min-h-[60vh] items-center py-20">
        <div className="container-custom">
          <div className="overflow-hidden rounded-3xl bg-[var(--gradient-primary)] p-10 shadow-2xl md:p-16 lg:p-20">
            <div className="relative mx-auto max-w-4xl text-center">
              <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>
              <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

              <div className="relative">
                <span className="mb-6 inline-block rounded-full bg-white/20 px-6 py-2 text-base font-medium text-white backdrop-blur-sm">
                  Get Started Today
                </span>
                <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl lg:text-6xl">
                  Ready to Transform Your <br className="hidden md:block" />
                  Social Media?
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-xl text-white/90">
                  Start generating engaging captions that convert and drive engagement for all your
                  social platforms.
                </p>
                <Link
                  href="/generate-caption"
                  className="btn btn-lg group bg-white/95 text-[var(--primary)] hover:bg-white hover:shadow-xl hover:shadow-white/30"
                >
                  Try CaptionForge Now
                  <FiArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
    </div>
  );
}
