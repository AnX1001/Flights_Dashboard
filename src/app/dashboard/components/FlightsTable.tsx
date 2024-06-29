import styles from '../styles/FlightsTable.module.css';
import Paper from './Paper';

interface Flight {
  flight: string;
  destination: string;
  gate: string;
  status: string;
  departureTime: string;
}

interface Props {
  flights: Flight[];
}

export function FlightsTable({ flights }: Props) {
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
          {flights.map((flightInfo) => (
            <tr key={flightInfo.flight}>
              <td>{flightInfo.departureTime}</td>
              <td>{flightInfo.flight}</td>
              <td>{flightInfo.gate}</td>
              <td>{flightInfo.destination}</td>
              <td>{flightInfo.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Paper>
  );
}
