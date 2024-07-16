import styles from '../../styles/button.module.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  error: boolean;
}

export function Button({ error, children, ...rest }: Props) {
  return (
    <button {...rest} className={error ? styles.disabled : styles.button}>
      {children}
    </button>
  );
}
