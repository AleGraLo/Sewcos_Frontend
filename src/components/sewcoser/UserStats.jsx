import React from 'react';
import PropTypes from 'prop-types';
import '../../css/userStats.css'

const UserStats = ({ stats }) => {
    return (
        <div className="user-stats">
            <div className="stat-item">
                <h3>Ventas</h3>
                <p>{stats.sales}</p>
            </div>
            <div className="stat-item">
                <h3>Ganancias</h3>
                <p>{stats.earnings} €</p>
            </div>
            {/* Puedes agregar más estadísticas aquí */}
        </div>
    );
};

UserStats.propTypes = {
    stats: PropTypes.shape({
        sales: PropTypes.number.isRequired,
        earnings: PropTypes.number.isRequired,
    }).isRequired,
};

export default UserStats;
