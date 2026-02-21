import { NextResponse } from 'next/server';
import { getSupabase } from '@/lib/supabase';

const BUCKET = 'resume';
const FILE_PATH = 'Razvan Opris - Resume.pdf';

export async function GET() {
  try {
    const supabase = getSupabase();

    const { data, error } = await supabase.storage
      .from(BUCKET)
      .createSignedUrl(FILE_PATH, 60);

    if (error || !data?.signedUrl) {
      console.error('Supabase signed URL error:', error);
      return NextResponse.json(
        { error: 'Failed to generate download link' },
        { status: 500 },
      );
    }

    return NextResponse.redirect(data.signedUrl);
  } catch (err) {
    console.error('Resume download error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
