import React from "react";
import PropTypes from 'prop-types';
import '../../css/productList.css'

const ProductList = ({products}) => {
    return (
        <div className="product-list">
        <h3>Mis Productos</h3>
        {products.length > 0 ? (
            <ul className="product-list-items">
                {products.map(product => (
                    <li key={product.id} className="product-item">
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                        <p>Precio: {product.price} €</p>
                        {product.image && (
                            <img src={product.image} alt={product.name} className="product-image" />
                        )}
                    </li>
                ))}
            </ul>
        ) : (
            <p>No tienes productos en tu catálogo</p>    
        )}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            description: PropTypes.string,
            price: PropTypes.number.isRequired,
            image: PropTypes.string,
        })
    ).isRequired
};

export default ProductList;
