import { NextResponse } from 'next/server';

export async function GET() {
  const url = process.env.FLIGHTS_API_URL;

  if (!url) {
    return NextResponse.json(
      { error: 'FLIGHTS_API_URL must be defined in environment variables.' },
      { status: 500 },
    );
  }

  try {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const res = await fetch(url, { headers });

    if (!res.ok) {
      throw new Error('Failed to fetch flights data');
    }
    const data = await res.json();
    return NextResponse.json({ data });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
