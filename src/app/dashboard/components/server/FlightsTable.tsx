import styles from '../../styles/FlightsTable.module.css';
import Paper from './Paper';

interface Props {
  flights: {
    flight: string;
    time: string;
    gate: string;
    destination: string;
    status: string;
  }[];
  error?: string | null;
}

export function FlightsTable({ flights, error }: Readonly<Props>) {
  if (error) {
    return (
      <div className={styles.errorMessage}>
        <h1>Departures</h1>
        <h3>No data available</h3>
        <h4> Please contact IT support at 555-456-7890</h4>
      </div>
    );
  }

  const tableHeadings = ['Time', 'Flight', 'Destination', 'Gate', 'Status'];
  return (
    <Paper title="Departures">
      <table className={styles.table}>
        <caption className={styles.captionScreenReaderOnly}>Flight Departures</caption>
        <thead>
          <tr>
            {tableHeadings.map((tableHeading) => (
              <th key={tableHeading} scope="col">
                {tableHeading}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {flights.map((flight) => (
            <tr key={flight.flight}>
              <td>{flight.time}</td>
              <td>{flight.flight}</td>
              <td>{flight.gate}</td>
              <td>{flight.destination}</td>
              <td>{flight.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Paper>
  );
}
