import {
  useState,
  useEffect,
  useRef
} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';

import SuggestionList from './SuggestionList';
import styles from './searchInput.module.scss';

const SearchInput = ({ searchInput, setSearchInput, isExpanded, setIsExpanded }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if(isExpanded) inputRef.current.focus();
  }, [isExpanded]);

  const toggleInputContainer = (element, value) => {
    if (value) setIsExpanded(value);
    else setIsExpanded(prevState => !prevState);
  };
  const handleBtnClick = () => {
    toggleInputContainer(true);
  };
  
  return (
    <div className={[
      styles['container'],
      `${isExpanded ? styles['--expanded'] : ''}`
    ].join(' ')}>
      <div className={styles['box']}>
        <label className='sr-only' htmlFor='search-product-input'>Search product</label>
        <input 
          type="text" 
          name="" 
          id="search-product-input" 
          placeholder='Search'
          className={styles['search-input']}
          ref={inputRef}
          aria-hidden={!isExpanded}
        />
        <button
          type='button'
          className={styles['btn-search']}
          onClick={toggleInputContainer}
        >
          <span className='sr-only'>Search product</span>
          <AiOutlineSearch />
        </button>
      </div>
      <button
        type='button'
        className={styles['close-btn']}
        onClick={toggleInputContainer}
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