import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice } from "./favorite.slice";
import { loadState, saveState, USER_PROFILE_KEY } from "./storage";
import { userSlice } from "./user.slice";
import { UserProfile } from "../types/UserProfile";

export const store = configureStore({
    reducer: {
        favorites: favoriteSlice.reducer,
        user: userSlice.reducer
    }
});

store.subscribe(() => {
    let users = loadState<UserProfile[]>(USER_PROFILE_KEY) ?? [];
    const userName = store.getState().user?.name;
    if (!userName) {
        const user = users.find(u => u.isLogined);
        if (!user) {
            return;
        }
        user!.isLogined = false;
    } else {
        let user = users.find(u => u.name === userName);
        if (!user) {
            user = { name: userName, isLogined: true, favorites: [] };
            users = [...users, user];
        }
        if (!user!.isLogined) {
            user!.isLogined = true;
        } else {
            user!.favorites = store.getState().favorites.films ?? []
        }
    }
    saveState(users, USER_PROFILE_KEY);
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;