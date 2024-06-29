import styles from '../styles/UserInfo.module.css';

export default function UserInfo() {
  return (
    <div className={styles.userInfo}>
      <img src="./SystemMessagesIcon.svg" alt="illustration" className={styles.logo} />{' '}
      <h2>Good morning, Kazuya Mishima! </h2>
      <h3>You are sucessfully logged in.</h3>
    </div>
  );
}
