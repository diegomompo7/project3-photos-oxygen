import React from 'react';
import  { Outlet } from 'react-router-dom'
import { Header } from '../Header/Header';
// import Outlet

export const Root = (props) => {
    
    return (
        <>
            <Header value ={props.selectTab} setValue = {props.setSelectTab}/>
            {/* Add an Outlet*/}
            <Outlet />
        </>
    );
};
