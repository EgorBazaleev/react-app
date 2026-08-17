import { useSelector } from "react-redux";
import { Film } from "../../types/Film.type";
import { RootState } from "../../store/store";
import FromFavorites from "./FromFavorites/FromFavorites";
import ToFavorites from "./ToFavorites/ToFavorites";

function FavoriteButton({ film }: { film: Film }) {

    const favoriteFilms = useSelector((s: RootState) => s.favorites.films) ?? [];
    const isInFavorite = favoriteFilms.some(f => f.id === film.id);
    if (isInFavorite) {
        return <FromFavorites film={film} />
    }
    return <ToFavorites film={film} />
}

export default FavoriteButton;