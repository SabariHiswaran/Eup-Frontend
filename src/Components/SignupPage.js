import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as Yup from "yup"
import { Button, Container, Row, Col } from 'react-bootstrap'
import { ColorRing } from 'react-loader-spinner'
import { Auth } from './Context/AuthContext'
// import _ from 'lodash'

const SignupPage = () => {


    const navigate = useNavigate()


    const [isSubmitting, setIsSubmitting] = useState(false)

      const [displayForm,setDisplayForm] = useState(true)

      const [serverResponse,setServerResponse] = useState({})

      const {login} = Auth()


    const formik = useFormik({
        initialValues: {
            name: "",
            emailId: "",
            password: "",
            designation : ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Your name is required"),
            emailId: Yup.string().email().required("Your email ID is required"),
            password: Yup.string().required("Your password is required"),
            designation : Yup.string().required("Your Designation is required")
        }),
        onSubmit: async (values, { resetForm }) => {

                setServerResponse({})
              setDisplayForm(false)

              setIsSubmitting(true)


              const createNewUser = await fetch("http://localhost:5000/",{
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify(values)
              })

              const responseFromServer = await createNewUser.json()

              login(responseFromServer.userId,responseFromServer.token)
              console.log(responseFromServer)
              setServerResponse(responseFromServer)
              resetForm()

              setIsSubmitting(false)

        }
    })


    return (
        <>


            {displayForm  &&
            

            <Container style={{height : "100vh"}} className='d-flex flex-column justify-content-center align-items-center'>

                <Container>
                    <Row>
                        <Col  lg={2} md={2} sm={0}>
                        </Col>

                        <Col  lg={8} md={8} sm={12} style={{textAlign:"center"}}>

                            <h4> Employee Uptrain Platform (EUP)</h4>

                        </Col>

                        <Col  lg={2} md={2} sm={0}>
                        </Col>
                    </Row>
                </Container>

                <Container>

                    <Row style = {{height : "400px"}}>

                        <Col lg={4} md={4} sm={0} >


                        </Col>

                        <Col lg={4} md={4} sm={0} className='d-flex flex-column justify-content-center py-3 px-5'>

                            <Container>
                                <input
                                    type='text'
                                    placeholder='Name'
                                    value={formik.values.name}
                                    name='name'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={ {width : "300px", height : " 30px", borderRadius : "5px", padding : "20px",border : "1px solid gray"}}
                                />
                                {formik.touched.name && formik.errors.name ? <p className="error-text"> {formik.errors.name}</p> : null}
                                

                                <input
                                    type='email'
                                    value={formik.values.emailId}
                                    placeholder='Email Id'
                                    name='emailId'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={ {width : "300px", height : " 30px", borderRadius : "5px", padding : "20px",marginTop : "15px",border : "1px solid gray"}}
                                />
                                {formik.touched.emailId && formik.errors.emailId ? <p className="error-text"> {formik.errors.emailId}</p> : null}
                             


                                <input
                                    type='password'
                                    placeholder='Password'
                                    value={formik.values.password}
                                    name='password'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={ {width : "300px", height : " 30px", borderRadius : "5px", padding : "20px",marginTop : "15px",border : "1px solid gray"}}
                                />
                                {formik.touched.password && formik.errors.password ? <p className="error-text"> {formik.errors.password}</p> : null}
                              
                                <input
                                    type='string'
                                    placeholder='Designation'
                                    value={formik.values.designation}
                                    name='designation'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    style={ {width : "300px", height : " 30px", borderRadius : "5px", padding : "20px",marginTop : "15px",border : "1px solid gray"}}
                                />
                                {formik.touched.designation && formik.errors.designation ? <p className="error-text"> {formik.errors.designation}</p> : null}
                              
                                <Button
                                variant='secondary'
                                onClick={formik.handleSubmit}
                                className='mx-2 mt-4'
                            >
                                Sign up
                            </Button>

                            <Container className='d-flex align-items-center justify-content-center mt-3'>
                                
                            <p className='mt-2'> Already have an account ? </p>
                            <Button
                                variant='secondary'
                                onClick={() => navigate("/login")}
                                className='mx-2'
                            >
                                Log In
                            </Button>

                        </Container>

                            </Container>
                        </Col>


                        <Col lg={4} md={4} sm={0} >


                        </Col>

                    </Row>


                </Container>

            </Container>
            }

            {
            isSubmitting ?
            !displayForm && 
                <Container className='d-flex flex-column justify-content-center align-items-center p-5'>

                <h3> Please wait while we are setting up your account</h3>
                {/* react loading spinner */}
                <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />
        
            </Container>
            : 
            serverResponse.message ?
            <Container>
                <h1> {serverResponse.message}</h1>
                <Button variant='danger' onClick={() => {
                        setServerResponse({})
                        setDisplayForm(true)
          
                        setIsSubmitting(false)
          
                    navigate(-1)}}> Go To Sign Up Page </Button>
            </Container>
            :
            !displayForm &&
           navigate("/api/teacher")
            
            }
        </>
    )
}

export default SignupPage