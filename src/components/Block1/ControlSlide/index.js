import React from 'react';

import './style.scss';

const ControlSlide = ({items, index}) => {
    const elements = items.map((item , id) => {
        const active = index === id ? 'ControlsSlide__Active' : null;
        
        return (
            <div className={`ControlsSlide__NotActive ${active}`} key={id}/>
        );
    });

    return (
        <div className='ControlsSlide'>
            <div className='ControlsSlide__FakeCircle'/>
            { elements }
            <div className='ControlsSlide__FakeCircle'/>
            <div className='ControlsSlide__FakeCircle'/>
        </div>
    );
};

export default ControlSlide;