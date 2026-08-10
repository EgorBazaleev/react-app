import { Film } from "./Film.type"

export interface FilmListProps {
    films: Film[];
    isInFavorite: boolean;
}