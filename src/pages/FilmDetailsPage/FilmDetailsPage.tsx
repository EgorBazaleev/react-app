import { useParams } from 'react-router-dom';
import styles from './FilmDetailsPage.module.css'
import { FilmDetails } from '../../types/FilmDeteils.type';
import { useState } from 'react';

function FilmDetailsPage() {
    const { id } = useParams();

    const getFilmDetails = (id: number): FilmDetails => {
        return {
            id: id,
            name: 'Avengers: Endgame',
            poster: '../posters/avengers.svg',
            score: 8.3,
            description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos\' actions and restore order to the universe once and for all, no matter what consequences may be in store.',
            genres: ['Adventure', 'Science Fiction', 'Action'],
            length: 181,
            productionDate: new Date('2019-04-24'),
            type: 'Movie',
            comments: [{
                id: 1,
                title: 'Not as good as infinity war..',
                createDate: new Date('2019-04-29'),
                text: 'But its a pretty good film. A bit of a mess in some parts, lacking the cohesive and effortless feel infinity war somehow managed to accomplish. Some silly plot holes and characters that could&apos;ve been cut (Ahem, captain marvel and thanos). The use of Captain marvel in this film was just ridiculous. Shes there at the start, bails for some reason? And then pops up at the end to serve no purpose but deux ex machina a space ship...'
            }]
        };
    };
    const [filmDetails] = useState<FilmDetails>(() => getFilmDetails(parseInt(id!, 10)));

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
                    <div className={styles['key-value']}>
                        <span className={styles['label']}>Тип</span>
                        <span className={styles['field-value']}>{filmDetails!.type}</span>
                    </div>
                    <div className={styles['key-value']}>
                        <span className={styles['label']}>Дата выхода</span>
                        <span className={styles['field-value']}>{filmDetails!.productionDate.toISOString().split('T')[0]}</span>
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