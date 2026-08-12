import { Film } from "../../types/Film.type"

export interface FilmListProps {
    films: Film[];
    isInFavorite: boolean;
}