import styles from "../styles/Paper.module.css";

interface Props {
  title: string;
  children: React.ReactNode;
}
export default function Paper({ title, children }: Props) {
  return (
    <div className={styles.paper}>
      <span className={styles.logoTitleWrapper}>
        <img src="/Logo.svg" alt="Flylogo" className={styles.logo} />
        <h1 className={styles.title}>{title}</h1>
      </span>

      {children}
    </div>
  );
}
