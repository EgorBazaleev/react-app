import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Film } from "../types/Film.type";
import { loadState, USER_PROFILE_KEY } from "./storage";
import { UserProfile } from "../types/UserProfile";
import { userActions } from "./user.slice";

export interface FavoritesSate {
    films: Film[]
}

function getFavorites(): FavoritesSate {
    return {
        films: loadState<UserProfile[]>(USER_PROFILE_KEY)
            ?.find(u => u.isLogined)?.favorites ?? []
    }
}

function getUserFavorites(userName: string): FavoritesSate {
    return {
        films: loadState<UserProfile[]>(USER_PROFILE_KEY)
            ?.find(u => u.name === userName)?.favorites ?? []
    }
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: getFavorites(),
    reducers: {
        addFilm: (state, action: PayloadAction<Film>) => {
            state.films!.push(action.payload);
        },
        removeFilm: (state, action: PayloadAction<Film>) => {
            state.films = state.films!.filter(f => action.payload.id != f.id);
        },
        reset: (state) => {
            state.films = getFavorites().films;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(userActions.logout, () => {
                return { films: [] };
            })
            .addCase(userActions.login, (state, action) => {
                return getUserFavorites(action.payload);
            });
    }
});

export default favoriteSlice.reducer;
export const favoritesActions = favoriteSlice.actions;