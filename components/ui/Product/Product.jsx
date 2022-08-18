import Link from "next/link";
import Image from "next/image";
import React from 'react';

import styles from './product.module.scss';

const Product = ({ product, TitleTag, refRelatedTo }, ref) => {
  return (
    <Link href="/">
      <a
        className={styles['container']}
        ref={(element) => {
          if(ref) ref.current.set(refRelatedTo, element);
        }}
      >
        <article>
          <div className={styles['image-container']}>
            <img 
              src={product.image} 
              alt={product?.imageDesc} 
              className={styles['image']}
            />
          </div>
          {/* <ul 
            className={styles['qualities']}
            title='Product qualities'
          >
            <li key="1">High Flexibility</li>
            <li key="2">Original cottom</li>
          </ul> */}
          <TitleTag
            className={styles['title']}
          >
            {product.title}
          </TitleTag>
          <p
            className={styles['description']}
          >
            {product.productDesc}
          </p>
          <p
            className={styles['price']}
          >
            ${product.price}
          </p>
        </article>
      </a>
    </Link>
  );
}

export default React.forwardRef(Product);