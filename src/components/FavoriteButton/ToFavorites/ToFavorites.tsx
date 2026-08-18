import { MouseEvent } from 'react';
import styles from './ToFavorites.module.css'
import { Film } from '../../../types/Film.type';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import { favoritesActions } from '../../../store/favorite.slice';

function ToFavorites({ film }: { film: Film }) {
    const dispatch = useDispatch<AppDispatch>();

    const onClick = (e: MouseEvent) => {
        e.preventDefault();
        dispatch(favoritesActions.addFilm(film));
    }

    return (
        <button className={styles['favorite']} onClick={onClick}>
            <img className={styles['icon']} src='/like.svg' />&nbsp;
            <span className={styles['text']}>В избранное</span>
        </button>);
}

export default ToFavorites;