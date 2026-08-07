import styles from './FilmCard.module.css';
import { FilmCardProps } from './FilmCardProps';

function FilmCard({ poster, name, score }: FilmCardProps) {
    return (
        <div className={styles['film-card']}>
            <div className={styles['film-card__poster']} style={{ backgroundImage: `url(${poster})` }}>
                <div className={styles['film-card__score']}>
                    <img className={styles['film-card__score_icone']} src='./star.svg' />
                    <div>{score}</div>
                </div>
            </div>
            <div className={styles['film-card__name']}>{name}</div>
        </div>
    );
}

export default FilmCard;