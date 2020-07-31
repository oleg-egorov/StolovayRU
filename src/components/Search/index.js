import React, { Component } from 'react';

import './style.scss';

export default class Search extends Component {
    render () {
        return (
            <div className='Search'>
                <div className='Search__Logo'>
                    <div className='Search__Hamburger'>
                        <div />
                        <div />
                        <div />
                    </div>

                    <img src={require('../../assets/icons/logo.svg')} alt='logo'/>
                    <div>
                        <span>Столовая.РУ</span>
                        <span>Создание пищеблоков</span>
                    </div>
                </div>

                <div className='Search__Panel'>
                    <div className='Search__Panel_GrayButton'>
                        <span>Все</span>
                        <span></span>
                    </div>
                    <input />
                    <div className='Search__Panel_OrangeButton'>
                        <img src={require('../../assets/icons/loupe.svg')} alt='loupe'/>
                    </div>
                </div>

                <div className='Search__Provider'>
                    <img src={require('../../assets/icons/person.png')} alt='person'/>
                    <span>Мы на портале поставщиков</span>
                </div>

                <div className='Search__Basket'>
                    <img src={require('../../assets/icons/loupe_green.png')} alt='person'/>
                    <img src={require('../../assets/icons/phone_green.png')} alt='person'/>

                    <a href='none' className='Search__Shopping'>
                        <span>12</span>
                        <img src={require('../../assets/icons/shopping.svg')} alt='person'/>
                        <img src={require('../../assets/icons/shopping_orange.svg')} alt='person'/>
                    </a>

                    <div className='Search__Sum'>
                        <span>Сумма</span>
                        <span>150 000</span>
                    </div>
                </div>
            </div>
        );
    };
};