 import React from 'react';
import Signoutlinks from './Signoutlinks'
import { Link } from 'react-router-dom';
  const Footer = () =>{

        return (
          
        <footer className="nav-wrapper grey darken-3">
        
             <div className="footer">
            <div className="container">
            <div className= "container">
          

          
                </div>
                {'© 2019 M3 Studios '}
                 <p></p>
                 <div className="left" >
            <Link to = "/">  M3 Studios </Link>  
            <p></p>
            </div>
            <div className="right">
            <Signoutlinks />
            </div>
            </div>
          </div>
           
                
            </footer>
        );
    }
    export default Footer
