
import {LOGIN_SUCCESS, REGISTRATION_SUCCESS} from'./LoginType'
import {LOGIN_FAIL} from'./LoginType'

const initialstate=
{
   isRegistration:false,
   isLogin:false,
    user01:{},
    user1:{}
}


const LoginReducer=(state=initialstate, action)=>{
    switch(action.type){
             case LOGIN_SUCCESS:
                 return {
                    ...state,
                    user01:action.payload01,
                    user02:action.payload02, 
                    isLogin:true
                    
                 }
                 case REGISTRATION_SUCCESS:
                 return {
                    ...state,
                    user1:action.payload1,
                    user2:action.payload2,
                    user3:action.payload3,
                    isRegistration:true
                 }
                 case LOGIN_FAIL:
                 return {
                    ...state,
                    isLogin:false                    
                 }
                 default: return state 
    }

   }
 
export default LoginReducer;