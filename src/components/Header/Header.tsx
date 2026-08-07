import styles from './Header.module.css';
import { HeaderProps } from './HeaderProps';

function Header({ text }: HeaderProps) {
    return (<div className={styles['header']}>{text}</div>);
}

export default Header;