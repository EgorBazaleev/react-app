import { forwardRef } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './ButtonProps';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ children, ...otherProps }, ref) {
    return (<button className={styles['button']} {...otherProps} ref={ref}>{children}</button>);
});

export default Button;