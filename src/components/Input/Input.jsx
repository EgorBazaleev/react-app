import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(function Input({ iconPath, ...otherProps }, ref) {
    return (
        <div className={styles['input']}>
            {iconPath && <img className={styles['input__front-icon']} src={iconPath} />}
            <input className={styles['input__input']} {...otherProps} ref={ref} />
        </div>
    );
});

export default Input;