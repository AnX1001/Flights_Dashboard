import { FlightsTable } from './components/server/FlightsTable';
import WeatherWidget from './components/server/WeatherWidget';
import VideoCard from './components/server/VideoCard';
import SystemMessages from './components/server/SystemMessages';
import UserInfo from './components/client/UserInfo';
import styles from './page.module.css';

export default async function DashboardPage() {
  async function fetchData(url: string) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      return { data: json, error: null };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      return { data: null, error: errorMessage };
    }
  }

  const weatherApiUrl = process.env.NEXT_PUBLIC_WEATHER_API_URL;
  const flightsApiUrl = process.env.NEXT_PUBLIC_FLIGHTS_API_URL;

  if (!weatherApiUrl || !flightsApiUrl) {
    throw new Error('API URLs must be defined in environment variables.');
  }
  const weather = await fetchData(weatherApiUrl);
  const flights = await fetchData(flightsApiUrl);

  return (
    <div className={styles.container}>
      <div className={styles.widgets}>
        <UserInfo />
        <WeatherWidget weather={weather.data} error={weather.error} />
        <SystemMessages />
        <VideoCard />
      </div>
      <FlightsTable flights={flights.data} error={flights.error} />
    </div>
  );
}
