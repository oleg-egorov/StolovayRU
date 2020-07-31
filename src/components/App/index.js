import React, { Component } from 'react';

import './style.scss';
import Header from '../Header';
import Search from '../Search';
import CatalogMenu from '../CatalogMenu';
import Block1 from '../Block1';
import Logo from '../Logo';
import Block2 from '../Block2';
import News from '../News';
import Panel from '../Panel';
import Seo from '../Seo';
import Clients from '../Clients';
import Navigation from '../Navigation';
import Footer from '../Footer';

export default class App extends Component {
    render () {
        return (
            <div className='App'>
                <Header />
                <Search />
                <CatalogMenu />
                <Block1 />
                <Logo />
                <Block2 />
                <News />
                <Panel />
                <Seo />
                <Clients />
                <Navigation />
                <Footer />
            </div>
        );
    };
};