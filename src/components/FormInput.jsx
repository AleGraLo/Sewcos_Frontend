import React from 'react';

const FormInput = ({ label, type, name, value, onChange, placeholder}) => {
    return (
        <div className='form-group'>
            <label htmlFor={name}>{label}</label>
            <input 
            type={type} 
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className='form-control'
            required
            />
        </div>
    );
};

export default FormInput;
