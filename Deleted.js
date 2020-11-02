import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { deleteNotification} from './store/actions/projectAction'
import React, { Component } from 'react'

class Deleted extends Component {

    
   render() {


    const {projects} = this.props;

return(
    <div className = "section  lighten- z-depth-0  " >
        <div className = " card blue lighten-3 z-depth-0"> 
        <div className = " card-content"> <center>
        <h5>  <span className = "card title yellow"> deleted appointments</span></h5>
        </center>
        {console.log(this.props.AppointmentDeleted)}
        {projects && projects.map(projects =>{
              console.log(projects)
           
                  return(
                    <div className = "green lighten-4 ">
 <div   id = "date" className = "black-text green lighten-3"> {"Appointment"+" "+projects.name}</div>
                    <span  id = "start"className = "red-text">start{" "+projects.id} </span>
                    <span  id = "end" className = "white-text"> endtime {" "+ projects.endtime}</span>
                    <div className = "black-text red lighten-3">
                <div id="a">
                   <form >
                  <button type="button" className="btn yellow darken-4 center" id = "id" value = {projects.id}>Delete</button> 
                  <input  type = "hidden" id="date" name = "date"value = {projects.date}/> 
                  </form>
                  </div>  
                  </div>          
                    </div> 
                  )
               } 
            )}
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
const mapstoretoprops= (state, props)=>{

  
    return{
        
        AppointmentDeleted: state.firestore.ordered.AppointmentDeleted,
        auth: state.firebase.auth,
        profile: state.firebase.profile


  
    }
}  
export default compose(
    connect(mapstoretoprops,mapDispatchtoProps),
    firestoreConnect([
    {
        collection: 'AppointmentDeleted', limit:5
    }
    
])
)(Deleted)

