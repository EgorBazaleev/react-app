import styles from './MenuButton.module.css';
import { MenuButtonProps } from './MenuButtonProps';

function MenuButton({ text, onClick }: MenuButtonProps) {
    return (
        <a className={styles['menu-button']} onClick={onClick} href=''>{text}</a>
    );
}

export default MenuButton;