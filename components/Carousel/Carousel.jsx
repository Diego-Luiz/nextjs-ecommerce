import React, { 
  useState
} from 'react';

import styles from './carousel.module.scss';
import CarouselContent from './CarouselContent';

const Carousel = ({ ContainerTag, data }) => {
  const [contentIndex, setContentIndex] = useState(0);

  const handleIndexBtnClick = index => {
    if(index !== contentIndex) setContentIndex(index);
  };
  
  return (
    <ContainerTag
      className={styles['container']}
    >
      {data.map((item, index) => (
        <CarouselContent 
          key={index}
          content={item}
          currentContentIndex={contentIndex}
          index={index}
        />
      ))}
      {data.map((item, index) => (
        <button
          type='button'
          key={index}
          className={styles['btnIndex']}
          onClick={() => { handleIndexBtnClick(index); }}
        >
        </button>
      ))}
    </ContainerTag>
  );
}

export default Carousel;