import styles from "../styles/WeatherWidget.module.css";

export default function WeatherWidget() {
  return (
    <div className={styles.weatherWidget}>
      <img
        src="./WeatherWidgetIcon.svg"
        alt="illustration"
        className={styles.logo}
      />{" "}
      <h2>Weather Forecast</h2>
      <h3>Storm approaching, eta: 3 days.</h3>
    </div>
  );
}
