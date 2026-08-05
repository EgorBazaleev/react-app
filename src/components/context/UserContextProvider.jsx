import { useState } from 'react';
import { UserContext } from './UserContext';

export function UserContextProvider({ children }) {
    const getUsers = () => {
        const data = window.localStorage.getItem('users');
        if (data) {
            return JSON.parse(data);
        }
    };
    const getLoginedUser = () => {
        const users = getUsers();
        if (!users || users.length === 0) {
            return '';
        }
        const loginedUser = users.find(user => user.isLogined);
        if (!loginedUser) {
            return '';
        }
        return loginedUser.name;
    };
    const setUsers = (users) => window.localStorage.setItem('users', JSON.stringify(users));
    const getUserAndUsers = (userName) => {
        const users = getUsers();
        if (!users) {
            return [null, users];
        }
        return [users.find(user => user.name === userName), users];
    };

    const [userName, setUserName] = useState(getLoginedUser);

    const login = (userName) => {
        let [user, users] = getUserAndUsers(userName);
        if (!user) {
            user = { name: userName };
            users = [...users || [], user];
        }
        user.isLogined = true;
        setUsers(users);
    };

    const logout = (userName) => {
        const [user, users] = getUserAndUsers(userName);
        user.isLogined = false;
        setUsers(users);
    };

    const onUserNameChange = (newUserName) => {
        setUserName(oldValue => {
            if (newUserName) {
                login(newUserName);
            } else {
                logout(oldValue);
            }
            return newUserName;
        });
    };


    return (
        <UserContext.Provider value={{ userName, setUserName: onUserNameChange }}>
            {children}
        </UserContext.Provider>);
};