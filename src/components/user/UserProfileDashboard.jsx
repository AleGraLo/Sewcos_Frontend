import React, { useState, useEffect } from "react";
import '../../css/UserProfileDashboard.css';
import UserAvatarCard from "./UserAvatarCard";

const UserProfileDashboard = () => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        avatar: '',
        products: [],
        transactions: []
    });

    useEffect(() => {
        // Aquí irá la lógica para obtener los datos del usuario desde el backend
        // setUserData() con la respuesta del servidor
        setUserData({
            username: 'JohnDoe',
            email: 'john@example.com',
            avatar: 'https://via.placeholder.com/150',
            products: [{ id: 1, name: 'Producto 1' }],
            transactions: [{ id: 1, details: 'Transacción 1' }]
        });
    }, []);

    const handleEditProfile = () => {
        // Lógica para editar perfil
    };

    const handleDeleteAccount = () => {
        // Lógica para eliminar cuenta
    };

    return (
        <div className="user-profile-dashboard">
            <div className="user-info">
                <img src='/avatar_perfil1.jpg' alt="User Avatar" />
                <h2>{userData.username}</h2>
                <p>{userData.email}</p>
                <button onClick={handleEditProfile}>Editar Perfil</button>
                <button onClick={handleDeleteAccount}>Eliminar Cuenta</button>
            </div>
            <UserAvatarCard avatar={userData.avatar} />
            <div className="user-products">
                <h3>Productos Creados</h3>
                <ul>
                    {userData.products.map(product => (
                        <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
            </div>
            <div className="user-transactions">
                <h3>Historial de Transacciones</h3>
                <ul>
                    {userData.transactions.map(transaction => (
                        <li key={transaction.id}>{transaction.details}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default UserProfileDashboard;
