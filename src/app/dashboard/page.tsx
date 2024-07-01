import { FlightsTable } from './components/FlightsTable';
import WeatherWidget from './components/WeatherWidget';
import SystemMessages from './components/SystemMessages';
import UserInfo from './components/UserInfo';
import styles from './page.module.css';

export default async function DashboardPage() {
  const [flightsRes, weatherRes] = await Promise.all([
    fetch('http://localhost:3000/api/flights'),
    fetch('http://localhost:3000/api/weather'),
    //fetch("http://localhost:3000/api/messages")
  ]);

  const [flights, weather] = await Promise.all([flightsRes.json(), weatherRes.json()]);

  const airTemperature = weather.data.properties.timeseries[0].data.instant.details.air_temperature;

  return (
    <div className={styles.container}>
      <div className={styles.widgets}>
        <UserInfo />
        <WeatherWidget airTemperature={airTemperature} />
        <SystemMessages />
      </div>
      <FlightsTable flights={flights.flightData} />
    </div>
  );
}
