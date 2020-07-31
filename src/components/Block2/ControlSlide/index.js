import React from 'react';

import './style.scss';

const ControlSlide = ({items, index}) => {
    const elements = items.map((item , id) => {
        const active = index === id ? 'Active' : null;
        
        return (
            <div className={`NotActive ${active}`} key={id}/>
        );
    });

    return (
        <div className='ControlSlide'>
            <div className='FakeCircle'/>
            { elements }
            <div className='FakeCircle'/>
            <div className='FakeCircle'/>
        </div>
    );
};

export default ControlSlide;