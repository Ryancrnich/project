import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { deleteNotification} from './store/actions/projectAction'
import React, { Component } from 'react'

class Notifcations extends Component {

    state = {
 
    }
    
    handle=(e)=>{
        if( this.state.id === e.target.value ){
        this.setState({
            [e.target.id]: e.target.value   
        },this.props.deleteNotification(this.state))
     } 
     else{
        this.setState({
            [e.target.id]: e.target.value   
        })
     alert('if you click the button one more time it will delete the appointment you have set.')
     }
        console.log(this.state.id)
        
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
                    <span className = "red-text">start{" "+notification.starttime} </span>
                    <span className = "white-text"> endtime{" "+ notification.endtime}</span>
                    <div className = "black-text red lighten-3">
                <div id="a">
                   
                  <button onClick= {this.handle} type="button" className="btn red darken-4 center"  id="id" name = "id"value = {notification.id}>Delete</button>
               
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

