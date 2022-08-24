import { useState, useRef } from 'react';
import { AiOutlineFilter } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';

import { 
  ActionBtn,
  SelectElement,
  Filters
} from 'components/pages/shop';
import { Portal, Product } from 'components/ui';
import testImg from 'public/images/testimg2.jpg';
import styles from './shopPageLayout.module.scss';


const ShopPageLayout = ({ infoSectionTitle, resultsQuantity, products, filters }) => {
  const [sortBy, setSortBy] = useState('');
  const [selectBoxStatus, setSelectBoxStatus] = useState(false);
  const [filterSectionStatus, setFilterSectionStatus] = useState(false);
  const orderOptionSelected = useRef(null);
  
  // Active or deactivate the select element
  const toggleSortContainer = () => {
    setSelectBoxStatus(prevState => !prevState);
  };
  // change the actual orderBy value and also set the aria-selected attribute accordingly to the active element in the DOM
  const setSortOptionSelected = (element) => {
    const target = element.target;
    const targetValue = target.getAttribute('value');
    if(sortBy === targetValue) return;
    orderOptionSelected.current?.setAttribute('aria-selected', false);
    target.setAttribute('aria-selected', true);
    orderOptionSelected.current = target;
    setSortBy(targetValue);
    toggleSortContainer();
  };
  const toggleFilterSection = () => {
    setFilterSectionStatus(prevState => !prevState);
  };
  
  return (
    <div 
      className={styles['container']}
    >
      <section
        className={styles['info-section']}
      >
        <h2
          className={styles['info-section__title']}
        >
          {infoSectionTitle}
        </h2>
        <div
          className={styles['filters-container']}
        >
          <p className={styles['results-quantity']}>
            {resultsQuantity} Results
          </p>
          <ActionBtn 
            text='Filters'
            icon={{
              position: 'left',
              src: <AiOutlineFilter />
            }}
            handleClick={toggleFilterSection}
            aria-controls='filters-container-id'
          />
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
            handleClick={toggleSortContainer}
            aria-controls='select-sort'
            aria-expanded={selectBoxStatus}
          />
          <SelectElement 
            handleOptionClick={setSortOptionSelected}
            selectValue={sortBy}
            boxStatus={selectBoxStatus}
            ariaLabelledBy={"text-sort-section"}
          />
          {filterSectionStatus && (
            <Portal>
              <Filters 
                toggleFilterSection={toggleFilterSection}
              />
            </Portal>
          )}
        </div>
      </section>
      <main className={styles['main-container']}>
        <h3 className='sr-only'>Products</h3>
        <ul className={styles['products-list']}>
          <li className={styles['products-list__item']}>
            <Product 
              product={{
                title: 'OPPOF19',
                image: testImg.src,
                productDesc: 'OPPO F19 is officially announced on April 2021',
                price: '520.00'
              }}
              TitleTag='h3'
            />
          </li>
          <li className={styles['products-list__item']}>
            <Product 
              product={{
                title: 'Title 2',
                image: testImg.src,
                productDesc: 'OPPO F19 is officially announced on April 2021',
                price: '520.00'
              }}
              TitleTag='h3'
            />
          </li>
          <li className={styles['products-list__item']}>
            <Product 
              product={{
                title: 'Title 3',
                image: testImg.src,
                productDesc: 'OPPO F19 is officially announced on April 2021',
                price: '520.00'
              }}
              TitleTag='h3'
            />
          </li>
          <li className={styles['products-list__item']}>
            <Product 
              product={{
                title: 'Title 4',
                image: testImg.src,
                productDesc: 'OPPO F19 is officially announced on April 2021',
                price: '520.00'
              }}
              TitleTag='h3'
            />
          </li>
        </ul>
      </main>
    </div>
  );
}

export default ShopPageLayout;