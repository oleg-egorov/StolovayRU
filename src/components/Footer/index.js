import React from 'react';

import './style.scss';

const Footer = () => {
    return (
        <div className='Footer'>
            <div>
                <img src={require('../../assets/icons/logo.svg')} alt='logo'/>
                <div>
                    <span>Столовая.РУ</span>
                    <span>Создание оптимальных пищеблоков</span>
                </div>
            </div>
            <span>Сайт разработан NTI-systems</span>
        </div>
    );
};

export default Footer;