import styles from './Paragraph.module.css';

function Paragraph() {
    return (
        <div className={styles['paragraph']}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное</div>
    );
}

export default Paragraph;