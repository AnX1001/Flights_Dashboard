import styles from '../styles/FlightsTable.module.css';
import Paper from './Paper';
import FaultyWidgetCard from './FaultyWidgetCard';

interface Props {
  flights: FlightsData;
  error: string | null;
}
export function FlightsTable({ flights, error }: Props) {
  if (error) {
    return (
      <div className={styles.errorMessage}>
        <h1>Departures</h1>
        <h3>No data available</h3>
        <h4> Please contact IT support at 555-456-7890</h4>
      </div>
    );
  }

  const { flightData } = flights;
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
          {flightData.map((flightInfo) => (
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
      )
    </Paper>
  );
}
