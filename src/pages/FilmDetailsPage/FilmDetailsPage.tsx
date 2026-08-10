import { useParams } from 'react-router-dom';
import styles from './FilmDetailsPage.module.css'

function FilmDetailsPage() {
    const { id } = useParams();
    const text = `film ${id} details`;
    return (
        <>
            {text}
        </>
    );
}

export default FilmDetailsPage;