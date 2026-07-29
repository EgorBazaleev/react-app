import styles from './MenuButton.module.css';

function MenuButton({ text, onClick }) {
    return (
        <a className={styles['menu-button']} onClick={onClick} href=''>{text}</a>
    );
}

export default MenuButton;