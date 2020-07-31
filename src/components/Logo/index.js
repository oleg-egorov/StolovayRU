import React from 'react';

import './style.scss';

const Logo = () => {
    return (
        <div className='Logo'>
            <div className='Logo__Content'>
                <div>
                    <a href='none'><img src={require('../../assets/image/Logo/logo1.png')} alt='logo1'/></a>
                    <span />
                    <a href='none'><img src={require('../../assets/image/Logo/logo2.png')} alt='logo1'/></a>
                </div>
                <span />
                <div>
                    <a href='none'><img src={require('../../assets/image/Logo/logo3.png')} alt='logo1'/></a>
                    <span />
                    <a href='none'><img src={require('../../assets/image/Logo/logo4.png')} alt='logo1'/></a>
                </div>
                <span />
                <div>
                    <a href='none'><img src={require('../../assets/image/Logo/logo5.png')} alt='logo1'/></a>
                    <span />
                    <a href='none'>Все бренды</a>
                </div>
            </div>
        </div>
    );
};

export default Logo;