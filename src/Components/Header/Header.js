import React from 'react';
import {useLocation} from "react-router-dom";
import HeaderHome from "../HeaderHome/HeaderHome";
import HeaderAuth from "../HeaderAuth/HeaderAuth";

const Header = () => {
    let location = useLocation();
    //console.log(location.pathname);
    if(location.pathname === '/' || location.pathname === '/registeredevents' || location.pathname === '/admin' || location.pathname === '/addevent'){
        return (
            <HeaderHome/>
        );
    }else{
        return (
            <HeaderAuth/>
        );
    }

};

export default Header;
