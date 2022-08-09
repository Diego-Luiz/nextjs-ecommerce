import React, { 
  useState,
  useEffect,
  useRef
} from 'react';

import styles from './carousel.module.scss';
import CarouselContent from './CarouselContent';

const Carousel = ({ ContainerTag, data }) => {
  const [contentIndex, setContentIndex] = useState(0);
  const intervalFunc = useRef(null);
  
  useEffect(() => {
    intervalFunc.current = setInterval(() => {
      handleIndexDataChange(contentIndex + 1);
    }, 5000);
    return () => {
      clearInterval(intervalFunc.current);
      intervalFunc.current = null;
    };
  }, [intervalFunc.current]);

  const handleIndexDataChange = index => {
    let newIndex = index + 1 > data.length ? 0 : index; 
    if(newIndex !== contentIndex) setContentIndex(newIndex);
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
          onClick={() => { handleIndexDataChange(index); }}
        >
        </button>
      ))}
    </ContainerTag>
  );
}

export default Carousel;