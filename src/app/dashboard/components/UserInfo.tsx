'use client';

import WidgetCard from './WidgetCard.tsx';
import { useEffect, useState } from 'react';

export default function UserInfo() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const currentTime = now.toLocaleTimeString('nb-no', {
    timeZone: 'Europe/Oslo',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const getCurrentHour = new Date().toLocaleString('nb-no', {
    timeZone: 'Europe/Oslo',
    hour: '2-digit',
    hour12: false,
  });

  const timeGreeting = () => {
    const hour = parseInt(getCurrentHour, 10);
    if (hour < 12) {
      return 'Good morning';
    } else if (hour < 18) {
      return 'Good afternoon';
    } else {
      return 'Good evening';
    }
  };

  return (
    <>
      <WidgetCard
        heading={`${timeGreeting()} An!`}
        info={
          <time suppressHydrationWarning dateTime={currentTime}>
            Local time Oslo/Norway: {currentTime}
          </time>
        }
      />
    </>
  );
}
