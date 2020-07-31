import React from 'react';

import './style.scss';

const Sale = () => {
    return (
        <div className='Sale'>
            <div className='Sale__Content'>
                <img className='Sale__Img' src={require('../../../assets/icons/box.svg')} alt='box'/>
                <span>Самые низкие цены</span>
                <span>Распродажа</span>
                <a href='none'>Каталог распродаж 
                    <img src={require('../../../assets/icons/next.svg')} alt='next'/>
                </a>
            </div>
        </div>
    );
};

export default Sale;