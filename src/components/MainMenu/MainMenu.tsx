import MenuLayout from '../MenuLayout/MenuLayout';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './MainMenu.module.css'
import cn from 'classnames'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function MainMenu() {
    const userName = useSelector((s: RootState) => s.user?.name);
    const favoriteFilms = useSelector((s: RootState) => s.favorites.films) ?? [];
    return (
        <>
            <MenuLayout iconPath='/bookmark.svg'>
                <NavLink className={({ isActive }) => cn(styles['link'], { [styles['active']]: isActive })} to='/'>Поиск фильмов</NavLink>
                <div className={styles['favorite']}>
                    <NavLink className={({ isActive }) => cn(styles['link'], { [styles['active']]: isActive })} to='/favorites'>Мои фильмы</NavLink>
                    {
                        favoriteFilms.length > 0
                            ? <div className={styles['counter']}>{favoriteFilms.length}</div>
                            : ''}
                </div>
                {
                    userName
                        ? <>
                            <NavLink className={({ isActive }) => cn(styles['link'], { [styles['active']]: isActive })} to='/user'>{userName} </NavLink>
                            <NavLink className={({ isActive }) => cn(styles['link'], { [styles['active']]: isActive })} to='/login' >Выйти</NavLink>
                        </>
                        : <NavLink className={({ isActive }) => cn(styles['link'], { [styles['active']]: isActive })} to='/login' >Войти</NavLink>
                }
            </MenuLayout>
            <div><Outlet /></div>
        </>
    );
}

export default MainMenu;