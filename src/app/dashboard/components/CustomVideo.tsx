'use client';

import styles from '../styles/CustomVideo.module.css';
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

interface Props {
  heading: string;
}
export default function CustomVideo({ heading }: Props) {
  const [textareaInput, setTextareaInput] = useState('');
  const [startVideo, setStartVideo] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('Show video');

  //TODO: add error handling for invalid embed code

  const sanitizerConfig = {
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
    ALLOWED_URI_REGEXP: /^(https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+\?.*)$/,
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaInput(DOMPurify.sanitize(event.target.value, sanitizerConfig));
  };

  const showVideo = () => {
    setStartVideo(true);
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
          </>
        )}
        <button disabled={!textareaInput} onClick={showVideo}>
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
