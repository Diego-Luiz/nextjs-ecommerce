import React from 'react';
import { AiOutlineFilter } from 'react-icons/ai';
import { BiSortAlt2 } from 'react-icons/bi';

import { 
  SearchInputProduct,
  ActionBtn
} from 'components/pages/shop';
import styles from 'styles/pages/shop.module.scss';

const Shop = () => {
  return (
    <div 
      className={styles['container']}
    >
      <section
        className={styles['search-section']}
      >
        <h2
          className={[
            'sr-only',
            styles['search-section__title']
          ].join(' ')}
        >
          Search
        </h2>
        <SearchInputProduct />
        <ActionBtn 
          text='Filters'
          icon={<AiOutlineFilter />}
        />
        <ActionBtn 
          text='Sort'
          icon={<BiSortAlt2 />}
        />
      </section>
      {/* main = container for: filter, products box, sort */}
      <main>
        <section>
          <h3>Filters</h3>...
        </section>
        <section>
          <h3>Sort</h3>...
        </section>
        <div>
          <section className={styles['results-info']}>
            <h3 className={styles['results-info__received-input']}>
              Results for: <span>Phone</span>
            </h3>
            <p className={styles['results-info__total-products']}>
              <span>501</span>products
            </p>
          </section>
          <section>
            <h2>Products</h2>
            <ul>
              <li>Product</li>
              <li>Product</li>
              <li>Product</li>
              <li>Product</li>
              <li>Product</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Shop;