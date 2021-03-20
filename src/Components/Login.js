import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {loginSuccess} from '../redux/logins/LoginAction'
import { connect, useSelector } from "react-redux"
import { Link, Redirect } from 'react-router-dom';
import { FacebookLoginButton } from 
"react-social-login-buttons";
import Profile from  './Profile'
import swal from 'sweetalert';


const SignupData = Yup.object({
  passward: Yup.string()
    .min(6, 'Minimum six Digit!')
    .max(20, 'Too Long!')
    .required('Required passward'),
  email: Yup.string().email('Invalid email').
  required('Required email'),
});



 const Login = (props) => {
   var [s, st]= useState(false)
   var [isPasswordShown, setisPasswordShown]= useState(false)


  
     const userdata =useSelector(state=>state.user1)
    const onSubmit = (values) => {
    if(userdata.email===values.email && userdata.passward===values.passward){
      props.loginSuccess(values)
      console.log(values.email)
      console.log(userdata.email)
       //console.log(props.login);
       console.log(values.passward)
      console.log(userdata.passward)
      st(true)
      //console.log(s)
      swal("Successfully Login!", "You clicked the button!",
       "success");
      
    }
    else{
      swal("Invalid User!", "You clicked the button!",
       "error");
      console.log("access denied")
    }
 
      }
  
  return(
    <>
 <div class="container-fluid">
 
  <div class="row">
    <div class="col-sm-6"
     style={{textAlign:"center",
 margin:"80px 0px 100px 120px" ,
  width:"580px", height:"350px", 
  }}>
   
   <h1>Login Form</h1>
    <Formik
      initialValues={{
        email: '',
        passward: '',
         
      }}
      validationSchema={SignupData}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
          <div className="form-group" style={{marginTop:"50px"}}>
        <Form>
          {/* <label >NAME:</label>
          <br/> */}
            <div className="form-group">
   
          <Field name="email" className="form-control" 
          style={{width:"250px",textAlign:"center", margin:"0px 170px"}}
           type="email" 
          placeholder="Enter email or name" /><i className="fa fa-user-circle" style={{position:"absolute",
          top:"116px", fontSize:"20px",
            right:"365px", cursor:"pointer" }}/>
         
         </div>
        
          {errors.email && touched.email ? 
          <div style={{color:"red", fontSize:"13px", top:"100px"}}>
              {errors.email}</div> : null}
<br/><br/>
              <div class="form-group">
              <Field name="passward" type={isPasswordShown ? "text":"password"} className="form-control"
              style={{width:"250px",textAlign:"center",
              margin:"0px 170px"}}
               placeholder="Enter passward"/>

                <i className="fa fa-key" style={{position:"absolute",
           top:"207px", right:"365px",fontSize:"20px", cursor:"pointer" }}/>
               <i className="fa fa-eye" onClick={()=>{ 
    setisPasswordShown(isPasswordShown => !isPasswordShown)}}
               style={{position:"absolute",fontSize:"20px", top:"207px", right:"155px", cursor:"pointer" }} />
               </div>
            
          {errors.passward && touched.passward ? (
            <div style={{color:"red"}}>{errors.passward}</div>
          ) : null}
          <br/>
          <br/>
        <div>
          <button type="submit" className="btn btn-primary"
           style={{margin:"10px",width:"100px"}}>Submit</button>
          {(s===true) && <Redirect to= "/Profile"/>}
         
          <Link to="/Registration">Register</Link> </div>
        </Form>
        <FacebookLoginButton
         style={{width:"250px",margin:"15px 170px"}}>Facebook
          </FacebookLoginButton>

        </div>
      )}
    </Formik>
    
    </div>
    <div class="col-sm-6" style={{
margin:"80px 0 0 0"}}>
  <img src="https://picsum.photos/550/350"  /> 
{/* style={{
margin:"0 0  78px 650px"}} />  */}
  </div></div></div>
  </>
  )
 }

 const mapStateToProps = (state) => {
    return {
      login: state.isLogin
    }
  }
  const mapDispatchToProps = dispatch => {
    return {
        loginSuccess:(email,passward)=> 
        dispatch(loginSuccess(email,passward))
        
    }

  }
  export default connect(mapStateToProps, 
    mapDispatchToProps)(Login);