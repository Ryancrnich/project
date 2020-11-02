import React, { Component } from 'react'
import Notifcations from "./Notifcations";
import Appointmentlist from './Appointmentlist';
import Deleted from './Deleted';
import { connect } from 'react-redux'
import { compose } from 'redux'
import {  firestoreConnect } from 'react-redux-firebase' 
import { Redirect } from 'react-router-dom' 

export class Dashboard extends Component {
    render() {
     const {project, auth, Notifications, appointmentsforteam, AppointmentDeleted} = this.props
     if(!auth.uid) return <Redirect to ='/signin' />
     if(this.props.profile.member=== true){
        return (
            <div className = "dashboard container" >
                <div className = "row">
                    <div className ="left">
                <Appointmentlist project ={appointmentsforteam} key ={appointmentsforteam.id}/>
               
                </div>
               
                    <div className ="right" >
                       <Notifcations  notifications ={ Notifications } key ={Notifications.id}/>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return( 
        <div className = "dashboard container" >
        <div className = "row">
            <div className ="left">
        <Appointmentlist project ={project}/>
        </div>
            <div className ="right" >
               <Notifcations uid ={auth.uid} name = {this.props.profile.firstName + ' ' + this.props.profile.lastName} notifications ={ Notifications }/>
            </div>
 
        </div>   
    </div>)
    }
  
}
}

const mapstoretoprops= (state)=>{
    return{
        project: state.firestore.ordered.appointments,
        Notifications: state.firestore.ordered.Notifications,
        auth: state.firebase.auth,
        appointmentsforteam:state.firestore.ordered.appointmentsforteam,
        AppointmentDeleted:state.firestore.ordered.AppointmentDeleted,
        profile: state.firebase.profile,
        name: state.auth.firstName
    }
}  
const mapdispatchtoprops =(dispatch)=>{
        return{
        }
        }
export default compose(
    connect(mapstoretoprops,mapdispatchtoprops ),
    firestoreConnect([
        {
        collection: 'AppointmentDeleted'
    },{
        collection: 'appointments'
    },
    {
        collection: 'Notifications', limit:3
    }, {
        collection: 'appointmentsforteam', limit:3
    }
])
)(Dashboard)
