import React from 'react';
import '../header/Header.less';
import {NavLink} from 'react-router-dom';
import  "../header/Header.less";
const Nav = () => {
    return (
        <>
           <div className={'nav'}>

                   <ul>
                       <NavLink to={'/'}>
                           <li>Home</li></NavLink></ul>

           </div>
        </>
    );
};

export default Nav;