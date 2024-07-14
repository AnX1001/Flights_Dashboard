'use client';

import styles from '../styles/CustomVideo.module.css';
import { useState } from 'react';
import DOMPurify from 'dompurify';

interface Props {
  heading: string;
}
export default function CustomVideo({ heading }: Props) {
  const [textareaInput, setTextareaInput] = useState('');
  const [sanitizedContent, setSanitizedContent] = useState('');
  const [startVideo, setStartVideo] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('Show video');
  const [error, setError] = useState(false);

  const validYouTubeEmbedCode =
    /<iframe[^>]+src="https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+\?.*"[^>]*><\/iframe>/;

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaInput(event.target.value);

    const sanitized = DOMPurify.sanitize(event.target.value, {
      ALLOWED_TAGS: ['iframe'],
      ALLOWED_ATTR: [
        'src',
        'width',
        'height',
        'title',
        'frameborder',
        'allow',
        'allowfullscreen',
        'referrerpolicy',
      ],
    });

    // Validate if the sanitized content contains a valid YouTube iframe
    if (validYouTubeEmbedCode.test(sanitized)) {
      setSanitizedContent(sanitized);
      setError(false);
    } else {
      setSanitizedContent('');
      setError(true);
    }
  };

  const showVideo = () => {
    if (!error && sanitizedContent) {
      setStartVideo(true);
      setButtonLabel('Insert new video');
    }
    if (startVideo) {
      setStartVideo(false);
      setButtonLabel('Show video');
      setTextareaInput('');
    }
  };

  return (
    <div className={styles.customVideo}>
      <div className={styles.headingTextAreaWrapper}>
        <h2>{heading} </h2>
        {startVideo ? (
          <div
            dangerouslySetInnerHTML={{
              __html: textareaInput,
            }}
          />
        ) : (
          <>
            <textarea
              onChange={handleInputChange}
              value={textareaInput}
              rows={10}
              cols={50}
              className={styles.textarea}
              placeholder="Please visit YouTube, click 'Share', and paste the embed code here."
            ></textarea>
            <p className={styles.error}>{error && 'Invalid embed code'}</p>
          </>
        )}
        <button className={styles.button} disabled={!textareaInput || error} onClick={showVideo}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
