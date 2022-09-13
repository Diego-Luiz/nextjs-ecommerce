import Link from "next/link";
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
          <div className={styles['content-container']}>
            <TitleTag
              className={styles['title']}
            >
              {product.title}
            </TitleTag>
            <p
              className={styles['category']}
            >
              <span className="sr-only">Category:</span>
              {product.category}
            </p>
            <p
              className={styles['price']}
            >
              ${product.price}
            </p>
          </div>
        </article>
      </a>
    </Link>
  );
}

export default React.forwardRef(Product);