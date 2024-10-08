import { FlightsTable } from './FlightsTable';
import { render } from '@testing-library/react';

import { axe } from 'jest-axe';

const mockFlights = {
  flightData: [
    {
      id: 1,
      flight: 'A123',
      destination: 'Bergen',
      time: '10:00',
      gate: 'A1',
      status: 'On Time',
    },
    {
      id: 2,
      flight: 'B456',
      destination: 'Tokyo',
      time: '11:30',
      gate: 'B2',
      status: 'Delayed',
    },
    {
      id: 3,
      flight: 'C789',
      destination: 'Barcelona',
      time: '11:50',
      gate: 'C3',
      status: 'Cancelled',
    },
  ],
};

it('should pass accessiblity checks using axe (~30% detection rate)', async () => {
  const { container } = render(<FlightsTable error={null} flights={mockFlights.flightData} />);

  expect(await axe(container)).toHaveNoViolations();
});
