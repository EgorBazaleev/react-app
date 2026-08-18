import styles from './FilmCard.module.css';
import { FilmCardProps } from './FilmCardProps';
import Rank from '../Rank/Rank';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

function FilmCard({ film }: FilmCardProps) {

    return (
        <div className={styles['film-card']}>
            <div className={styles['film-card__header']}>
                <img src={film.poster} className={styles['film-card__poster']} />
                <Rank score={film.score} className={styles['film-card__score']} />
            </div>
            <div className={styles['film-card__footer']}>
                <div className={styles['film-card__footer__name']}>{film.name}</div>
                <div className={styles['film-card__footer__favorite']}>
                    <FavoriteButton film={film} />
                </div>
            </div>
        </div >
    );
}

export default FilmCard;