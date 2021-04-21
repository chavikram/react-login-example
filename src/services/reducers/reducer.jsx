import LOGIN_ACTION from '../constant'
const initialState = {
    loginData:[]
}
export default function loginAction(state=[], action){
    switch(action.type){
        case LOGIN_ACTION:
            return [
                ...state,
                {loginData:action.data}
            ]
            
        default: 
            return state 
 
    }
}