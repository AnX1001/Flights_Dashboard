import styles from '../styles/WidgetCard.module.css';

interface Props {
  logoSrc: string;
  heading: string;
  info: string;
  imageAlt: string;
}
export default function WidgetCard({ logoSrc, imageAlt, heading, info }: Props) {
  return (
    <div className={styles.widgetCard}>
      <div className={styles.logoTitleWrapper}>
        <img src={logoSrc} alt={imageAlt} className={styles.logo} />
        <h2>{heading} </h2>
      </div>
      <h3 className={styles.info}>{info}</h3>
    </div>
  );
}
