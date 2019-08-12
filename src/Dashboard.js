import React, { Component } from 'react'
import Notifcations from "./Notifcations";
import Appointmentlist from './Appointmentlist';
import './css.css'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {  firestoreConnect } from 'react-redux-firebase' 
import { Redirect } from 'react-router-dom' 

export class Dashboard extends Component {
    render() {
     const {project, auth, Notifications, appointmentsforteam} = this.props
     if(!auth.uid) return <Redirect to ='/signin' />
     if(this.props.profile.member=== true){
        return (
            <div className = "dashboard container" >
                <div className = "row">
                    <div className ="left">
                <Appointmentlist project ={appointmentsforteam}/>
               
                </div>
                    <div className ="right" >
                       <Notifcations notifications ={ Notifications }/>

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
               <Notifcations uid ={auth.uid} notifications ={ Notifications }/>

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
        profile: state.firebase.profile
    }
}  
const mapdispatchtoprops =(dispatch)=>{
        return{
         
        }
        }
export default compose(
    connect(mapstoretoprops,mapdispatchtoprops ),
    firestoreConnect([{
        collection: 'appointments'
    },
    {
        collection: 'Notifications', limit:3
    }, {
        collection: 'appointmentsforteam', limit:3
    }
    
])
)(Dashboard)
