import styles from './Input.module.css';

function Input({ iconPath, placeholder }) {
    return (
        <div className={styles['input']}>
            {iconPath && <img className={styles['input__front-icon']} src={iconPath} />}
            <input className={styles['input__input']} placeholder={placeholder} />
        </div>
    );
}

export default Input;