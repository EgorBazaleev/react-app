import { createContext } from 'react';
import { UserContextType } from './UserContextType';

export const UserContext = createContext<UserContextType>({ userName: '', setUserName: (name: string) => { } });