import React ,{useState} from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { registrationSuccess } from '../redux/logins/LoginAction'
import { connect } from "react-redux"
import { useHistory, Redirect } from 'react-router-dom';
import swal from 'sweetalert';

const SignupData = Yup.object({
    passward: Yup.string()
        .min(6, 'Minimum six Digit!')
        .max(20, 'Too Long!')
        .required('Required passward'),
    name: Yup.string()
        .required('Required name'),
    email: Yup.string().email('Invalid email').
        required('Required valid email'),
});
var a,b,c;
const Registration = (props) => {
    var [isPasswordShown, setisPasswordShown]= useState(false)
   const [s,st]=useState(false)
    const onSubmit = (values) => {
       
        props.registrationSuccess(values)
      a=values.name.length
      b=values.name.length
      c=values.name.length
        console.log(values.name.length)
        if(a!==0 && b!==0 && c!==0)
        {
         st(true)   
        swal("Successfully Registered!", "You clicked the button!",
       "success");
        }
       
    }

    return (
        <div class="container-fluid">

            <div class="row">
                <div class="col-sm-6"
                    style={{
                        textAlign: "center",
                        margin: "80px 0px 100px 120px",
                        width: "580px", height: "350px",
                    }}>
                    <h1>Registration Form</h1>
                    <Formik
                        initialValues={{
                            name: '',
                            email: '',
                            passward: '',
                        }}
                        validationSchema={SignupData}
                        onSubmit={onSubmit}
                    >
                        {({ errors, touched }) => (
                            <div className="form-group"
                             style={{ marginTop: "50px" }}>
                                <Form>
                            <div className="form-group">
                                        <Field name="email" type="email"
                                            placeholder="Enter email "
                                             className="form-control"
                                            style={{ width: "250px", 
                                            margin: "0px 170px" }} />
                                    </div>
                                    <br />
                                    {errors.email && touched.email ?
                                        <div style={{ color: "red" }}>
                                            {errors.email}</div> : null}
                                    <br />

                                    <div class="form-group">
                                        <Field name="name"
                                            placeholder="Enter Name "
                                             className="form-control"
                                            style={{ width: "250px", 
                                            margin: "0px 170px" }} />
                                    </div>
                                    <br />

                                    {errors.name && touched.name ?
                                        <div style={{ color: "red" }}>
                                            {errors.name}</div> : null}
                                    <br />
                                    <div class="form-group">
                             <Field name="passward" type={isPasswordShown ? "text":"password"}
                                    className="form-control"
                                  style={{ width: "250px",
                                  margin: "0px 170px" }}
                                              placeholder="Enter passward" />
                                              <i className="fa fa-eye" onClick={()=>{ 
    setisPasswordShown(isPasswordShown => !isPasswordShown)}}
               style={{position:"absolute", top:"297px", right:"155px", cursor:"pointer" }} />
                                    </div>
                                    <br />
                                    {errors.passward && touched.passward ? (
                                        <div style={{ color: "red" }}>
                                            {errors.passward}</div>
                                    ) : null}
                                    <br />
             <button type="submit"  className="btn btn-primary"
                 style={{ margin: "10px", width: "100px" }}>Submit</button>
                          {(s===true) && <Redirect to= "/Profile"/>}      
                                </Form>
                            </div>
                        )}
                    </Formik>

                </div>
                <div class="col-sm-6" style={{
                    margin: "80px 0 0 0"
                }}>
                    <img src="https://picsum.photos/550/440" />

                </div></div></div>
    )
}

const mapStateToProps = (state) => {
    return {
        registration: state.LoginReducer
    }
}
const mapDispatchToProps = dispatch => {
    return {
        registrationSuccess: (name, passward, email) =>
            dispatch(registrationSuccess(name, passward, email))
    }
 
}
export default connect(mapStateToProps, mapDispatchToProps)
    (Registration);