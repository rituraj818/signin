import {LOGIN_SUCCESS, REGISTRATION_SUCCESS} from'./LoginType'
import {LOGIN_FAIL} from'./LoginType'
export const loginSuccess=(name,passward)=>{
    return {
        type: LOGIN_SUCCESS,
        payload01:name,
        payload02:passward,
    } 
}
export const registrationSuccess=(name,passward,email)=>{
    return {
        type: REGISTRATION_SUCCESS,
        payload1:name,
        payload2:passward,
            payload3:email,
    } 
}
export const loginFail=()=>{
    return {
        type: LOGIN_FAIL
    
    } 
}