import styles from '../../styles/WidgetCard.module.css';
import CustomVideo from '../client/CustomVideo';

export default function VideoCard() {
  return (
    <div className={styles.widgetCard}>
      <CustomVideo />
    </div>
  );
}
