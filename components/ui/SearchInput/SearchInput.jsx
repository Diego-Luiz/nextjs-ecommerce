import {
  useLayoutEffect,
  useEffect,
  useRef
} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';

import SuggestionList from './SuggestionList';
import styles from './searchInput.module.scss';

const SearchInput = ({ searchInput, setSearchInput, isExpanded, setIsExpanded, handleBtnClick, toggleContainer }) => {
  const inputRef = useRef(null);
  const boxRef = useRef(null);
  const btnSearchRef = useRef(null);
  
  useLayoutEffect(() => {
    if(!boxRef.current || !btnSearchRef.current) return;
    const btnSearchWidth = btnSearchRef.current.offsetWidth;
    boxRef.current.style = `--searchBtnWidth: ${btnSearchWidth}px`;
  }, []);
  
  useEffect(() => {
    if(isExpanded) { 
      setTimeout(() => {
        inputRef.current.focus();
      }, 1000);
    }
  }, [isExpanded]);

  return (
    <div className={[
      styles['container'],
      `${isExpanded ? styles['--expanded'] : ''}`
    ].join(' ')}>
      <div 
        className={styles['box']}
        ref={boxRef}
      >
        <label className='sr-only' htmlFor='search-product-input'>Search product</label>
        <input 
          type="text" 
          name="" 
          id="search-product-input" 
          placeholder='Search'
          className={styles['search-input']}
          ref={inputRef}
          aria-hidden={!isExpanded}
          minLength='1'
          value={searchInput}
          onChange={(element) => { setSearchInput(element.target.value); }}
        />
        <button
          type='button'
          className={styles['btn-search']}
          onClick={handleBtnClick}
          ref={btnSearchRef}
        >
          {isExpanded 
            ? (<span className='sr-only'>Search product</span>)
            : (<span className='sr-only'>Open search section</span>)
          }
          
          <AiOutlineSearch />
        </button>
      </div>
      <button
        type='button'
        className={styles['close-btn']}
        onClick={toggleContainer}
      >
        <span className='sr-only'>Close search section</span>
        <GrFormClose />
      </button>
      {/* suggestionList should be updated according to the search input */}
      <SuggestionList
        containerExpanded={isExpanded}
        TitleLevel='h3'
        suggestions={[
          'Product 1',
          'Product 2',
          'Product 3',
          'Product 4'
        ]}
        opStyles={{ gridColumn: 'span 2' }}
      />
    </div>
  );
};

export default SearchInput;