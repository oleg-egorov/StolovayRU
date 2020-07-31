import React, { Component } from 'react';

import './style.scss';

export default class Header extends Component {
    render () {
        return (
            <div className='Header'>
                <span>Компания</span>
                <span>Портфолио</span>
                <span>Проектирование</span>
                <div />
                <span>Ресторан</span>
                <span>Застройщики</span>
                <span>Гос.заказчикам</span>
                <span>Таблет-питание</span>
                <div />
                <span>Сервис</span>
                <span>Контакты</span>
                <span> <img src={require('../../assets/icons/email.svg')} alt='email'/>info@stolovay.ru </span>
                <span> <img src={require('../../assets/icons/telephone.svg')} alt='email'/>8 495 790-72-05</span>
            </div>
        );
    };
};