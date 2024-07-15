import WidgetCard from './WidgetCard.tsx';

export default function UserInfo() {
  const now = new Date().toISOString();

  const currentTime = now.split('T')[1].split('.')[0];

  const getcurrentHour = new Date().getHours();

  const timeGreeting = () => {
    if (getcurrentHour > 12) {
      return 'Good afternoon';
    } else if (getcurrentHour > 16) {
      return 'Good evening';
    } else {
      return 'Good morning';
    }
  };

  return (
    <>
      <WidgetCard heading={`${timeGreeting()} An!`} info={`Current time: ${currentTime}`} />
    </>
  );
}
