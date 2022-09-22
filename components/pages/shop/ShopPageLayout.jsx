import { 
  useState, 
  useEffect,
  useRef 
} from 'react';
import { AiOutlineFilter } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';

import { 
  ActionBtn,
  SelectElement,
  Filters
} from 'components/pages/shop';
import { Portal, Product } from 'components/ui';
import styles from './shopPageLayout.module.scss';


const ShopPageLayout = ({ infoSectionTitle, resultsQuantity, products, brands, maxPrice }) => {
  const [sortBy, setSortBy] = useState('');
  const [sortBoxStatus, setSortBoxStatus] = useState(false);
  const [filterSectionStatus, setFilterSectionStatus] = useState(false);
  const getChkBoxesFilters = () => {
    const tempObj = {};
    brands.forEach(brand => {
      tempObj[brand] = false;
    });
    return tempObj;
  };
  const [chkBoxesFilters, setChkBoxesFilters] = useState(getChkBoxesFilters());
  const [priceFilters, setPriceFilters] = useState({ min: '1', max: maxPrice });
  const sortOptionSelected = useRef(null);
  let productsToDisplay = 
    sortBy.length 
    ? [products[0]]
    : products;

  // Active or deactivate the select element
  const toggleSortContainer = () => {
    setSortBoxStatus(prevState => !prevState);
  };
  // change the actual orderBy value and also set the aria-selected attribute accordingly to the active element in the DOM
  const setSortOptionSelected = (element) => {
    const target = element.target;
    const targetValue = target.getAttribute('value');
    if(sortBy === targetValue) return;
    sortOptionSelected.current?.setAttribute('aria-selected', false);
    target.setAttribute('aria-selected', true);
    sortOptionSelected.current = target;
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
              animationTrigger: sortBoxStatus
            }}
            handleClick={toggleSortContainer}
            aria-controls='select-sort'
            aria-expanded={sortBoxStatus}
          />
          <SelectElement 
            handleOptionClick={setSortOptionSelected}
            selectValue={sortBy}
            boxStatus={sortBoxStatus}
            ariaLabelledBy={"text-sort-section"}
          />
          {filterSectionStatus && (
            <Portal>
              <Filters 
                toggleFilterSection={toggleFilterSection}
                chkBoxesFilters={chkBoxesFilters} 
                setChkBoxesFilters={setChkBoxesFilters}
                priceFilters={priceFilters}
                setPriceFilters={setPriceFilters}
                maxPrice={maxPrice}
              />
            </Portal>
          )}
        </div>
      </section>
      <main className={styles['main-container']}>
        <h3 className='sr-only'>Products</h3>
        <ul className={styles['products-list']}>
          {productsToDisplay.map(product => (
              <li
                key={product.id} 
                className={styles['products-list__item']}
              >
                <Product 
                  product={{
                  id: product.id,
                  title: product.title,
                  image: product.images[0],
                  category: product.category,
                  productDesc: product.description,
                  price: product.price
                  }}
                  TitleTag='h3'
                />
              </li>
            ))
          }
          
        </ul>
      </main>
    </div>
  );
}

export default ShopPageLayout;