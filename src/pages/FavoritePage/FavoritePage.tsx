import FilmList from '../../components/FilmList/FilmList';
import Header from '../../components/Header/Header';
import styles from './FavoritePage.module.css'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function FavoritePage() {
    const films = useSelector((s: RootState) => s.favorites.films);

    return (
        <div className={styles['favorite-page']}>
            <Header text='Избранное' />
            <FilmList films={films ?? []} />
        </div>
    );
}

export default FavoritePage;