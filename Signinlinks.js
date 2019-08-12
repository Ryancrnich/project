import React from 'react';
 import { NavLink } from 'react-router-dom';
import './index.css';
import { connect } from 'react-redux';
import { signOut } from './store/actions/authactions'
  const Signinlinks = (props) =>{
;
        return (
            <ul className="right">
            <li className="grey-text text-lighten-4 " ><NavLink to = "/">Home </NavLink></li>
            <li><a onClick ={props.signOut}>Logout</a></li>
            <li><NavLink to = "/" className = "btn btn-floating pink lighten-1" >
    { props.profile.initials }
                </NavLink></li>
            </ul>

);
    }
const maptostate = (dispatch) =>{
    return{
        signOut: () => {dispatch(signOut())}
    }

}
    
    export default connect(null, maptostate)(Signinlinks)