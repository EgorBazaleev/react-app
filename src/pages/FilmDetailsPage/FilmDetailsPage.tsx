import { useLoaderData } from 'react-router-dom';
import styles from './FilmDetailsPage.module.css'
import { FilmDetails } from '../../types/FilmDeteils.type';
import Rank from '../../components/Rank/Rank';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';

function FilmDetailsPage() {
    const filmDetails = useLoaderData() as FilmDetails;

    return (
        <div className={styles['film-details']}>
            <div className={styles['header']}>
                <span>Поиск фильмов</span>
                <span className={styles['title']}>{filmDetails!.name}</span>
            </div>
            <div className={styles['body']}>
                <img src={filmDetails!.poster} className={styles['leftsider']} />
                <div className={styles['rightsider']}>
                    <span className={styles['text-content']}>{filmDetails!.description}</span>
                    <div className={styles['actions']}>
                        <Rank score={filmDetails!.score} />
                        <FavoriteButton film={filmDetails} />
                    </div>
                    <div className={styles['key-value']}>
                        <span className={styles['label']}>Тип</span>
                        <span className={styles['field-value']}>{filmDetails!.type}</span>
                    </div>
                    <div className={styles['key-value']}>
                        <span className={styles['label']}>Дата выхода</span>
                        <span className={styles['field-value']}>{isNaN(filmDetails!.productionDate.getTime())
                            ? ''
                            : filmDetails!.productionDate.toISOString().split('T')[0]}</span>
                    </div>
                    <div className={styles['key-value']}>
                        <span className={styles['label']}>Длительность</span>
                        <span className={styles['field-value']}>{filmDetails!.length} мин</span>
                    </div>
                    <div className={styles['key-value']}>
                        <span className={styles['label']}>Жанр</span>
                        <span className={styles['field-value']}>{filmDetails!.genres.join(', ')}</span>
                    </div>
                </div>
            </div>
            <div className={styles['footer']}>
                <span className={styles['label']}>Отзывы</span>
                {filmDetails!.comments.map(fd =>
                    <div key={fd.id} className={styles['comment']}>
                        <div className={styles['comment__title']}>
                            <span className={styles['comment__title__title']}>{fd.title}</span>
                            <span className={styles['label']}>{fd.createDate.toISOString().split('T')[0]}</span>
                        </div>
                        <span className={styles['text-content']}>{fd.text}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FilmDetailsPage;