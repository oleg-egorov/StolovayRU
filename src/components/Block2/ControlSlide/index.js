import React from 'react';

import './style.scss';

const ControlSlide = ({items, index, changeSlide}) => {
    const elements = items.map((item , id) => {
        const active = index === id ? 'ControlsSlide__Active' : null;
        
        return (
            <div className={`ControlsSlide__NotActive ${active}`} key={id} onClick={() => changeSlide(id)}/>
        );
    });

    return (
        <div className='ControlsSlide'>
            { elements }
        </div>
    );
};

export default ControlSlide;