import React, { Component } from 'react';

import './style.scss';
import { Image_1 } from './image.js';
import ControlSlide from '../ControlSlide';

const data = [
    {
        name: 'Сервис',
        description: 'Гарантийный ремонт, монтаж и т.д.',
        background: Image_1
    }
];

export default class Service extends Component {
    state = {
        index: 0
    }


    render () {
        const { index } = this.state;

        return (
            <div className='Service' style={{backgroundImage: `url(${data[index].background})`}}>
                <div className='Service__Content'>
                    <span>{data[index].name}</span>
                    <span>{data[index].description}</span>
                    <a href='none'>Подробнее ></a>
                </div>  
                <ControlSlide items={data} index={index}/>
            </div>
        );
    }
};