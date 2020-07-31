import React from 'react';

import './style.scss';

const data = [
    {
        description: 'Тепловое',
        image: '1'
    },
    {
        description: 'Холодильное',
        image: '2'
    },
    {
        description: 'Электромеханическое',
        image: '3'
    },
    {
        description: 'Посудомоечное',
        image: '4'
    },
    {
        description: 'Хлебопекарное',
        image: '5'
    },
    {
        description: 'Линии раздачи',
        image: '6'
    },
    {
        description: 'Нейтральное',
        image: '7'
    },
    {
        description: 'Для фаст фуда',
        image: '8'
    },
    {
        description: 'Для зала',
        image: '9'
    },
    {
        description: 'Вспомогательное',
        image: '10'
    },
    {
        description: 'Для магазина',
        image: '11'
    },
];

const CatalogMenu = () => {

    const elements = data.map((item, id) => {
        return (
            <div className='CatalogMenu__Item' key={id}>
                <div className='CatalogMenu__Circle'>
                    <img src={require(`../../assets/image/CatalogMenu/${item.image}.png`)} alt='1'/>
                </div>
                <span>{item.description}</span>
            </div>
        );
    })

    return (
        <div className='CatalogMenu'>
            {elements}
        </div>
    );
};

export default CatalogMenu;