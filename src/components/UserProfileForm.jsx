import React, {useState} from "react";
import FormInput from "./FormInput";

const UserProfileForm = ({initialData}) => {
    const [profileData, setProfileData]= useState(initialData);

    const handleChange = (e) => {
        setProfileData({
            ...profileData, 
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //Lógica para actualizar el perfil del usuario
        console.log('Perfil actualizado:', profileData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                label='Username'
                type='text'
                name='username'
                value={profileData.username}
                onChange={handleChange}
                placeholder='Enter your username'
            />
            <FormInput
                label='Email'
                type='email'
                name='email'
                value={profileData.email}
                onChange={handleChange}
                placeholder='Enter your email'
            />
            {/*Puedes añadir más campos como direccion, telefono, etc. */}
            <button type='submit' className="btn btn-primary">Update Profile</button>
        </form>
    );
};

export default UserProfileForm;