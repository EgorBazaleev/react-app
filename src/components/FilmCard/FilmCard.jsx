import styles from './FilmCard.module.css';

function FilmCard({ poster, name, score }) {
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