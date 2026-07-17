import FilmCard from '../FilmCard/FilmCard';
import './FilmList.css';

function FilmList({ films }) {
    return (
        <div className='film-list'>
            {films.map(film => <FilmCard poster={film.poster} name={film.name} score={film.score} />)}
        </div>
    );
}

export default FilmList;