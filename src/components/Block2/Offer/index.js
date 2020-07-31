import React from 'react';

import './style.scss';

const date = [
    {
        description: 'Пароконвектомат ПКН-6',
        price: '160 000'
    },
    {
        description: 'Пароконвектомат ПКН-6',
        price: '160 000'
    },
    {
        description: 'Пароконвектомат ПКН-6',
        price: '160 000'
    }
];

const elemenents = date.map((item, id) => {
    return(
        <a href='none' className='Offer__Item' key={id}>
            <img src={require('../../../assets/image/Offer/product.png')} alt={'product' + id} />
            <div>
                <img src={require('../../../assets/image/Offer/flag.png')} alt={'country' + id} />
                <span>{item.description}</span>
                <span>{item.price} <span>руб.</span> </span>
                <img src={require('../../../assets/image/Logo/logo1.png')} alt={'logo' + id} />
            </div>
        </a>
    );
});

const Offer = () => {
    return (
        <div className='Offer'>
            <div className='Offer__Header'>
                <a href='none'>
                    Специальные предложения
                    <img src={require('../../../assets/icons/next-categories.svg')} alt='next'/>
                </a>
            </div>

            <div className='Offer__Menu'>
                { elemenents }
            </div>
        </div>
    );
};

export default Offer;