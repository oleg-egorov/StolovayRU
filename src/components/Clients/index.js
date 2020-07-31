import React from 'react';

import './style.scss';

const Clients = () => {
    return (
        <div className='Clients'>
            <img src={require('../../assets/image/Clients/clients.png')} alt='clients'/>
            <img src={require('../../assets/image/Clients/clients_min.png')} alt='clients'/>
            <div className='Seo__AddButton Clients__AddButton'>+</div>
            <span>Показать ещё</span>
        </div>
    );
};

export default Clients;