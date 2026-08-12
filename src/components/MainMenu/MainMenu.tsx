import { useContext } from 'react';
import MenuLayout from '../MenuLayout/MenuLayout';
import { UserContext } from '../context/UserContext';
import { UserContextType } from '../context/UserContextType';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './MainMenu.module.css'
import cn from 'classnames'

function MainMenu() {
    const { userName }: UserContextType = useContext(UserContext);
    return (
        <>
            <MenuLayout iconPath='./bookmark.svg'>
                <NavLink className={({ isActive }) => cn(styles['link'], { [styles['active']]: isActive })} to='/'>Поиск фильмов</NavLink>
                <NavLink className={({ isActive }) => cn(styles['link'], { [styles['active']]: isActive })} to='/favorites'>Мои фильмы</NavLink>
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