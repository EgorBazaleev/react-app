import FilmCard from '../FilmCard/FilmCard';
import styles from './FilmList.module.css';
import { FilmListProps } from './FilmListProps';

function FilmList({ films }: FilmListProps) {
    return (
        <div className={styles['film-list']}>
            {films.map(film => <FilmCard key={film.id} poster={film.poster} name={film.name} score={film.score} />)}
        </div>
    );
}

export default FilmList;