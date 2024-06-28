import { FlightsTable } from "./FlightsTable";
import { render } from "@testing-library/react";

const { axe, toHaveNoViolations } = require("jest-axe");

expect.extend(toHaveNoViolations);

const mockFlights = [
  {
    id: 1,
    flight: "A123",
    destination: "Copenhagen",
    departureTime: "10:00",
    gate: "A1",
    status: "On Time",
  },
  {
    id: 2,
    flight: "B456",
    destination: "Tokyo",
    departureTime: "11:30",
    gate: "B2",
    status: "Delayed",
  },
  {
    id: 3,
    flight: "C789",
    destination: "Barcelona",
    departureTime: "11:50",
    gate: "C3",
    status: "Cancelled",
  },
];

it("should demonstrate this matcher`s usage", async () => {
  const { container } = render(<FlightsTable flights={mockFlights} />);

  expect(await axe(container)).toHaveNoViolations();
});
