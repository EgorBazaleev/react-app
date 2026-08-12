import { ReactNode } from 'react';
import styles from './FilmCard.module.css';
import { FilmCardProps } from './FilmCardProps';
import Rank from '../Rank/Rank';

function FilmCard({ poster, name, score, isInFavorite }: FilmCardProps) {

    const getFooter = (isInFavorite: boolean): ReactNode => {
        if (isInFavorite) {
            return (
                <>
                    <img className={styles['film-card__footer__icon']} src='./favorite_bookmark.svg' />&nbsp;
                    <span className={`${styles['film-card__footer__text']} ${styles['favorite']}`}>В избранном</span>
                </>
            );
        }
        return (
            <>
                <img className={styles['film-card__footer__icon']} src='./like.svg' />&nbsp;
                <span className={styles['film-card__footer__text']}>В избранное</span>
            </>
        );
    }


    return (
        <div className={styles['film-card']}>
            <div className={styles['film-card__header']}>
                <div className={styles['film-card__poster']} style={{ backgroundImage: `url(${poster})` }}>
                    <Rank score={score} className={styles['film-card__score']} />
                </div>
            </div>
            <div className={styles['film-card__footer']}>
                <div className={styles['film-card__footer__name']}>{name}</div>
                <div className={styles['film-card__footer__favorite']}>
                    {getFooter(isInFavorite)}
                </div>
            </div>
        </div >
    );
}

export default FilmCard;