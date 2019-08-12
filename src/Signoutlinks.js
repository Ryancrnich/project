import React from 'react';
 import { NavLink } from 'react-router-dom';
import './index.css';
  const Signoutlinks = () =>{

        return (
            <ul className="right">
            <li><NavLink  to = "/">Home </NavLink></li>
            <li><NavLink to = "/signin">signin </NavLink></li>
            <li><NavLink to = "/signup">sign up </NavLink></li>
     
             </ul>
        );
    }
    export default Signoutlinks