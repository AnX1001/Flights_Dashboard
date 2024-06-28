import { FlightsTable } from "./components/FlightsTable";
import WeatherWidget from "./components/WeatherWidget";
import SystemMessages from "./components/SystemMessages";
import UserInfo from "./components/UserInfo";
import styles from "./page.module.css";

export default async function DashboardPage() {
  const [flightsRes] = await Promise.all([
    fetch("http://localhost:3000/api/flights"),
    /*   fetch("http://localhost:3000/api/weather"),
      fetch("http://localhost:3000/api/messages"), */
  ]);

  const [flights] = await Promise.all([
    flightsRes.json(),
    /*   weatherRes.json(),
      messagesRes.json(), */
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.widgets}>
        <UserInfo />
        <WeatherWidget />
        <SystemMessages />
      </div>
      <FlightsTable flights={flights.flightData} />
    </div>
  );
}
