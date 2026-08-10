import { Film } from "../../components/FilmList/Film.type";
import FilmList from "../../components/FilmList/FilmList";
import Header from "../../components/Header/Header";
import Paragraph from "../../components/Paragraph/Paragraph";
import Search from "../../components/Search/Search";
import styles from './MainPage.module.css'

const films: Film[] = [
    {
        id: 1,
        name: 'Black Widow',
        score: 324,
        poster: './posters/black_widow.svg'
    },
    {
        id: 2,
        name: 'Shang Chi',
        score: 124,
        poster: './posters/shang_chi.svg'
    },
    {
        id: 3,
        name: 'Loki',
        score: 235,
        poster: './posters/loki.svg'
    }
];

function MainPage() {

    return (
        <div className={styles["main-page"]}>
            <Header text="Поиск" />
            <Paragraph />
            <Search />
            <FilmList films={films} isInFavorite={false} />
        </div>
    );
}

export default MainPage;