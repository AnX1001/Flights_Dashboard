// Handle API request for fetch flight data

// src/app/api/flights/route.ts
import { NextResponse } from 'next/server';

const flightData = [
  {
    id: 1,
    flight: 'A123',
    destination: 'Copenhagen',
    departureTime: '10:00',
    gate: 'A1',
    status: 'On Time',
  },
  {
    id: 2,
    flight: 'B456',
    destination: 'Tokyo',
    departureTime: '11:30',
    gate: 'B2',
    status: 'Delayed',
  },
  {
    id: 3,
    flight: 'C789',
    destination: 'Barcelona',
    departureTime: '11:50',
    gate: 'C3',
    status: 'Cancelled',
  },
];

export async function GET() {
  /*   const headers = new Headers({
          'Content-Type': 'application/json',
          'API-Key': process.env.DATA_API_KEY ?? '',
      });

      const res = await fetch('https://data.mdb-api.com/...', { headers });
      const data = await res.json(); */

  return NextResponse.json({ flightData });
}
