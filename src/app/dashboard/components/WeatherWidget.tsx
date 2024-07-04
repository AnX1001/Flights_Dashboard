import WidgetCard from './WidgetCard.tsx';

interface Props {
  airTemperature: string;
  symbolCode: string;
  weatherDescription: string;
}

export default function WeatherWidget({ weatherDescription, airTemperature, symbolCode }: Props) {
  return (
    <WidgetCard
      logoSrc={`./weatherIcons/${symbolCode}.svg`}
      heading="Weather"
      imageAlt="image of a cloud"
      info={` ${airTemperature} °C, ${weatherDescription}`}
    />
  );
}
