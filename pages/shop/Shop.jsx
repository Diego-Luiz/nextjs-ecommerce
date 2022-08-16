import { useState, useRef } from 'react';
import { AiOutlineFilter } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';

import { 
  SearchInputProduct,
  ActionBtn,
  SelectElement,
  Filters
} from 'components/pages/shop';
import styles from 'styles/pages/shop.module.scss';

const Shop = () => {
  const [orderBy, setOrderBy] = useState('');
  const [selectBoxStatus, setSelectBoxStatus] = useState(false);
  const orderOptionSelected = useRef(null);
  
  // Active or deactivate the select element
  const toggleOrderSelect = () => {
    setSelectBoxStatus(prevState => !prevState);
  };
  // change the actual orderBy value and also set the aria-selected attribute accordingly to the active element in the DOM
  const setOrderOptionSelected = (element) => {
    const target = element.target;
    const targetValue = target.getAttribute('value');
    if(orderBy === targetValue) return;
    orderOptionSelected.current?.setAttribute('aria-selected', false);
    target.setAttribute('aria-selected', true);
    orderOptionSelected.current = target;
    setOrderBy(targetValue);
    toggleOrderSelect();
  };

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
          icon={{
            position: 'left',
            src: <AiOutlineFilter />
          }}
        />
        <div className={styles['sort-container']}>
          <ActionBtn 
            text='Sort'
            icon={{
              position: 'right',
              src: <RiArrowDownSLine />,
              animationStyle: {
                transform: 'rotate(180deg)'
              },
              animationTrigger: selectBoxStatus
            }}
            handleClick={toggleOrderSelect}
            ariaAttributes={{
              controls: 'select-sort',
              expanded: selectBoxStatus
            }}
          />
          <SelectElement 
            handleOptionClick={setOrderOptionSelected}
            selectValue={orderBy}
            boxStatus={selectBoxStatus}
            ariaLabelledBy={"text-sort-section"}
          />
        </div>
        
        <Filters />
      </section>
      {/* main = container for: filter, products box, sort */}
      <main>
        <div>
          <section className={styles['results-info']}>
            <h3 className={styles['results-info__received-input']}>
              Results for: <span>Phone</span>
            </h3>
            <p className={styles['results-info__orded-value']}>Orded by: {orderBy}</p>
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