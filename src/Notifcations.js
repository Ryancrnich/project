import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { deleteNotification,deleteNotificationNotification} from './store/actions/projectAction'
import React, { Component } from 'react'

class Notifcations extends Component {

    state = {
userID: this.props.auth.uid,
useremail: this.props.auth.email,
name: this.props.profile.firstName + ' '+ this.props.profile.lastName
    }
  
    action = ()=>{

        let b = document.querySelectorAll("button");
    for(let i ; b.length;i++){
        b[i].addEventListener("click", this.handler);
    }
}

    handle=(e)=>{
        this.setState({
          name: this.props.name
       
        })
        console.log(this.state)

      };
      handleee=(e)=>{
          e.preventDefault()
        this.setState({
          appointmentid: e.target.value
       
        })

        {this.props.notifications && this.props.notifications.map(notification =>{
            if(notification.id === e.target.value){
                return(
                    this.setState({
                        starttime: notification.starttime,
                        endtime: notification.endtime,
                        date: notification.date
                     
                      })
                )
             } 
           
          })}     

      };
    handlee=(e)=>{
        if( this.state.id === e.target.value ){
        this.setState({
            [e.target.id]: e.target.value   
        }, this.props.deleteNotificationNotification(this.state),
        this.props.deleteNotification(this.state),
       )
       alert('This appointment may that 24 hours to be removed ')
     } 
     else{
        this.setState({
            [e.target.id]: e.target.value   
        })
     }        
      };
   render() {

    const {notifications, auth } = this.props;
    
return(

    <div className = "section  lighten- z-depth-0" >
        <div className = " card blue lighten-3 z-depth-0"> 
        <div className = " card-content"> <center>
        <h5>  <span className = "card title yellow"> Notifications</span></h5>
        </center>
        {notifications && notifications.map(notification =>{
              if(notification.userID === auth.uid){
                  return(
                    <div className = "green lighten-4">
  
 <div   id = "date" className = "black-text green lighten-3"> {"Appointment"+" "+notification.date}</div>
                    <span  id = "start"className = "red-text">start{" "+notification.starttime} </span>
                    <span  id = "end" className = "white-text"> endtime {" "+ notification.endtime}</span>
                    <div className = "black-text red lighten-3">
                <div id="a">
                   <form onMouseOver ={this.handle}>
                  <button onMouseOver ={this.handleee} onClick= {this.handlee} type="button" className="btn yellow darken-4 center" id = "id" value = {notification.id}>Delete</button>                   
                  </form>
                  </div>  
                  </div>          
                    </div> 
                  )
               } 
             
            })}     

</div>
        </div>
    </div>
)
}
}

const mapDispatchtoProps = dispatch => {
    return {
        deleteNotificationNotification: appointment => dispatch(deleteNotificationNotification(appointment)),
        deleteNotification: appointment => dispatch(deleteNotification(appointment))
  
    };
  };
const mapstoretoprops= (state, props)=>{
    let notifications = state.firestore.ordered.Notifications
    let name = props.name 
    
  
    return{
        
        Notifications: notifications,
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        name:name

    }
}  
export default compose(
    connect(mapstoretoprops,mapDispatchtoProps ),
    firestoreConnect([
    {
        collection: 'Notifications', limit:5
    }
])
)(Notifcations)

