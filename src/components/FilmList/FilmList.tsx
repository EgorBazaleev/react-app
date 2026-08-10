import { Link } from 'react-router-dom';
import FilmCard from '../FilmCard/FilmCard';
import styles from './FilmList.module.css';
import { FilmListProps } from './FilmListProps';

function FilmList({ films, isInFavorite }: FilmListProps) {
    return (
        <div className={styles['film-list']}>
            {films.map(film =>
                <Link to={`/movie/${film.id}`} className={styles['link']} key={film.id} >
                    <FilmCard poster={film.poster} name={film.name} score={film.score} isInFavorite={isInFavorite} />
                </Link>
            )}

        </div>
    );
}

export default FilmList;