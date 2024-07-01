import WidgetCard from './WidgetCard.tsx';

interface Props {
  airTemperature: string;
}

export default function WeatherWidget({ airTemperature }: Props) {
  return (
    <WidgetCard
      logoSrc="./Weather.svg"
      heading="Weather"
      imageAlt="image of a cloud"
      info={`Air temperature ${airTemperature} °C`}
    />
  );
}
