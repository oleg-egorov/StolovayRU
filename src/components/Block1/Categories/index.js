import React from 'react';

import './style.scss';

const categoriesButton = [
    {
        name: 'Кафе, барам, ресторанам',
        link: 'null'
    },
    {
        name: 'Детским садам и школам',
        link: 'null'
    },
    {
        name: 'Таблет-питание',
        link: 'null'
    },
    {
        name: 'Для столовых',
        link: 'null'
    },
    {
        name: 'Для пищеблоков',
        link: 'null'
    },
    {
        name: 'Государственным заказам',
        link: 'null'
    },
    {
        name: 'Для магазинов',
        link: 'null'
    },
    {
        name: 'Для войсковых частей',
        link: 'null'
    },
    {
        name: 'Все предожения',
        link: 'null'
    }
];

const elements = categoriesButton.map((item, id) => {
    return (
        <div className='Categories__Item' key={id}>
            <a href={item.link}>
                {item.name} 
                <img src={require('../../../assets/icons/next-categories.svg')} alt='next'/>
            </a>
        </div>
    );
});

const Categories = () => {
    return (
        <div className='Categories'>     
            <div className='Categories__Header'>
                <span>
                    Целевые предложения
                </span>
                <span>
                    Оборудование 
                </span>
                <img src={require('../../../assets/icons/next-categories.svg')} alt='next'/>
            </div>
            {elements}
        </div>
    );
};

export default Categories;