import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import AppoinmentDetails from './AppoimnetDetails';
import Signin from './Signin'
import Signup from './Signup';
import createProject from './createProject';
import Footer from './Footer';

function App() {
 
  const handle =(e,appointment, user)=>{
    e.PreventDefault();
   this.props.createProject(appointment, user);     
   }
  return (
  
    <BrowserRouter>
     
    <div className="App container ">
      <h1 className="center blue-text">M3 Music Studios</h1>
      <Navbar />

      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/appointment/:id' render = {(props) => <AppoinmentDetails {...props} handle ={handle}/>}/>
        <Route exact path='/appointmentsforteam/:id' render = {(props) => <AppoinmentDetails {...props} handle ={handle}/>}/>
        <Route exact path='/signin' component={Signin}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/createProject' component={createProject}/>
      </Switch>
      <Footer />
    </div>


    </BrowserRouter>
   
  );
}





export default App
