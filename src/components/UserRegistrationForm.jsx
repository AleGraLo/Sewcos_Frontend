import React, { useState} from 'react';
import FormInput from './FormInput';
import '../css/UserRegistrationForm.css'

const UserRegistrationForm = () => {
    const [formData, setFormData] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //Lógica para enviar el formulario
        console.log('Datos enviados:', formData);
    };

    return(
        <div className='registration-page'>
        <form className='registration-form' onSubmit={handleSubmit}>
            <p className='form-title'>Registrate como usuario</p>
            <FormInput
                label='Username'
                type='text'
                name='username'
                value={formData.username}
                onChange={handleChange}
                placeholder='Enter your username'
            />
            <FormInput
                label='Password'
                type='password'
                name='password'
                value={formData.password}
                onChange={handleChange}
                placeholder='Enter your password'
            />
            <FormInput
                label='Confirm Password'
                type='password'
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder='Confirm your password'
            />
            <button type='submit'className='btn btn-custom'>Register</button>

        </form>
        </div>
    );
};

export default UserRegistrationForm;
