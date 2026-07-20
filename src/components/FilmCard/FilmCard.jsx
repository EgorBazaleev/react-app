import './FilmCard.css';

function FilmCard({ poster, name, score }) {
    return (
        <div className="film-card">
            <div className="film-card__poster" style={{ backgroundImage: `url(${poster})` }}>
                <div className='film-card__score'>
                    <img className='film-card__score_icone' src='./star.svg' />
                    <div>{score}</div>
                </div>
            </div>
            <div className="film-card__name">{name}</div>
        </div>
    );
}

export default FilmCard;