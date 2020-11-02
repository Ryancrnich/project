const initState= {
    project:[
        {id:1, date:'11/12/2019', start:'9:00am', endtime: '10:00am'},
        {id:2, date:'11/12/2019', start:'10:00am', endtime: '1:00am'},
        {id:3, date:'12/11/2019', start:'11:00am', endtime: '12:00am'},

    ]
}

const projectReducer = (state = initState, action)=>{
   switch(action.type){
       case 'CREATE_PROJECT':
           console.log('created project', action.project)
           return state
           case 'CREATE_PROJECT_ERROR':
           console.log('createdd project error', action.err)
           return state
           case 'CREATE_APPOINTMENT_ERROR':
            console.log('created project error', action.err)
            return state
            case 'CREATE_APPOINTMENT':
            console.log('Created project', action.project)
             return state
             case    'DELETE_APPOINTMENT':
            console.log('created project error', action.err)
            return state
            case  'DELETE_APPOINTMENT_ERROR':
            console.log('created project', action.project)
            return state
            case  'CREATE_NOIFICATIONS':
                console.log('created project', action.project)
                return state
                case  'CREATE_NOIFICATIONS_ERROR':
                    console.log('created project', action.err)
                    return state
                    case  'DELETE_Notification_ERROR':
                        console.log('did not deleted project', action.err)
                        return state
                        case  'DELETE_Notification':
                            console.log('DELETED Notification', action.appointment)
                            return state
                            case  'DELETE_Notification':
                                console.log('DELETED_APPOINTMENT"', action.appointment)
                                return state
                                case  'DELETE_Notification':
                                    console.log('DELETED_APPOINTMENT"_ERROR', action.err)
                                    return state
           default :
           return state 
   }
}
export default projectReducer 