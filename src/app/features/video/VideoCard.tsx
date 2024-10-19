import CustomVideo from './CustomVideo';
import styles from '../components/widgetCard/WidgetCard.module.css';

export default function VideoCard() {
  return (
    <div className={styles.widgetCard}>
      <CustomVideo />
    </div>
  );
}
