import styles from './Header.module.css';

function Header({ text }) {
    return (<div className={styles['header']}>{text}</div>);
}

export default Header;