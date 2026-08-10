import { ReactNode, useState } from 'react';
import { UserContext } from './UserContext';
import { User } from './User.type';

export function UserContextProvider({ children }: { children: ReactNode }) {
    const getUsers = (): User[] => {
        const data = window.localStorage.getItem('users');
        let users: User[] = [];
        if (data) {
            users = JSON.parse(data);
        }
        return users;
    };
    const getLoginedUser = (): string => {
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
    const setUsers = (users: User[]) => window.localStorage.setItem('users', JSON.stringify(users));
    const getUserAndUsers = (userName: string): { user: User | null | undefined, users: User[] } => {
        const users = getUsers();
        let user: User | null | undefined = null;
        if (!users) {
            return { user, users };
        }
        user = users.find(user => user.name === userName);
        return { user, users };
    };

    const [userName, setUserName] = useState(getLoginedUser);

    const login = (userName: string) => {
        let { user, users } = getUserAndUsers(userName);
        if (!user) {
            user = { name: userName, isLogined: true };
            users = [...users || [], user];
        }
        user.isLogined = true;
        setUsers(users);
    };

    const logout = (userName: string) => {
        const { user, users } = getUserAndUsers(userName);
        if (!user) {
            return;
        }
        user!.isLogined = false;
        setUsers(users);
    };

    const onUserNameChange = (newUserName: string) => {
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