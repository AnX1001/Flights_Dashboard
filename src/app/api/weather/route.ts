import { NextResponse } from 'next/server';

export async function GET() {
  function getWeatherApiUrl() {
    const correctUrl =
      'https://api.met.no/weatherapi/locationforecast/2.0/mini?lat=59.9139&lon=10.7522';
    const incorrectUrl =
      'httsps://api.met.no/weatherapi/locationforecast/2.0/mini?lat=59.9139&lon=10.7522';
    return Math.random() > 0.5 ? correctUrl : incorrectUrl;
  }

  const url = getWeatherApiUrl();

  try {
    const headers = new Headers({
      'Content-Type': 'application/json',
    });

    const res = await fetch(url, { headers });

    if (!res.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await res.json();
    return NextResponse.json({ data });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
