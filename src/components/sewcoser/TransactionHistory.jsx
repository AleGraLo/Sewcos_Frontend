import React from "react";
import PropTypes from 'prop-types';
import '../../css/transactionHistory.css';

const TransactionHistory = ({ transactions }) => {
    return (
        <div className="transaction-history">
            <h3>Historial de Transacciones</h3>
            {transactions.length > 0 ? (
                <ul className="transaction-list">
                    {transactions.map(transaction => (
                        <li key={transaction.id} className="transaction-item">
                            <div className="transaction-details">
                                <p><strong>Producto:</strong> {transaction.productName}</p>
                                <p><strong>Fecha:</strong> {new Date(transaction.date).toLocaleDateString()}</p>
                                <p><strong>Monto:</strong> {transaction.amount} €</p>
                                <p><strong>Estado:</strong> {transaction.status}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay transacciones disponibles.</p>
            )}
        </div>
    );
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            productName: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            status: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default TransactionHistory;
