/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Spinner from '../Spinner/Spinner';

const Root = () => {
    const spinner=useNavigation();
    return (
        <div>
            <Header></Header>
            <div>{spinner.state==='loading' ?<Spinner></Spinner> : '' }</div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;