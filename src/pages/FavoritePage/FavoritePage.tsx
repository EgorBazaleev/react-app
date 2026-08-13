import { Film } from '../../types/Film.type';
import FilmList from '../../components/FilmList/FilmList';
import Header from '../../components/Header/Header';
import styles from './FavoritePage.module.css'

const films: Film[] = [
    {
        id: '1',
        name: 'Black Widow',
        score: 324,
        poster: './posters/black_widow.svg'
    },
    {
        id: '2',
        name: 'Shang Chi',
        score: 124,
        poster: './posters/shang_chi.svg'
    },
    {
        id: '3',
        name: 'Loki',
        score: 235,
        poster: './posters/loki.svg'
    }
];
function FavoritePage() {
    return (
        <div className={styles['favorite-page']}>
            <Header text='Избранное' />
            <FilmList films={films} isInFavorite={true} />
        </div>
    );
}

export default FavoritePage;