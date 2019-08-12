import React from 'react'
import moment from 'moment'


 const Printer = ({project})=>  {

    if(project.endtime === '01:00'){
        var endtime = 'End Time : 1:00 AM'
    }
    else if(project.endtime === '02:00'){
        var endtime = 'End Time : 2:00 AM'
    }
    else if(project.endtime === '03:00'){
        var endtime = 'End Time : 3:00 AM'
    }
    else if(project.endtime === '04:00'){
        var endtime = 'End Time : 4:00 AM'
    }
    else if(project.endtime === '05:00'){
        var endtime = 'End Time : 5:00 AM'
    }
    else if(project.endtime === '06:00'){
        var endtime = 'End Time : 6:00 AM'
    }
    else if(project.endtime === '07:00'){
        var endtime = 'End Time : 7:00 AM'
    }
    else if(project.endtime === '08:00'){
        var endtime = 'End Time : 8:00 AM'
    }
    else if(project.endtime === '09:00'){
        var endtime = 'End Time : 9:00 AM'
    }
    else if(project.endtime === '10:00'){
        var endtime = 'End Time : 10:00 AM'
    }
    else if(project.endtime === '11:00'){
        var endtime = 'End Time : 11:00 AM'
    }
    else if(project.endtime === '12:00'){
        var endtime = 'End Time : 12:00 PM'
    }
    else if(project.endtime === '13:00'){
        var endtime = 'End Time : 1:00 PM'
    }
    else if(project.endtime === '14:00'){
        var endtime = 'End Time : 2:00 PM'
    }
    else if(project.endtime === '15:00'){
        var endtime = 'End Time : 3:00 PM'
    }
    else if(project.endtime === '16:00'){
        var endtime = 'End Time : 4:00 PM'
    }
    else if(project.endtime === '17:00'){
        var endtime = 'End Time : 5:00 PM'
    }
    else if(project.endtime === '18:00'){
        var endtime = 'End Time : 6:00 PM'
    }
    else if(project.endtime === '19:00'){
        var endtime = 'End Time : 7:00 PM'
    }
    else if(project.endtime === '20:00'){
        var endtime = 'End Time : 8:00 PM'
    }
    else if(project.endtime === '21:00'){
        var endtime = 'End Time : 9:00 PM'
    }
    else if(project.endtime === '22:00'){
        var endtime = 'End Time : 10:00 PM'
    }
    else if(project.endtime === '23:00'){
        var endtime = 'End Time  11:00 PM'
    }
    else if(project.endtime === '00:00'){
        var endtime = 'End Time : 12:00 AM'
    }
    else{

    }

    if(project.starttime === '01:00'){
        var starttime = 'Start Time: 1:00 AM'
    }
    else if(project.starttime === '02:00'){
        var starttime = 'Start Time: 2:00 AM'
    }
    else if(project.starttime === '03:00'){
        var starttime = 'Start Time: 3:00 AM'
    }
    else if(project.starttime === '04:00'){
        var starttime = 'Start Time: 4:00 AM'
    }
    else if(project.starttime === '05:00'){
        var starttime = 'Start Time: 5:00 AM'
    }
    else if(project.starttime === '06:00'){
        var starttime = 'Start Time: 6:00 AM'
    }
    else if(project.starttime === '07:00'){
        var starttime = 'Start Time: 7:00 AM'
    }
    else if(project.starttime === '08:00'){
        var starttime = 'Start Time: 8:00 AM'
    }
    else if(project.starttime === '09:00'){
        var starttime = 'Start Time: 9:00 AM'
    }
    else if(project.starttime === '10:00'){
        var starttime = 'Start Time: 10:00 AM'
    }
    else if(project.starttime === '11:00'){
        var starttime = 'Start Time: 11:00 AM'
    }
    else if(project.starttime === '12:00'){
        var starttime = 'Start Time: 12:00 AM'
    }
    else if(project.starttime === '13:00'){
        var starttime = 'Start Time: 1:00 PM'
    }
    else if(project.starttime === '14:00'){
        var starttime = 'Start Time: 2:00 PM'
    }
    else if(project.starttime === '15:00'){
        var starttime = 'Start Time: 3:00 PM'
    }
    else if(project.starttime === '16:00'){
        var starttime = 'Start Time: 4:00 PM'
    }
    else if(project.starttime === '17:00'){
        var starttime = 'Start Time: 5:00 PM'
    }
    else if(project.starttime === '18:00'){
        var starttime = 'Start Time: 6:00 PM'
    }
    else if(project.starttime === '19:00'){
        var starttime = 'Start Time: 7:00 PM'
    }
    else if(project.starttime === '20:00'){
        var starttime = 'Start Time: 8:00 PM'
    }
    else if(project.starttime === '21:00'){
        var starttime = 'Start Time: 9:00 PM'
    }
    else if(project.starttime === '22:00'){
        var starttime = 'Start Time: 10:00 PM'
    }
    else if(project.starttime === '23:00'){
        var starttime = 'Start Time: 11:00 PM'
    }
    else if(project.starttime === '24:00'){
        var starttime = 'Start Time: 12:00 PM'
    }
    else{
        
    }
        return (

          
            <div className = "section " >
            <div className = "card black lighten-2 z-depth-0" >
            <span className = "card-title pruple " >{moment(project.date.toString()).format('dddd')+ ' '}</span>
            <span className = "card-title pruple " >{moment(project.date.toString()).format('MMMM Do YYYY')}</span>
            
<p className= "black-text blue lighten-3 "> {starttime}</p>
<p className= "black-text green lighten-3 "> {endtime }</p>

                </div>
            </div>
        )
    }
export default  Printer