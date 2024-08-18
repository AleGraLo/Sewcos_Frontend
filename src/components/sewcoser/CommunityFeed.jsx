import React from 'react';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

const CommunityFeed = ({community}) => {
    return(
        <div className='community-feed'>
            <h3>Actividad Reciente</h3>
            <ul>
                {community.length > 0 ? (
                    community.map(item => (
                        <li key={item.id} className='community-item'>
                            {item.activity}
                        </li>
                    ))
                ) : (
                    <li>No hay actividad reciente.</li>    
                )}
            </ul>

        </div>
    );
};

CommunityFeed.PropTypes = {
    community: PropTypes.arrayOf(
        PropTypes.shape({
            sales: PropTypes.number.isRequired,
            earnings: PropTypes.number.isRequired
        })
        
    ).isRequired
};

export default CommunityFeed;