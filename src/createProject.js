import React, { Component } from 'react'
import { createProject, createforteamProject } from './store/actions/projectAction'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom' 
class CreateProject extends Component {

state = {
    email:null,
    password:null
}
    handleChange =(e)=>{
        this.setState({
            [e.target.id]: e.target.value   
        })

    }
    handleSubmit =(e)=>{
        e.preventDefault();
      this.props.createProject(this.state)     
       }
       otherhandleSubmit =(e)=>{
        e.preventDefault();
      this.props.createforteamProject(this.state)     
       }
    render() {
        const { auth } = this.props
        if(!auth.uid) return <Redirect to ='/signin' />
         return (
            <div className = "containterr" >
                <form    onSubmit = {this.otherhandleSubmit} classname = "white " >
                <h5 className = "grey-text text-darken-3"> New Team Appointment </h5>
                <div className = "input-fleld" >
                    <label htmlFor ="date">Date</label>
                    <input  onChange = {this.handleChange} id = "date" type= "date"/>
                
            </div>
            <div className = "input-fleld" >
            <label htmlFor ="time">Start Time</label>
                    <input onChange = {this.handleChange} type= "time"id="starttime" />
                    <label htmlFor ="time">Start Time</label>
                    <input onChange = {this.handleChange} type= "time"id="endtime" />
                 </div>      
                 <div className = "input-fleld" >
                 <div className = "other" >
                 <button className = " btn pink lighten-1 z-depth-0">  Team</button>
                 </div>     
                 </div>
                </form>


<div className = "space"> <small>`</small></div>

                <form    onSubmit = {this.handleSubmit} classname = "white " >
                <h5 className = "grey-text text-darken-3"> New Business Appointment </h5>
                <div className = "input-fleld" >
                    <label htmlFor ="date">Date</label>
                    <input  onChange = {this.handleChange} id = "date" type= "date"/>
                
            </div>
            <div className = "input-fleld" >
            <label htmlFor ="time">Start Time</label>
                    <input onChange = {this.handleChange} type= "time"id="starttime" />
                    <label htmlFor ="time">Start Time</label>
                    <input onChange = {this.handleChange} type= "time"id="endtime" />
                 </div>      
                 <div className = "input-fleld" >
                 <div className = "other" >
                 <button className = " btn pink lighten-1 z-depth-0"> Work</button>
                 </div>     
                 </div>
                </form>
            </div>
        )
    }
}
const mapDispatchtoProps = (dispatch) =>{
    return{
      
        createProject: (project) => dispatch(createProject(project)),
        createforteamProject: (project) => dispatch(createforteamProject(project))
    }
}

const mapDispatchtoState = (state) =>{
    return{
      
        auth: state.firebase.auth
            }
}

export default connect(mapDispatchtoState, mapDispatchtoProps)(CreateProject)
