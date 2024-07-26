import Image from 'next/image';
import styles from '../../styles/WidgetCard.module.css';

interface Props {
  logoSrc?: string;
  heading: string;
  info: string | React.ReactNode;
  imageAlt: string;
}
export default function WidgetCard({ logoSrc, imageAlt, heading, info }: Props) {
  return (
    <div className={styles.widgetCard}>
      <h2>{heading} </h2>
      <div className={styles.infoIllustrationWrapper}>
        <h3 className={styles.info}>{info}</h3>
        {logoSrc && <Image src={logoSrc} alt={imageAlt} className={styles.logo} />}
      </div>
    </div>
  );
}
