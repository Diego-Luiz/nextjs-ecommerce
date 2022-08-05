import React from 'react';
import ImpactCard from '../ImpactCard';

import styles from './contentSlider.module.scss';

const ContentSlider = ({ TagContainer, data }) => {
  return (
    <TagContainer
      className={styles['container']}
    >
      {data.map((category, index) => (
        <ImpactCard 
          key={index}
          category={category}
        />
      ))}
    </TagContainer>
  );
}

export default ContentSlider;