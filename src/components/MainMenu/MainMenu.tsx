import { useContext } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import MenuLayout from '../MenuLayout/MenuLayout';
import { UserContext } from '../context/UserContext';
import { UserContextType } from '../context/UserContextType';

function MainMenu() {
    const { userName, setUserName }: UserContextType = useContext(UserContext);
    return (
        <MenuLayout iconPath='./bookmark.svg'>
            <MenuButton text='Поиск фильмов' />
            <MenuButton text='Мои фильмы' />
            {
                userName
                    ? <>
                        <MenuButton text={userName} />
                        <MenuButton text='Выйти' onClick={() => setUserName('')} />
                    </>
                    : <MenuButton text='Войти' />
            }
        </MenuLayout>
    );
}

export default MainMenu;