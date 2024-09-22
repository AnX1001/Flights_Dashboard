import { FlightsTable } from './components/server/FlightsTable';
import WeatherWidget from './components/server/WeatherWidget';
import { SessionDialog } from './components/client/SessionDialog';
import VideoCard from './components/server/VideoCard';
import SystemMessages from './components/server/SystemMessages';
import UserInfo from './components/client/UserInfo';
import styles from './page.module.css';
import { auth } from '../auth';
import { LinkButton } from './components/server/LinkButton';
import InternalLogs from './components/server/InternalLogs';

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

  const weatherApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/weather`;
  const flightsApiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/flights`;

  if (!weatherApiUrl || !flightsApiUrl) {
    throw new Error('API URLs must be defined in environment variables.');
  }
  const weather = await fetchData(weatherApiUrl);
  const flights = await fetchData(flightsApiUrl);

  const session = await auth();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <LinkButton
          label={session === null ? 'Sign In' : 'Sign Out'}
          href={session === null ? '/api/auth/signin' : '/api/auth/signout'}
        />
      </header>

      <div className={styles.widgets}>
        <UserInfo userName={session?.user?.name} />
        <WeatherWidget weather={weather.data} error={weather.error} />
        <SystemMessages />
        <VideoCard />
        {session?.user?.name === 'An'}
        {session?.user?.name === 'An' && <InternalLogs />}
      </div>

      <FlightsTable flights={flights.data} error={flights.error} />
      <SessionDialog />
    </div>
  );
}
