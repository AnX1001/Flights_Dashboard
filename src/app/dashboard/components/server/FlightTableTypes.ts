interface Flight {
  flight: string;
  destination: string;
  gate: string;
  status: string;
  departureTime: string;
}

interface FlightsData {
  flightData: Flight[];
}
