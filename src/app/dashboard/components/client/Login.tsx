'use client';

import { LinkButton } from '../server/LinkButton';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import styles from '../../styles/Login.module.css';

export default function Login({ session }: { session: any }) {
  useEffect(() => {
    if (session !== null) {
      redirect('/dashboard');
    }
  }, [session]);

  const logIn = {
    signedIn: session !== null,
    label: session !== null ? 'Sign Out' : 'Sign In',
    href: session !== null ? '/api/auth/signout' : '/api/auth/signin',
  };
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <LinkButton label={logIn.label} href={logIn.href} />
        {!logIn.signedIn && <LinkButton label="Continue as Guest" href="/dashboard" />}
      </div>
    </div>
  );
}
