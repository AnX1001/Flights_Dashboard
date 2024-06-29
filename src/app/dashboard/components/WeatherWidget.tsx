import WidgetCard from './WidgetCard.tsx';

export default function WeatherWidget() {
  return (
    <WidgetCard
      logoSrc="./Weather.svg"
      heading="Weather"
      imageAlt="image of a cloud"
      info="Storm approaching in 3 days."
    />
  );
}
