// import React, {useState} from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'react-bootstrap'
// import './ResetPassword.css'
// import './Login'
// import {Link} from "react-router-dom";
// import Login from "./pages/Auth/Login";
// import {Form} from "react-bootstrap";
// import formik, {useFormik} from "formik";
// import * as Yup from "yup";
// import {Axios} from "axios";
//
// const url="";
// const validationSchema = Yup.object({
//     email: Yup.string()
//         .email('Email est invalide')
//         .required('Email est obligatoire'),
//
// });
//
// const ResetPassword  =()=>{
//
//     const [error,setError]=useState(null);
//     const[data,setData]=useState({
//         email:"",
//
//     })
//     const formik = useFormik({
//         initialValues: {
//             email: '',
//
//         },
//         validationSchema: validationSchema,
//         onSubmit: values => {
//             const data = formik.values;
//             console.log(data)
//             Axios.post(url,{
//                 email: data.email,
//
//             }).then(res=>{console.log(res.data)})
//             formik.resetForm({
//                 values: {
//                     email: '',
//
//                 }
//             })
//         }
//     })
//     return (
//         <main>
//             <section className='container'>
//                 <Form onSubmit={formik.handleSubmit}>
//                     {error ? (<p className="text-danger validationText mt-2">
//                         {error.body}
//                     </p>) : null}
//                     <Form.Group className=" formGroup">
//                         <Form.Label className="text-navy required">Email</Form.Label>
//                         <Form.Control type="email"
//                                       name="email"
//                                       id="email"
//                                       // className=" loginInput"
//                                       placeholder="Entrer votre email"
//                                       onChange={formik.handleChange}
//                                       value={formik.values.email}
//                         />
//                         {formik.errors.email ? (<p className="text-danger validationText mt-2">
//                             {formik.errors.email}
//                         </p>) : null}
//
//                     </Form.Group>
//                     </Form>
//                 {/*<form>*/}
//                 {/*    <div>*/}
//                 {/*        <h3>Forgot password</h3>*/}
//                 {/*    </div>*/}
//
//                 {/*    <div className="mb-3">*/}
//                 {/*        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>*/}
//                 {/*        <input type="email" className="form-control" id="exampleInputEmail1"*/}
//                 {/*               aria-describedby="emailHelp"/>*/}
//                 {/*        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.*/}
//                 {/*        </div>*/}
//                 {/*    </div>*/}
//                 {/*    <button type="submit" className="btn btn-primary" style={{backgroundColor: "sandybrown"}}>Reset*/}
//                 {/*        Password*/}
//                 {/*    </button>*/}
//                 {/*</form>*/}
//             </section>
//         </main>
//     )
// }
// export default ResetPassword;
import React, {useContext, useEffect, useState} from 'react';
import {useFormik} from 'formik';
import {Button, Card, Form} from "react-bootstrap";
import * as Yup from "yup";
import './Login.css';
import axios, {Axios} from "axios";
import {LoginContext} from "../../context/LoginContext";
import {Link} from "react-router-dom";

const url="";
const validationSchema = Yup.object({
    email: Yup.string()
        .email('Email est invalide')
        .required('Email est obligatoire'),
    password: Yup.string()
        .required('Mot de passe est obligatoire'),
});


const ResetPassword=() => {

    const [error,setError]=useState(null);
    const[data,setData]=useState({
        email:"",
        password:"",
    })




    const formik = useFormik({
        initialValues: {
            email: '',

        },
        validationSchema: validationSchema,
        onSubmit: values => {
            const data = formik.values;
            console.log(data)
            Axios.post(url,{
                email: data.email,

            }).then(res=>{console.log(res.data)})
            formik.resetForm({
                values: {
                    email: '',

                }
            })
        }
    })

    return (

        <>
            <Card className="text-black  LoginForm " bg='default'>
                <div className="formSection ">
                    <Card.Title className="text-primary  "><p className="text-justify Roboto-blod title">Reset Password</p>
                    </Card.Title>
                    <Card.Body className="p-5">
                        <Form onSubmit={formik.handleSubmit}>
                            {error ? (<p className="text-danger validationText mt-2">
                                {error.body}
                            </p>) : null}
                            <Form.Group className=" formGroup">
                                <Form.Label className="text-navy required">Email</Form.Label>
                                <Form.Control type="email"
                                              name="email"
                                              id="email"
                                              className=" loginInput"
                                              placeholder="Entrer votre email"
                                              onChange={formik.handleChange}
                                              value={formik.values.email}
                                />
                                {formik.errors.email ? (<p className="text-danger validationText mt-2">
                                    {formik.errors.email}
                                </p>) : null}

                            </Form.Group>
                            <br/>

                            {/*<div className=" mb-3">*/}
                            {/*    <p className="text-center text-navy mt-2 "><Link to='/ResetPassword'>Mot de passe oublié ? </Link> <span*/}
                            {/*        className="text-bold"></span></p>*/}
                            {/*    /!*<Link to='/ResetPassword'> Forgot*!/*/}
                            {/*    /!*    password?</Link>*!/*/}

                            {/*    /!*<a className="text-navy forget-pass" href="/forgetpassword">Mot de passe oublié ?</a>*!/*/}
                            {/*</div>*/}
                            <div className="d-flex flex-column  align-items-center col-12 ">
                                <Button className="LoginSubmitBtn " variant="primary" type=" ">
                                    Lancer
                                </Button>
                            </div>

                        </Form>
                    </Card.Body>
                </div>
                <Card.Footer className="LoginFormFooter align-items-center   " bg='primary'>
                    <p className="text-center text-navy mt-2 "><Link to='/Registration'>Don't have an account ? </Link> <span
                        className="text-bold"></span></p>
                </Card.Footer>
            </Card>
        </>
    );
}

export default ResetPassword;
