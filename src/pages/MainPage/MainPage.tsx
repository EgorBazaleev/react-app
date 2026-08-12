import { Film } from "../../types/Film.type";
import FilmList from "../../components/FilmList/FilmList";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import Search from "../../components/Search/Search";
import styles from './MainPage.module.css'
import NoFilms from "../../components/NoFilms/NoFilms";
import axios from "axios";
import { BASE_URL } from "../../helpers/API";
import { useState } from "react";
import { OMDbSearchResponse } from "../../types/OMDbSearchResponse";

function MainPage() {

    const [films, setFilms] = useState<Film[]>([]);
    const [hasSearched, setHasSearched] = useState(false);

    const getFilms = async (searchText: string) => {
        try {
            const { data } = await axios.get<OMDbSearchResponse>(`${BASE_URL}&s=${searchText}`)
            if (data && data.Response === 'True' && data.Search?.length > 0) {
                const foundFilms = data.Search.map(film => {
                    return {
                        id: film.imdbID,
                        poster: film.Poster,
                        name: film.Title,
                        score: 0
                    }
                });
                setFilms(foundFilms);
                return;
            }
            setFilms([]);
        } catch (e) {
            console.error(e);
            setFilms([]);
        } finally {
            if (!hasSearched) {
                setHasSearched(true);
            }
        }
    };

    return (
        <div className={styles["main-page"]}>
            <Header text="Поиск" />
            <Paragraph />
            <Search onSearch={getFilms} />
            {!hasSearched
                ? ''
                : films?.length
                    ? <FilmList films={films} isInFavorite={false} />
                    : <NoFilms />}

        </div>
    );
}

export default MainPage;