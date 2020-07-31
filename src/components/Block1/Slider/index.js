import React, { Component } from 'react';

import './style.scss';
import { Image_1 } from './image.js';
import ControlSlide from '../ControlSlide';

const data = [
    {
        name: 'НИИ скорой помощи  им. Н.В. Склифосовского',
        description: 'Оборудование для пищеблоков',
        background: Image_1
    }
];

export default class Slider extends Component {
    state = {
        index: 0
    }


    render () {
        const { index } = this.state;

        return (
            <div className='Slider' style={{backgroundImage: `url(${data[index].background})`}}>
                <div className='Slider__Content'>
                    <span className='Slider__Text'>Портфолио</span>
                    <span>{data[index].name}</span>
                    <span>{data[index].description}</span>
                    <button className='Slider__Button'>Подробнее</button>
                </div>  
                <ControlSlide items={data} index={index}/>
            </div>
        );
    }
};