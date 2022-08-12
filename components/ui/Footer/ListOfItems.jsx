import styles from './listOfItems.module.scss';

const ListOfItems = ({ linksArray, inRowFormat=false }) => {
  return (
    <ul
      className={[
        styles['list'],
        `${inRowFormat ? styles['--rowFormat']: ''}`
      ].join(' ')}
    >
    {linksArray.map(({ linkRef, content }, index) => (
      <li
        key={index}
        className={styles['list__item']}
      > 
        {linkRef.length
          ? (<a href={linkRef}>
              {content}
            </a>)
          : (content)
        }
      </li>
    ))}
    </ul>
  )
}

export default ListOfItems;