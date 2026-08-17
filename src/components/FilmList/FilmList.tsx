import { Link } from 'react-router-dom';
import FilmCard from '../FilmCard/FilmCard';
import styles from './FilmList.module.css';
import { FilmListProps } from './FilmListProps';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function FilmList({ films }: FilmListProps) {
    const favoriteFilms = useSelector((s: RootState) => s.favorites.films) ?? [];

    return (
        <div className={styles['film-list']}>
            {films.map(film =>
                <Link to={`/movie/${film.id}`} className={styles['link']} key={film.id} >
                    <FilmCard film={film} />
                </Link>
            )}
        </div>
    );
}

export default FilmList;