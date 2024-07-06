import { FlightsTable } from './components/FlightsTable';
import WeatherWidget from './components/WeatherWidget';
import SystemMessages from './components/SystemMessages';
import UserInfo from './components/UserInfo';
import styles from './page.module.css';

export default async function DashboardPage() {
  async function getWeather() {
    const url = 'http://localhost:3000/api/weather';
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

  async function getFlights() {
    const url = 'http://localhost:3000/api/flights';
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

  const weather = await getWeather();
  const flights = await getFlights();

  return (
    <div className={styles.container}>
      <div className={styles.widgets}>
        <UserInfo />
        <WeatherWidget weather={weather.data} error={weather.error} />
        <SystemMessages />
      </div>
      <FlightsTable flights={flights.data} />
    </div>
  );
}
