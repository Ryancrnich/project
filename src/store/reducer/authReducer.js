const initState= {
    authError: null
}

const authReducer = (state = initState, action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
                console.log('fail');
        return {
            ...state,
            authError: 'login failed'
        
        }
        case 'LOGIN_SUCCESS':
            console.log('seccess');
            return {
                ...state,
                authError: null
            
            }
    case 'SIGNOUT_SECCUSS':
    console.log('worked');  
    return state;
    case 'SIGNOUT_SUCCESS':
            console.log('seccess');
            return
    case 'SIGNUP_SUCCESS':
            console.log('seccessed');
            return{
                ...state,
                authError: null
            }

    case 'SIGNUP_ERROR':
     console.log('failed');
     return{
        ...state,
        authError: action.err.message
    }

            default:
                return state;
}
  
}
export default authReducer