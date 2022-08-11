import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef
} from 'react';
import { 
  IoIosArrowForward, 
  IoIosArrowBack 
} from 'react-icons/io';

import styles from './contentSlider.module.scss';

const ContentSlider = ({ TagContainer, ContentTag, contentStyles={}, children, getContentWidth }) => {
  //this determines the element to which the content will be scrolled 
  const [scrollToElement, setScrollToElement] = useState(1);
  const contentLength = children.length;
  const contentPadding = useRef(0);
  let [animationStyle, setAnimationStyle] = useState({});
  let contentWidth = 0;
  
  useEffect(() => {
    const root = document.querySelector(':root');
    contentPadding.current = getComputedStyle(root).getPropertyValue('--defaultContainerPadding');
  }, []);
  
  useLayoutEffect(() => {
    let [contentPaddingAux, paddingMultiplier] = [contentPadding.current, scrollToElement];
    if(scrollToElement === 1) {
      setAnimationStyle({ transform: `translateX(0px)`});
      return;
    } 
    paddingMultiplier = scrollToElement - 1;
    contentWidth = getContentWidth();
    contentWidth *= (scrollToElement - 1);
    //formula: ((contentWidth * scrollElement) + (padding * paddingMultiplier)) * -1
    setAnimationStyle({ transform: `translateX(calc((${contentWidth}px + (${contentPaddingAux} * ${paddingMultiplier})) * -1))` });

  }, [scrollToElement, contentWidth]);

  const handleBtnClick = (newValueOfScrollToEl) => {
    let valueToSet = newValueOfScrollToEl;
    if(valueToSet <= 1) valueToSet = 1;
    else if(valueToSet >= contentLength) valueToSet = contentLength;
    if(scrollToElement === valueToSet) return;
    setScrollToElement(valueToSet);
  };
  
  return (
    <TagContainer
      className={styles['container']}
    >
      <button
        type="button"
        className={styles['slide-fwd-btn']}
        onClick={() => { handleBtnClick(scrollToElement + 1); }}
      >
        <span className="sr-only">See more sections</span>
        <IoIosArrowForward />
      </button>
      <button
        type="button"
        className={styles['slide-back-btn']}
        onClick={() => { handleBtnClick(scrollToElement - 1); }}
      >
        <span className="sr-only">Back to previous sections</span>
        <IoIosArrowBack />
      </button>
      <ContentTag 
        className={styles['container__content']}
        style={{
          ...contentStyles,
          ...animationStyle
        }}
      >
        {children}
      </ContentTag>
    </TagContainer>
  );
}

export default ContentSlider;