import LOGIN_ACTION from '../constant'
export const loginAction=(data)=>{
    return {
        type: LOGIN_ACTION,
        data: data
    }
} 