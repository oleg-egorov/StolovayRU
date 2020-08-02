import React, { Component } from 'react';

import './style.scss';
import { Image_1 } from './image.js';
import ControlSlide from '../ControlSlide';

const data = [
    {
        index: 0,
        position: '0',
        name: 'Сервис №1',
        description: 'Гарантийный ремонт, монтажи и т.д.',
        image: Image_1
    },
    {
        index: 1,
        position: '-100%',
        name: 'Сервис №2',
        description: 'Гарантийный ремонт, монтажи и т.д.',
        image: Image_1
    }
];

export default class Service extends Component {
    state = {
        index: 0,
    }

    timeInterval = 7000;

    elements = data.map((item, id) => {
        return (
            <div className='Service__Content' key={ id }>
                <img src={ item.image } alt='product'/>
                <div>
                    <span>{ item.name }</span>
                    <span>{ item.description }</span>
                    <a href='none'>Подробнее {'>'}</a>
                </div>
            </div>
        );
    });
        
    changeSlide = (id) => {
        this.setState({
            index: id,
        });
    };

    startService = () => {
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
            this.startService(this.timeInterval);
        }, this.timeInterval);
    };

    componentDidUpdate(...nextState) {
        if( this.state.index !== nextState.index ) {
            clearTimeout(this.startInterval)
            this.startInterval = setInterval(() => {
                this.startService();
            }, this.timeInterval);
        };
    }

    render () {
        const { index } = this.state

        return ( 
            <div className='Service'>
                <div className='Service__Items' style={ {left: data[index].position} }>
                    { this.elements }
                </div>
                <ControlSlide items={ data } index={ index } changeSlide={this.changeSlide} />
            </div>
        );
    }
};