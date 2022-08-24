import { useState, useRef } from 'react';
import { AiOutlineFilter } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';

import { 
  SearchInputProduct,
  ActionBtn,
  SelectElement,
  Filters
} from 'components/pages/shop';
import { Portal, Product } from 'components/ui';
import testImg from 'public/images/testimg2.jpg';
import styles from 'styles/pages/shop.module.scss';


const Shop = () => {
  const [sortBy, setSortBy] = useState('');
  const [selectBoxStatus, setSelectBoxStatus] = useState(false);
  const [filterSectionStatus, setFilterSectionStatus] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const orderOptionSelected = useRef(null);
  // const testImg = 'public/images/testimg2.jpg';
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
  const handleSearchInputRequest = () => {
    console.log('here clicking :D');
  }
  
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
        <SearchInputProduct 
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          handleClick={handleSearchInputRequest}
        />
        <ActionBtn 
          text='Filters'
          icon={{
            position: 'left',
            src: <AiOutlineFilter />
          }}
          handleClick={toggleFilterSection}
          aria-controls='filters-container-id'
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
        </div>
        {filterSectionStatus && (
          <Portal>
            <Filters 
              toggleFilterSection={toggleFilterSection}
            />
          </Portal>
        )}
      </section>
      <main className={styles['main-container']}>
        <section className={styles['results-info']}>
          {/* this will only exist if the user made a search */}
          {searchInput && (
            <h3 className={styles['results-info__received-input']}>
              Results for: <span>{searchInput}</span>
            </h3>
          )}
          <div className={styles['sort-total-container']}>
            { sortBy && (<p className={styles['results-info__sort-value']}><span>Sort by:</span> {sortBy}</p>) }
            <p className={styles['results-info__total-products']}>
              <span>100000</span> Results
            </p>
          </div>
        </section>
        <section className={styles['products-container']}>
          <h2 className='sr-only'>Products</h2>
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
        </section>
      </main>
    </div>
  );
}

// export async function getStaticProps() {
//   return ({
//     props: {

//     }
//   });
// }

export default Shop;