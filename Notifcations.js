import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from 'react-router-dom' 
import moment from 'moment'
import { deleteNotification} from './store/actions/projectAction'
import React, { Component } from 'react'

class Notifcations extends Component {

    state = {
      
    }
    handle=()=>{
     
        this.props.deleteNotification(this.state);
         
      };
   render() {


    const {notifications, auth} = this.props;

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

  
                    <div className = "black-text green lighten-3">{"Appointment"+" "+notification.date} </div>
                    <span className = "red-text">start{" "+notification.starttime} {notification.id}</span>
                    <span className = "white-text"> endtime{" "+notification.endtime}</span>
                    <div className = "black-text red lighten-3">
                       
                        <div id = "a">
                        <form onSubmit={this.handleSubmit}>
                <div className="a">
                  <button className="btn yellow darken-2 center">GET</button>
        
                  
                    </div>           </form>
                    
                  
                    </div> </div></div>
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
        deleteNotification: appointment => dispatch(deleteNotification(appointment))
  
    };
  };
const mapstoretoprops= (state)=>{

    return{
        
        Notifications: state.firestore.ordered.Notifications,
        auth: state.firebase.auth,
  
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

