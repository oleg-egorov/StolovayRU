import React from 'react';

import './style.scss';

const Navigation = () => {
    return (
        <div className='Navigation'>
            <div className='Navigation__Items'>
                <span>Информация</span>
                <div>
                    <a href='none'>Информация</a>
                    <a href='none'>Компания</a>        
                    <a href='none'>Портфолио</a>           
                    <a href='none'>Проектирование</a>                 
                    <a href='none'>Ресторанам</a>        
                    <a href='none'>Застройщикам</a>             
                    <a href='none'>Гос.заказчикам</a>             
                    <a href='none'>Таблет-питание</a>             
                    <a href='none'>Сервис</a>
                    <a href='none'>Новости</a>         
                    <a href='none'>Контакты</a>
                </div>
            </div>

            <div className='Navigation__Items'>
                <span>Оборудование</span>
                <div>
                    <a href='none'>Тепловое</a>             
                    <a href='none'>Холодильное</a>          
                    <a href='none'>Электромеханическое</a>         
                    <a href='none'>Посудомоечное</a>   
                    <a href='none'>Барное</a>         
                    <a href='none'>Хлебопекарное</a>             
                    <a href='none'>Линии раздачи</a>          
                    <a href='none'>Нейтральное</a>                
                    <a href='none'>Для фаст фуда</a>                    
                    <a href='none'>Для залов</a>                         
                    <a href='none'>Весовое</a>
                </div>
            </div>

            <div className='Navigation__Items'> 
                <span>Предложение</span>
                <div>
                    <a href='none'>Кафе, барам, ресторанам</a>
                    <a href='none'>Дестким садам и школам</a>
                    <a href='none'>Таблет-питание</a>
                    <a href='none'>Для кондитерских</a>
                    <a href='none'>Для пиццерий</a>
                    <a href='none'>Для магазинов</a>
                    <a href='none'>Для воинских частей</a>
                    <a href='none'>Все предложения</a>
                </div>
            </div>

            <div className='Navigation__Items'>
                <span>Контакты</span>
                <div>
                    <span>8 495 150-31-71</span>
                    <span>8 800 500 43 44</span>
                    <span>звонок беспланый</span>

                    <span>Пн-Пт</span>
                    <span>09:00 до 18:00</span>

                    <span>com@stolovay.ru</span>
                    <span>info@stolovay.ru</span>

                    <span>111524, Москва,</span>
                    <span>Рязанский проспект 24к2</span>
                </div>
            </div>

            <div className='Navigation__Selects'>
                <div>
                    <span>Информация</span>
                    <span>+</span>
                </div>
                <div>
                    <span>Оборудование</span>
                    <span>+</span>
                </div>
                <div>
                    <span>Предложения</span>
                    <span>+</span>
                </div>
                <div>
                    <span>Контакты</span>
                    <span>+</span>
                </div>
                <div>
                    <span>Реквизиты</span>
                    <span>+</span>
                </div>
            </div>
        </div>
    );
};

export default Navigation;