import { MouseEvent } from 'react';
import styles from './FromFavorites.module.css'
import { Film } from '../../../types/Film.type';
import { AppDispatch } from '../../../store/store';
import { useDispatch } from 'react-redux';
import { favoritesActions } from '../../../store/favorite.slice';

function FromFavorites({ film }: { film: Film }) {
    const dispatch = useDispatch<AppDispatch>();
    const onClick = (e: MouseEvent) => {
        e.preventDefault();
        dispatch(favoritesActions.removeFilm(film));
    }

    return (
        <button className={styles['favorite']} onClick={onClick}>
            <img className={styles['icon']} src='/favorite_bookmark.svg' />&nbsp;
            <span className={styles['text']}>В избранном</span>
        </button>);
}

export default FromFavorites;