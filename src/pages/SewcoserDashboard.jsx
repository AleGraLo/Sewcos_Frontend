import React, { useState, useEffect} from "react";
import ProductList from '../components/sewcoser/ProductList'
import TransactionHistory from '../components/sewcoser/TransactionHistory';
import UserStats from '../components/sewcoser/UserStats';
import UserProfileHeader from '../components/sewcoser/UserProfileHeader'
import CommunityFeed from '../components/sewcoser/CommunityFeed';
import '../css/SewcoserDashboard.css';

const SewcoserDashboard = () => {
    const [sewcoserData, setSewcoserData] = useState({
        username: '',
        avatar: '',
        products: [],
        transactions: [],
        stats: {}, 
        community: []
    });

    useEffect(() => {
        setSewcoserData({
            username: 'SewcoserJame',
            avatar: 'https://via.placeholder.com/150',
            products: [{ id: 1, name: 'Vestido a medida', details: 'Compra de vestido a medida.' }],
            stats: { sales: 10, earnings: 200 },  // Asegúrate de que estos valores siempre existan
            transactions: [{ id: 1, productName: 'Vestido a medida', date: '2024-08-18', amount: 100, status: 'Completado' }],
            community: [{ id: 1, activity: 'JohnDoe ha comentado tu prenda' }]
        });
    }, []);
    

    return (
        <div className="sewcoser-dashboard">
            <UserProfileHeader username={sewcoserData.username} avatar={sewcoserData.avatar}/>
            <UserStats stats={sewcoserData.stats}/>
            <ProductList products={sewcoserData.products} />
            <TransactionHistory transactions={sewcoserData.transactions} />
            <CommunityFeed community={sewcoserData.community}/>
        </div>
    )
}

export default SewcoserDashboard;