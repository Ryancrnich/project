import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from './store/actions/authactions'
class Signin extends Component {

state = {
    email:null,
    password:null,
  
}
    handleChange =(e)=>{
        this.setState({
            [e.target.id]: e.target.value   
        })

    }
    handleSubmit =(e)=>{
        e.preventDefault();
     this.props.signIn(this.state);      
       }
    render() {
        const { auth , authError} = this.props;
        if(auth.uid) return <Redirect to ='/' />
         return (
            <div className = "containterr" >
                 <div id = "b">
                <form    onSubmit = {this.handleSubmit}  >
                <h5 className = "green-text  center" >Sign In</h5> 
               <center className = "green-text"> <b>_____________________________</b></center>
               
                <div className = "input-fleld" >
                    <label htmlFor ="email">Email</label>
                    <input  onChange = {this.handleChange} id = "email" type= "Email"/>
                
            </div>
            <div className = "input-fleld" >
                    <label htmlFor ="password">Password</label>
                    <input onChange = {this.handleChange} type= "password"id="password" />
                 </div>  
                      
                 <div className = "input-fleld" >
                 <button className = "btn pink lighTen-1 z-depth-0"> SIGN IN</button>
                 </div>     
                 <div className = "red-text center"> 
                 { authError ? <p>{authError}</p>:null}
                 </div>
                </form>
                </div>
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
            signIn:(newUser) =>dispatch(signIn(newUser))
        }
        }
 
export default connect(mapstatetoprops, mapdispatchtoprops)(Signin)
