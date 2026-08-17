import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState, USER_PROFILE_KEY } from "./storage";
import { UserProfile } from "../types/UserProfile";

export interface UserState {
    name: string
}

const initialState: UserState = loadState<UserProfile[]>(USER_PROFILE_KEY)
    ?.find(u => u.isLogined) ?? { name: '' };

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            if (!state) {
                return;
            }
            state!.name = action.payload
        },
        logout: (state) => {
            state!.name = '';
        }
    }
});

export default userSlice.reducer;
export const userActions = userSlice.actions;