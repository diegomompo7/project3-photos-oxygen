import React from 'react';
import  { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header';
// import Outlet

 const Root = (props) => {
    
    return (
        <>
            <Header/>
            {/* Add an Outlet*/}
            <Outlet></Outlet>
        </>
    );
};
export default Root