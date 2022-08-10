import React, { 
  useState,
  useEffect,
  useRef
} from 'react';

import styles from './carousel.module.scss';
import CarouselContent from './CarouselContent';

const Carousel = ({ ContainerTag, data }) => {
  const [contentIndex, setContentIndex] = useState(0);
  const [indexManuallySetted, setIndexManuallySetted] = useState(false);
  const intervalFunc = useRef(null);

  const initIntervalFunc = () => {
    intervalFunc.current = setInterval(() => {
      setContentIndex(prevIndex => prevIndex + 1 >= data.length ? 0 : prevIndex + 1);
    }, 6000);
  };
  const resetIntervalFunc = () => {
    clearInterval(intervalFunc.current);
    intervalFunc.current = null;
  };
  
  useEffect(() => {
    initIntervalFunc();
    return () => {
      resetIntervalFunc();
    };
  }, []);

  useEffect(() => {
    if(indexManuallySetted) {
      resetIntervalFunc();
      setTimeout(() => {
        initIntervalFunc();
        setIndexManuallySetted(false);
      }, 6000);
    }
  }, [indexManuallySetted]);

  const handleIndexDataChange = index => {
    if(index !== contentIndex) {
      setContentIndex(index);
      setIndexManuallySetted(true);
    }
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