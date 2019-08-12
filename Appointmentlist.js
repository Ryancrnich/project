import React from 'react'
import './css.css'
import Printer from './Printer'
import { Link } from 'react-router-dom'

  const Appointmentlist = ({project}) => {

        return(
            <div>
            {project && project.map(project =>{
                return(
                    <Link to= {'/appointment/' + project.id}>
                    <Printer project = { project }key = {project.id}/>
                    </Link>
                )
            })}
            </div>
            )  
   
    }

export default Appointmentlist
