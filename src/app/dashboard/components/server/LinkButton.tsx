import Link from 'next/link';

import styles from '../../styles/LinkButton.module.css';

interface Props {
  label: string;
  href: string;
  onClick?: () => void;
}

export function LinkButton({ label, href, onClick }: Props) {
  return (
    <Link onClick={onClick} className={styles.linkButton} href={href}>
      {label}
    </Link>
  );
}
