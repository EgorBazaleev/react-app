import { forwardRef } from 'react';
import styles from './Input.module.css';
import { InputProps } from './InputProps';

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ iconPath, ...otherProps }, ref) {
    return (
        <div className={styles['input']}>
            {iconPath && <img className={styles['input__front-icon']} src={iconPath} />}
            <input className={styles['input__input']} {...otherProps} ref={ref} />
        </div>
    );
});

export default Input;