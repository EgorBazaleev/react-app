import { Film } from "./Film.type"

export interface UserProfile {
    name: string,
    isLogined: boolean
    favorites: Film[]
};