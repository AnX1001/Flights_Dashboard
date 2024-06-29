import styles from '../styles/SystemMessages.module.css';

export default function SystemMessages() {
  return (
    <div className={styles.systemMessages}>
      <img src="./SystemMessagesIcon.svg" alt="illustration" className={styles.logo} />{' '}
      <h2>System</h2>
      <h3>No system failure detected.</h3>
    </div>
  );
}
