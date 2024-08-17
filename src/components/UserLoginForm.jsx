import React, {useState} from "react";
import FormInput from "../components/FormInput";
import '../css/UserLoginForm.css';

const UserLoginForm = ()=> {
    const [loginData, setLoginData]=useState({
        email:'',
        password:'',
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        //Lógica para manejar el inicio de sesión
        console.log('Inicio de sesión:', loginData);
    };

    return(
        <div className="login-page">
        <form className='login-form' onSubmit={handleSubmit}>
            <p className=".login-title">Inicia Sesión</p>
            <FormInput
                label='Email'
                type='email'
                name='email'
                value={loginData.email}
                onChange={handleChange}
                placeholder='Enter your email'
            />
            <FormInput
                label='Password'
                type='password'
                name='password'
                value={loginData.password}
                onChange={handleChange}
                placeholder='Enter your password'
            />
            <button type="submit" className="btn btn-custom">Login</button>
        </form>
        </div>
    );
};

export default UserLoginForm;
