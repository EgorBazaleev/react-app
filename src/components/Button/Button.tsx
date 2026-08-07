import { forwardRef } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './ButtonProps';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ text, ...otherProps }, ref) {
    return (<button className={styles['button']} {...otherProps} ref={ref}>{text}</button>);
});

export default Button;