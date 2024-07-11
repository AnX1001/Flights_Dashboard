'use client';

import styles from '../styles/CustomVideo.module.css';
import { useState } from 'react';
import DOMPurify from 'dompurify';

interface Props {
  heading: string;
}
export default function CustomVideo({ heading }: Props) {
  const [htmlContent, setHtmlContent] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHtmlContent(event.target.value);
    alert(
      'Warning: dangerouslySetInnerHTML is enabled. This text area input is susceptible to cross-site scripting (XSS) attacks.',
    );
  };

  return (
    <div className={styles.customVideo}>
      <div className={styles.headingTextAreaWrapper}>
        <h2>{heading} </h2>

        {htmlContent ? (
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(htmlContent),
            }}
          />
        ) : (
          <textarea
            value={htmlContent}
            onChange={handleChange}
            rows={20}
            cols={70}
            className={styles.textarea}
            placeholder="Please visit YouTube, click 'Share', and paste the embed code here."
          ></textarea>
        )}
      </div>
    </div>
  );
}
