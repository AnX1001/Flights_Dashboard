'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { LinkButton } from '../server/LinkButton';
import styles from '../../styles/SessionDialog.module.css';

export function SessionDialog() {
  const { data: session, status } = useSession();

  const [isOpen, setIsOpen] = useState(status === 'unauthenticated');

  useEffect(() => {
    const interval = setTimeout(() => {
      if (status === 'unauthenticated') {
        setIsOpen(true);
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [status]);

  return (
    <dialog className={styles.dialog} open={isOpen}>
      <h1 className={styles.dialogTitle}>Your session has expired.</h1>
      <p>Please log in or continue as guest.</p>
      <div className={styles.buttonGroup}>
        <LinkButton label={'Log in'} href={'/api/auth/signin'} />
        <LinkButton
          onClick={() => setIsOpen(false)}
          label={'Continue as guest'}
          href={'/dashboard'}
        />
      </div>
    </dialog>
  );
}
