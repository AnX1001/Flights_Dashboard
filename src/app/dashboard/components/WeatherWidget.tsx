import WidgetCard from './WidgetCard.tsx';
import weatherLabels from './weatherLabels.json';
import { WeatherData } from './types';
interface Props {
  weather: WeatherData;
}

export default function WeatherWidget({ weather }: Props) {
  const airTemperature =
    weather.data.properties.timeseries[0].data.instant.details.air_temperature ||
    ' No data available';

  const symbolCode =
    weather.data.properties.timeseries[0].data.next_1_hours?.summary.symbol_code ||
    ' No weather icon available';

  const matchWeatherText = (symbolCode: string) => {
    const label = weatherLabels.find((label) => label['Symbol ID'] === symbolCode);
    return label ? label.English : 'No data available.';
  };

  const weatherDescription = matchWeatherText(symbolCode);

  return (
    <WidgetCard
      logoSrc={`./weatherIcons/${symbolCode}.svg`}
      heading="Weather"
      imageAlt="image of a cloud"
      info={` ${airTemperature} °C, ${weatherDescription}`}
    />
  );
}
