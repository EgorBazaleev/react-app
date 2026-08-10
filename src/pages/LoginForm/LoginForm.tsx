import { ChangeEvent, SubmitEventHandler, useContext, useEffect, useState } from "react";
import Button from "../../components/Button/Button"
import Header from "../../components/Header/Header"
import Input from "../../components/Input/Input"
import styles from './LoginForm.module.css'
import { UserContextType } from "../../components/context/UserContextType";
import { UserContext } from "../../components/context/UserContext";

function LoginForm() {

    const { setUserName }: UserContextType = useContext(UserContext);
    const [userInputName, setUserInputName] = useState<string>('');
    const userInputOnChange = (event: ChangeEvent<HTMLInputElement>) => setUserInputName(event.target.value);
    const onSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        setUserName(userInputName);
    }
    useEffect(() => setUserName(''), []);

    return (
        <form onSubmit={onSubmit} className={styles["login-form"]}>
            <Header text="Вход" />
            <div style={{ width: '100%' }}>
                <Input placeholder='Ваше имя' value={userInputName} onChange={userInputOnChange} />
            </div>
            <Button type="submit" text="Войти в профиль" />
        </form>
    );
}

export default LoginForm