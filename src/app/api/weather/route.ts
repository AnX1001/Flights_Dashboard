import { NextResponse } from 'next/server';

export async function GET() {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const res = await fetch(
    'https://api.met.no/weatherapi/locationforecast/2.0/mini?lat=59.9139&lon=10.7522',
    { headers },
  );

  const data = await res.json();

  return NextResponse.json({ data });
}
