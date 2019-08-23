import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import {
  createAppointment,
  deleteAppointmentmember,
  deleteAppointment,
  createNotification
} from "./store/actions/projectAction";
import React, { Component } from "react";
class AppoimnetDetails extends Component {
  state = {
    date: this.props.appointment.date,
    starttime: this.props.appointment.starttime,
    endtime: this.props.appointment.endtime,
    userID: this.props.auth.uid,
    useremail: this.props.auth.email,
    id: this.props.match.params.id,
    name: this.props.profile.firstName + " " + this.props.profile.lastName
  };

  handlestart =(e)=>{
    this.setState({
      [e.target.id]: e.target.value   
  })
 var x = document.querySelectorAll("#endtime");
for(let i = 0; i<this.props.options.length; i++){
  if(e.target.value > this.props.options[i]){
    x[i].style.display = "none";
  }
  if(e.target.value <= this.props.options[i]){
    x[i].style.display = "inline";
  }
}
  }
  handleend=(e)=>{
    this.setState({
      [e.target.id]: e.target.value   
  })
  var x = document.querySelectorAll("#starttime");
 for(let i = 0; i<this.props.options.length+1; i++){
   if(e.target.value <= this.props.optionsother[i]){
     x[i].style.display = "none";
   }
   
   if(e.target.value > this.props.optionsother[i]){
    x[i].style.display = "inline";
  }
 
 }
  }
  handleSubmit=()=>{
    this.props.createAppointment(this.state);
    this.props.createNotification(this.state);
    if (this.props.profile.member === true) {
      this.props.deleteAppointmentmember(this.state);
    } else {
      this.props.deleteAppointment(this.state);
    }
  };
  render() {
    const { appointment, auth , options, optionsother} = this.props;
    if (!auth.uid && this.state.starttime) return <Redirect to="/" />;
    console.log(this.props.profile.member)
    if (appointment) {
      return (
        <div className="containerr center">
          <div className="card z-depth-2">
            <span className="card-title ">Appointment </span>
            <p>Details</p>
            <div className="card-action grey draken-4 grey-text center">
              <div className="card black lighten-1 blue-text text-lighten-1">
                {" "}
                <h1>
                  {moment(appointment.date.toString()).format("dddd") +
                    " " +
                    moment(appointment.date.toString()).fromNow()}
                   
                </h1>
              </div>

              <div className="card black lighten-1 blue-text text-lighten-1">
                {" "}
                {appointment.starttime}
              </div>
               <div className="card black lighten-1 blue-text text-lighten-1">
                {" "}
                {this.state.starttime}
              </div>
             
              { options  && options.map(option =>{
        return(
            <input onClick= {this.handlestart} type="button" className="btn orange darken-3" value = {option} name ="starttime" id="starttime"/>

        )
    })}
              <div className="card black lighten-1 blue-text text-lighten-1">
                {" "}
                {appointment.endtime}
              </div>
              <div className="card black lighten-1 blue-text text-lighten-1">
                {" "}
                {this.state.endtime}
              </div>
              { optionsother  && optionsother.map(option =>{
        return(  
          <input onClick= {this.handleend} type="button" className="btn blue lighten-1" value = {(parseInt(option, 10)+parseInt(1, 10))+":00"} name ="endtime" id="endtime"/>

        )
    })}
              <div className="card red lighten-1 white-text">
                {" "}
                
              </div>
              <div id = "b">
              <form onSubmit={this.handleSubmit}>
                <div className="input-fleld">
                  <button className="btn yellow darken-2 center">GET</button>
                </div>
              </form>]
            </div>{" "}
          </div>{" "}
          </div></div>
      );
    } else {
      return (
        <div className="container center ">
          <p>
            <b>Loading appointment...</b>
          </p>
        </div>
      );
    }
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    createAppointment: appointment => dispatch(createAppointment(appointment)),
    deleteAppointment: appointment => dispatch(deleteAppointment(appointment)),
    createNotification: appointment => dispatch(createNotification(appointment)),
    deleteAppointmentmember: appointment =>dispatch(deleteAppointmentmember(appointment))
  };
};

const mapstatetoprops = (state, props) => {
  
  console.log(state.firebase.profile.member);
  const id = props.match.params.id;
  let appointments = null;
  if (state.firebase.profile.member !== true) {
    appointments = state.firestore.data.appointments;
  } else {
    appointments = state.firestore.data.appointmentsforteam;
  }
  const appointment = appointments ? appointments[id] : null;
  let pickstart = null;
  if (appointment.starttime[0] === 0) {
    pickstart = appointment.starttime[1];
  }
  if (appointment.starttime[0] === 1) {
    pickstart = appointment.starttime[0] + appointment.starttime[1];
  } else {
    pickstart = appointment.starttime[0] + appointment.starttime[1];
  }
  let pickend = null;
  if (appointment.endtime[0] === 0) {
    pickend = appointment.endtime[1];
  }
  if (appointment.endtime[0] === 1) {
    pickend = appointment.endtime[0] + appointment.endtime[1];
  } else {
    pickend = appointment.endtime[0] + appointment.endtime[1];
  }
  let length = null
 length = pickend - pickstart;
 

  var options = new Array(length);
  let temp = 0;
        for(let i = 0; i < length; i++){
        temp =  pickstart;
        pickstart = temp;
        options[i] =  ((parseInt(pickstart, 10)+parseInt(i, 10))+":00");
    }
  return {
    appointment: appointment,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    options:options,
    optionsother:options
  };
};
export default compose(
  connect(
    mapstatetoprops,
    mapDispatchtoProps
  ),
  firestoreConnect([
    { collection: "appointments" },
    { collection: "appointmentsforteam" }
  ])
)(AppoimnetDetails);
