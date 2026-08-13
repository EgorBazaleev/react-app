import Input from '../Input/Input';
import styles from './Search.module.css';
import Button from '../Button/Button';
import { SearchProps } from './SearchProps';
import { useState } from 'react';

function Search({ onSearch }: SearchProps) {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <div className={styles['search']}>
      <Input iconPath="./search.svg" placeholder="Введите название" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
      <Button onClick={() => onSearch(searchText)}>Искать</Button>
    </div>
  );
}

export default Search;