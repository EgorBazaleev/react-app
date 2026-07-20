import Input from '../Input/Input';
import styles from './Search.module.css';
import Button from '../Button/Button';

function Search() {
  const searchButtonHandler = () => console.log('search');
  return (
    <div className={styles['search']}>
      <Input iconPath="./search.svg" placeholder="Введите название" />
      <Button text='Искать' onClick={searchButtonHandler} />
    </div>
  );
}

export default Search;