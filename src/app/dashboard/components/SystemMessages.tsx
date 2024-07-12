import WidgetCard from './WidgetCard.tsx';

export default function WeatherWidget() {


  const isDockerized = process.env.RUNNING_IN_DOCKER ? "running inside Docker" : "running locally";





  return (
    <WidgetCard
      logoSrc="./System.svg"
      heading="System messages"
      imageAlt="image of a computer"
      info={`All systems online. The app is ${isDockerized}`}
    />
  );
}
