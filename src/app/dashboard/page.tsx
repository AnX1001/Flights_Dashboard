import { FlightsTable } from './components/FlightsTable';
import WeatherWidget from './components/WeatherWidget';
import SystemMessages from './components/SystemMessages';
import UserInfo from './components/UserInfo';
import styles from './page.module.css';
import weatherLabels from './components/weatherLabels.json';

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

  const airTemperature =
    weather?.data?.properties?.timeseries[0].data.instant.details.air_temperature ||
    ' No data available';

  const symbolCode =
    weather?.data?.properties?.timeseries[0].data.next_1_hours.summary.symbol_code ||
    ' No weather icon available';

  console.log(weather?.data?.properties?.timeseries[0].data);

  const flightData = flights?.flightData || [];

  const matchWeatherText = (symbolCode: string) => {
    const label = weatherLabels.find((label) => label['Symbol ID'] === symbolCode);
    return label ? label.English : 'Ingen data tilgjengelig';
  };

  const weatherText = matchWeatherText(symbolCode);

  return (
    <div className={styles.container}>
      <div className={styles.widgets}>
        <UserInfo />
        <WeatherWidget
          weatherDescription={weatherText}
          symbolCode={symbolCode}
          airTemperature={airTemperature}
        />
        <SystemMessages />
      </div>
      <FlightsTable flights={flightData} />
    </div>
  );
}
