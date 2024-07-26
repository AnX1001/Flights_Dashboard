import styles from '../../styles/FaultyWidgetCard.module.css';

interface Props {
  heading: string;
  errorInfo: string;
  contactInfo: string;
}
export default function FaultyWidgetCard({ heading, errorInfo, contactInfo }: Props) {
  return (
    <div className={styles.faultyWidgetCard}>
      <h2>{heading} </h2>
      <h3>{errorInfo}</h3>
      <h4 className={styles.contactInfo}>{contactInfo}</h4>
    </div>
  );
}
