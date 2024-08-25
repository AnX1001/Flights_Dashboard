import Link from 'next/link';

import styles from '../../styles/LinkButton.module.css';


interface Props {
  label: string;
  href: string;
}

export function LinkButton({ label, href }: Props) {
  return <Link className={styles.linkButton} href={href}>{label}</Link>;
}
