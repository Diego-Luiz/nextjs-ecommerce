import React from 'react';
import { 
  IoIosArrowForward, 
  IoIosArrowBack 
} from 'react-icons/io';

import ImpactCard from '../ImpactCard';
import styles from './contentSlider.module.scss';

const ContentSlider = ({ TagContainer, data }) => {
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
      <div className={styles['container__content']}>
        {data.map((item, index) => (
          <ImpactCard 
            key={index}
            data={item}
            dataSchema={{
              title: 'category',
              image: 'categoryImage'
            }}
          />
        ))}
      </div>
    </TagContainer>
  );
}

export default ContentSlider;