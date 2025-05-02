import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // TODO: Integrate with OpenAI API here
    return NextResponse.json({ message: 'Caption generation not implemented yet' });
  } catch (error) {
    console.log('Error generating caption:', error);
    return NextResponse.json({ error: 'Failed to generate caption' }, { status: 500 });
  }
}
