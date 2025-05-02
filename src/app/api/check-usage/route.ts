import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookiesStore = await cookies();

  const usageCookie = cookiesStore.get('caption_forge_usage');
  const usageRemaining = !usageCookie;

  return NextResponse.json({ usageRemaining });
}
