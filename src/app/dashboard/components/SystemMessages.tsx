import WidgetCard from './WidgetCard.tsx';

export default function WeatherWidget() {
  return (
    <WidgetCard
      logoSrc="./System.svg"
      heading="System messages"
      imageAlt="image of a computer"
      info="All systems online."
    />
  );
}
