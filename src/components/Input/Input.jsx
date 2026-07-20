import './Input.css';

function Input({iconPath, placeholder}){
    return (
        <div className='input'>
            {iconPath && <img className='input__front-icon' src={iconPath}/>}
            <input className='input__input' placeholder={placeholder}/>
        </div>
    );
}

export default Input;