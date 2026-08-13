import styles from './NoFilms.module.css'

function NoFilms() {
    return (
        <div className={styles['body']}>
            <span className={styles['text']}>Упс... Ничего не найдено</span>
            <span className={styles['suggestion']}>Попробуйте изменить запрос или ввести более точное название фильма</span>
        </div>
    );
}

export default NoFilms;