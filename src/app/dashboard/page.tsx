import { FlightsTable } from './components/FlightsTable';
import WeatherWidget from './components/WeatherWidget';
import SystemMessages from './components/SystemMessages';
import UserInfo from './components/UserInfo';
import styles from './page.module.css';

export default async function DashboardPage() {
  const promises = [
    fetch('http://localhost:3000/api/flights'),
    fetch('http://localhost:3000/api/weather'),
    //fetch('http://localhost:3000/api/messages'),
  ];

  const results = await Promise.allSettled(promises);

  const dataPromises = results.map((result) =>
    result.status === 'fulfilled' ? result.value.json() : Promise.reject(result.reason),
  );

  const jsonResults = await Promise.allSettled(dataPromises);

  const [flights, weather] = jsonResults.map((result) =>
    result.status === 'fulfilled' ? result.value : 'null',
  );

  return (
    <div className={styles.container}>
      <div className={styles.widgets}>
        <UserInfo />
        <WeatherWidget weather={weather} />
        <SystemMessages />
      </div>
      <FlightsTable flights={flights} />
    </div>
  );
}
