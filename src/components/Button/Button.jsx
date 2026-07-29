import { forwardRef } from 'react';
import styles from './Button.module.css';

const Button = forwardRef(function Button({ text, ...otherProps }, ref) {
    return (<button className={styles['button']} {...otherProps} ref={ref}>{text}</button>);
});

export default Button;