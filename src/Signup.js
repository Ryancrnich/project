import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from './store/actions/authactions'
class Signup extends Component {

state = {
    email:null,
    password:null,
    firstname:null,
    lastname:null
}
    handleChange =(e)=>{
        this.setState({
            [e.target.id]: e.target.value   
        })

    }
    handleSubmit =(e)=>{
        e.preventDefault();
     this.props.signup(this.state);      
       }
    render() {
        const { auth , authError} = this.props;
        if(auth.uid) return <Redirect to ='/' />
         return (
            <div className = "containterr" >
                <form    onSubmit = {this.handleSubmit} classname = "white " >
                <h5 className = "grey-text text-darken-3 center" >Sign up</h5> 
                <div className = "input-fleld" >
                    <label htmlFor ="email">Email</label>
                    <input  onChange = {this.handleChange} id = "email" type= "Email"/>
                
            </div>
            <div className = "input-fleld" >
                    <label htmlFor ="password">Password</label>
                    <input onChange = {this.handleChange} type= "password"id="password" />
                 </div>  
                 <div className = "input-fleld" >
                    <label htmlFor ="firstname">firstname</label>
                    <input onChange = {this.handleChange} type= "text"id="firstname" />
                 </div>      
                 <div className = "input-fleld" >
                    <label htmlFor ="lastname">lastname</label>
                    <input onChange = {this.handleChange} type= "text"id="lastname" />
                 </div>          
                 <div className = "input-fleld" >
                 <button className = "btn pink"> SIGN IN</button>
                 </div>     
                 <div className = "red-text center"> 
                 { authError ? <p>{authError}</p>:null}
                 </div>
                </form>
            </div>
        )
    }
}

const mapstatetoprops =(state)=>{
    return{
        authError: state.auth.authError,
       auth: state.firebase.auth

    }
    }
    const mapdispatchtoprops =(dispatch)=>{
        return{
            signup:(newUser) =>dispatch(signup(newUser))
        }
        }
 
export default connect(mapstatetoprops, mapdispatchtoprops)(Signup)
