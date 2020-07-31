import React from 'react';

import './style.scss';

const Panel = () => {
    return (
        <div className='Panel'>
            <div className='Panel__Header'>
                <span>Рекомендуем</span>
                <span>
                    В этих разделах вы можете получить подробную информацию о пищевом оборудовании 
                    для столовых, ресторанов и кафе ведущих производителей.
                </span>
            </div>
            
            <div className='Panel__Midle'>
                <a href='none' className='Panel__Item_1'>
                    <span>unox</span>
                    <span>Пароконвектоматы</span>
                    <span>Благодаря своей универсальности пароконвектоматы быстро завоевывают пользователей по всему миру.</span>
                </a>

                <a href='none' className='Panel__Item_2'>
                    <img src={require('../../assets/image/Panel/hallde.png')} alt='hallde'/>
                    <div>
                        <span>hallde</span>
                        <span>Овощерезки</span>
                        <span>Мощный двигатель переводит высокий крутящий момент на режущий инструмент</span>
                    </div>
                    <img src={require('../../assets/image/Panel/hallde.png')} alt='hallde'/>
                </a>

                <a href='none' className='Panel__Item_3'>
                    <img src={require('../../assets/image/Panel/simeco.png')} alt='simeco'/>
                    <div>
                        <span>simeco</span>
                        <span>Нержавеющее</span>
                        <span>Конструктивные особенности изделий отличаются высокой прочностью</span>
                    </div>
                    <img src={require('../../assets/image/Panel/simeco.png')} alt='simeco'/>
                </a>
            </div>

            <div className='Panel__Bottom'>
                <a href='none' className='Panel__Item_4'>
                    <span>rational</span>
                    <span>Пароконвектоматы</span>
                    <span>Педантичность и преданность своему делу делает продукцию Rational идеальной для тех, кто ищет надежность и долговечность</span>
                </a>

                <div>
                    <a href='none' className='Panel__Item_5'>
                        <span>abat</span>
                        <span>Тепловое оборудование</span>
                        <span>Более 55 лет успешно работает на рынке торгово-технологического оборудования, по праву занимая лидирующее положение в данном сегменте</span>
                    </a>

                    <a href='none' className='Panel__Item_6'>
                        <span>hicold</span>
                        <span>Холодильные столы</span>
                        <span>Многофункциональность оборудования позволяет оптимизировать пространство на кухне, сделать работу персонала максимально удобной и эффективной</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Panel;