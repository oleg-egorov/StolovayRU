import React from 'react';

import './style.scss';

const data = [
    {
        image: '1',
        brand: 'Abat',
        date: '22.06.17',
        title: 'Повышение энергоэффективности туннельных посудомоечных машин МПТ торговой марки Abat',
        text: 'С целью снижения нагрузки на электрическую сеть и для повышения энергоэффективности изделий с 1 июня 2017 года был изменен алгоритм работы туннельных посудомоечных машин МПТ торговой марки Abat всех моделей... контроллеры 38ПКА-01 всех туннельных посудомоечных машин МПТ теперь прошиваются новым программным обеспечением.'
    },
    {
        image: '2',
        brand: 'Abat',
        date: '22.06.17',
        title: 'Повышение энергоэффективности туннельных посудомоечных машин МПТ торговой марки Abat',
        text: 'С целью снижения нагрузки на электрическую сеть и для повышения энергоэффективности изделий с 1 июня 2017 года был изменен алгоритм работы...'
    },
    {
        image: '1',
        brand: 'Abat',
        date: '22.06.17',
        title: 'Повышение энергоэффективности туннельных посудомоечных машин МПТ торговой марки Abat',
        text: 'С целью снижения нагрузки на электрическую сеть и для повышения энергоэффективности изделий с 1 июня 2017 года был изменен алгоритм работы туннельных посудомоечных машин МПТ торговой марки Abat всех моделей... контроллеры 38ПКА-01 всех туннельных посудомоечных машин МПТ теперь прошиваются новым программным обеспечением.'
    }
];

const elements = data.map((item, id) => {
    return (
        <div className='News__Item' key={id}>
            <div className='News__ItemImage'>
                <img src={require(`../../assets/image/News/${item.image}.png`)} alt={'Изображение ' + id} />
            </div>
            <div className='News__ItemContent'>
                <div className='News__ItemHeader'>
                    <span>{item.brand}</span>
                    <span>{item.date}</span>
                </div>
                <span>{item.title}</span>
                <span>{item.text}</span>
            </div>
        </div>
    );
});

const News = () => {
    return (
        <div className='News'>
            <div className='News__Header'>
                <span>Новости производителей</span>
            </div>

            <div className='News__Content'>
                <div className='News__Main'>
                    <img src={require('../../assets/image/News/main.png')} alt='main news'/>
                    <div className='News__Text'>
                        <div>
                            <span>Abat</span>
                            <span>22.06.17</span>
                        </div>
                        <span>Новый разборный ротационный пекарский шкаф РПШ-18-8-6МР</span>
                        <span>
                            Новый разборный ротационный пекарский шкаф РПШ-18-8-6МР:  в комплекте 
                            тележка-шпилька ТШГ-18 на 18 уровней 600х800 мм вместимость тележки-шпильки - 
                            135 хлебных форм №7 инжекционный тип парообразования разборная конструкция 
                            увеличенное стекло двери. Память на 110 программ (до 4-ех этапов в каждой программе) 
                            USB-порт. Таймер до 10 ч Регулировка влажности от 0 до 100%. 5 скоро
                        </span>
                    </div>
                </div>

                <div className='News__Panel'>
                    { elements }
                </div>
            </div>

            <div className='News__Footer'>
                <button className='News__Button' type='button'>Все новости</button>
            </div>
        </div>
    );
};

export default News;