import WidgetCard from '../components/widgetCard/WidgetCard';

export default function WeatherWidget() {
  const isDockerized = process.env.RUNNING_IN_DOCKER ? 'running inside Docker' : 'running locally';

  return <WidgetCard heading="System messages" info={`The app is ${isDockerized}`} />;
}
