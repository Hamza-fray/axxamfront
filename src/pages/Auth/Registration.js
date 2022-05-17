import React, {useContext, useEffect, useState} from 'react';
import {useFormik} from 'formik';
import {Button, Card, Form} from "react-bootstrap";
import * as Yup from "yup";
import './Login.css'
import {RegistrationContext} from "../../context/RegistrationContext";
import {Axios} from "axios";
import {Link} from "react-router-dom";






const validationSchema = Yup.object({
    firstName: Yup.string()
        .required('firstName est obligatoire'),
    email: Yup.string()
        .email('Email est invalide')
        .required('Email est obligatoire'),
    password: Yup.string()
        .required('Mot de passe est obligatoire'),
});


const Registration = ()=> {
    const url="";
    const [error,setError]=useState(null);



    const formik = useFormik({
        initialValues: {
            firstName:'',
            email: '',
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            const data = formik.values;
            console.log(data)
            Axios.post(url,{
                email: data.email,
                password :data.password,
            }).then(res=>{console.log(res.data)})

            formik.resetForm({
                values: {
                    firstName: '',
                    email: '',
                    password: '',
                }
            })
        }
    })

    return (

        <>
            <Card className="text-black  LoginForm " bg='default'>
                <div className="formSection ">
                    <Card.Title className="text-primary  "><p className="text-justify Roboto-blod title">CONNEXION</p>
                    </Card.Title>
                    <Card.Body className="p-5">
                        <Form onSubmit={formik.handleSubmit}>
                            {error ? (<p className="text-danger validationText mt-2">
                                {error.body}
                            </p>) : null}
                            <Form.Group className=" formGroup">
                                <Form.Label className="text-navy required">First Name</Form.Label>
                                <Form.Control type="firstName"
                                              name="firstName"
                                              id="firstName"
                                              // className=" loginInput"
                                              placeholder="Entrer votre prenom"
                                              onChange={formik.handleChange}
                                              value={formik.values.firstName}
                                />
                                {formik.errors.email ? (<p className="text-danger validationText mt-2">
                                    {formik.errors.email}
                                </p>) : null}

                            </Form.Group>
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
                            <Form.Group className="mb-3 formGroup ">
                                <Form.Label className="text-navy required">Login</Form.Label>
                                <Form.Control type="password"
                                              name="password"
                                              id="password"
                                              placeholder="Entrer votre mot de passe"
                                              onChange={formik.handleChange}
                                              value={formik.values.password}
                                              className="loginInput"
                                />
                                {formik.errors.email ? (<p className="text-danger validationText mt-2 mb-2">
                                    {formik.errors.password}
                                </p>) : null}
                            </Form.Group>
                            {/*<div className=" mb-3">*/}
                            {/*    <Link to='/ResetPassword'> Forgot*/}
                            {/*        password?</Link>*/}

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
                    <p className="text-center text-navy mt-2 "><Link to='/'>Already have an account ? </Link> <span
                        className="text-bold"></span></p>
                    {/*<p className="text-center text-navy mt-2 "><a href="/recrute#redirect-section"> <span*/}
                    {/*    className="text-bold">register</span></a></p>*/}
                </Card.Footer>
            </Card>
        </>
    );
}

export default Registration;
