import React from 'react';

import './style.scss';
import Categories from './Categories';
import Slider from './Slider';
import Sale from './Sale';

const Block1 = () => {
    return (
        <div className='Block1'>
            <Categories/>
            <Slider />
            <Sale />
        </div>
    );
};

export default Block1;