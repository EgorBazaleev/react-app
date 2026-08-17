import { ChangeEvent, SubmitEventHandler, useEffect, useState } from "react";
import Button from "../../components/Button/Button"
import Header from "../../components/Header/Header"
import Input from "../../components/Input/Input"
import styles from './LoginForm.module.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { userActions } from "../../store/user.slice";

function LoginForm() {

    const dispatch = useDispatch<AppDispatch>();
    const [userInputName, setUserInputName] = useState<string>('');
    const userInputOnChange = (event: ChangeEvent<HTMLInputElement>) => setUserInputName(event.target.value);
    const navigate = useNavigate();
    const onSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        dispatch(userActions.login(userInputName));
        navigate('/');
    }
    useEffect(() => {
        dispatch(userActions.logout());
    }, []);

    return (
        <form onSubmit={onSubmit} className={styles["login-form"]}>
            <Header text="Вход" />
            <div style={{ width: '100%' }}>
                <Input placeholder='Ваше имя' value={userInputName} onChange={userInputOnChange} />
            </div>
            <Button type="submit" >Войти в профиль</Button>
        </form>
    );
}

export default LoginForm