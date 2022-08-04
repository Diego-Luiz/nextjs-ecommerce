import Link from "next/link";

import styles from './carouselContent.module.scss';

const CarouselContent = ({ content, currentContentIndex, index }) => {
  let hasBgImage = false;
  let style = {};
  if(content.hasOwnProperty('backgroundImage')){
    hasBgImage = true;
    style = { backgroundImage: `url("${content.backgroundImage}")` };
  }
  return (
    <div
      className={[
        styles['content-box'],
        `${currentContentIndex === index ? styles['--active'] : ' '}`,
        `${!hasBgImage ? styles['--withVideoBg'] : ''}`
      ].join(' ')}
      style={style}
    > 
      {!hasBgImage
        && (<video
              autoPlay
              muted
              loop
              className={styles['video']}
            >
              <source src={content.video} type="video/mp4" />
            </video>)
      }
      
      <h2 className={styles['content-box__title']}>{content.title}</h2>
      <p className={styles['content-box__description']}>{content.description}</p>
      <Link href={content.link}>
        <a className={styles['more-about-link']}>Find out more</a>
      </Link>
    </div>
  );
}

export default CarouselContent;