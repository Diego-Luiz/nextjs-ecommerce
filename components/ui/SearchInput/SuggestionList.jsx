import Link from 'next/link';

import styles from './suggestionList.module.scss';

const SuggestionList = ({ containerExpanded, TitleLevel, suggestions, opStyles }) => {
  if(!containerExpanded) return null;
  return (
    <section 
      className={styles['container']}
      style={opStyles}
    >
      <TitleLevel
        className={styles['title']}
      >
        Search suggestions
      </TitleLevel>
      <ul
        className={styles['list']}
      >
        {suggestions.map(item => (
          <li
            key={item}
            className={styles['list__suggestion']}
          >
            <Link href={`/shop?q=queryhere`}>
              <a className={styles['link']}>
                {item}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SuggestionList;