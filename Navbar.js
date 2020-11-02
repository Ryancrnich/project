import React from 'react';
import Signinlinks from './Signinlinks';
import Signoutlinks from './Signoutlinks';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
  const Navbar = (props) =>{
    const { auth, profile} = props

const links = auth.uid ? <Signinlinks profile = {profile}/>: <Signoutlinks />
        return (
        <nav className="nav-wrapper grey darken-3">
            
            <div className= "container">
          <Link to = "/">  Triple M Studios </Link>  
         {links}

          
                </div>
                
            </nav>
        );
    }
    const mapstate = (state) =>{
      
      return{
     auth: state.firebase.auth,
     profile: state.firebase.profile
      }

    }
    export default connect(mapstate)(Navbar)