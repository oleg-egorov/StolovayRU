import React, { Component } from 'react';

import './style.scss';
import { Image_1 } from './image.js';
import ControlSlide from '../ControlSlide';

const data = [
    {
        index: 0,
        number: 'Слайд №1',
        position: '0',
        name: 'НИИ скорой помощи  им. Н.В. Склифосовского',
        description: 'Оборудование для пищеблоков',
        image: Image_1
    },
    {
        index: 1,
        number: 'Слайд №2',
        position: '-100%',
        name: 'НИИ скорой помощи  им. Н.В. Склифосовского',
        description: 'Оборудование для пищеблоков',
        image: Image_1
    },
    {
        index: 2,
        number: 'Слайд №3',
        position: '-200%',
        name: 'НИИ скорой помощи  им. Н.В. Склифосовского',
        description: 'Оборудование для пищеблоков',
        image: Image_1
    }
];

export default class Slider extends Component {
    state = {
        index: 0,
    }

    timeInterval = 5000;

    elements = data.map((item, id) => {
        return (
            <div className='Slider__Content' key={ id }>
                <div>
                    <span className='Slider__Text'>{ item.number }</span>
                    <span>{ item.name }</span>
                    <span>{ item.description }</span>
                    <button className='Slider__Button'>Подробнее</button>
                </div>
                <img src={ item.image } alt='product'/>
            </div>
        );
    });
        
    changeSlide = (id) => {
        this.setState({
            index: id,
        });
    };

    startSlider = () => {
        this.setState((state) => {
        
            if (state.index === data.length - 1) {
                return {
                    index: 0
                };
            } else {
                return {
                    index: state.index + 1
                };
            };
        });
    };

    componentDidMount() {
        this.firstStart = setTimeout(() => {
            this.startSlider(this.timeInterval);
        }, this.timeInterval);
    };

    componentDidUpdate(...nextState) {
        if( this.state.index !== nextState.index ) {
            clearTimeout(this.startInterval)
            this.startInterval = setInterval(() => {
                this.startSlider();
            }, this.timeInterval);
        };
    }

    render () {
        const { index } = this.state

        return ( 
            <div className='Slider'>
                <div className='Slider__Items' style={ {left: data[index].position} }>
                    { this.elements }
                </div>
                <ControlSlide items={ data } index={ index } changeSlide={this.changeSlide} />
            </div>
        );
    }
};