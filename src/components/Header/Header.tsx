import styles from './Header.module.css';
import { HeaderProps } from './HeaderProps';

function Header({ text }: HeaderProps) {
    return (<h1 className={styles['header']}>{text}</h1>);
}

export default Header;