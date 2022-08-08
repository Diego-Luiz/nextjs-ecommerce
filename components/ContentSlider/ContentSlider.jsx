import React from 'react';
import { 
  IoIosArrowForward, 
  IoIosArrowBack 
} from 'react-icons/io';

import styles from './contentSlider.module.scss';

const ContentSlider = ({ TagContainer, ContentTag, contentStyles, children }) => {
  return (
    <TagContainer
      className={styles['container']}
    >
      <button
        type="button"
        className={styles['slide-fwd-btn']}
      >
        <span className="sr-only">See more sections</span>
        <IoIosArrowForward />
      </button>
      <button
        type="button"
        className={styles['slide-back-btn']}
      >
        <span className="sr-only">Back to previous sections</span>
        <IoIosArrowBack />
      </button>
      <ContentTag 
        className={styles['container__content']}
        style={contentStyles || {}}
      >
        {children}
      </ContentTag>
    </TagContainer>
  );
}

export default ContentSlider;