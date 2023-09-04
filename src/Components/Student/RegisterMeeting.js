import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'

const RegisterMeeting = ({ meeting }) => {

    const {
        id,
        courseTopic,
        topic,
        membersLimit,
        startDate,
        endDate,
        startTime,
        endTime,
        totalDays,
        name,
        designation,
        experience,
        knowledgeRequired
    } = meeting

    const navigate = useNavigate()

    const [isSubmitting, setIsSubmitting] = useState(false)

    const [displayForm, setDisplayForm] = useState(true)

    const formik = useFormik({
        initialValues: {
            name: "",
            designation: "",
            experience: "",
            empStatus: "",
            emailId: "",
            managerEmailId: "",
            accountName : ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Your name is required"),
            designation: Yup.string().required("Your designation is required"),
            experience: Yup.number().required("Your total number of years is required"),
            empStatus: Yup.string().required("Your Employee Status Status is required"),
            emailId: Yup.string().required("Your email Id is required"),
            managerEmailId: Yup.string().required("Your manager email Id is required"),
            accountName : Yup.string().when("empStatus", {
                is: "Project",
                then:() =>  Yup.string().required("Your Account Name is required")
              })
        }),
        onSubmit: async (values, { resetForm }) => {

            setDisplayForm(false)

            setIsSubmitting(true)

            if(values.accountName === "")  values["accountName"] = "Not Applicable"

            const emailRole = values.empStatus === "Project" ? "managerEmailId" : "hrEmailId"

            const newVal = {
                name: values.name,
                designation: values.designation,
                experience: values.experience,
                empStatus: values.empStatus,
                emailId: values.emailId,
                [emailRole]: values.managerEmailId,
                accountName : values.accountName
            }

            //   const createMeeting =await  fetch("http://localhost:5000/api/teacher/courses/createMeeting", {
            //       method: "POST",
            //       headers: { 'Content-Type': 'application/json' },
            //       body : JSON.stringify(values)
            //     })

            //   const responseFromServer = await createMeeting.json()

            resetForm()

            setIsSubmitting(false)

            console.log(newVal)

        }
    })


    return (
        <Container className='p-3 my-2 h-100'>

            <Row className=' h-100'>

                <Col lg={4} md={4} sm={12} className=' px-5  border-end border-black d-flex flex-column justify-content-center '>
                    <Container >
                        <h5 className='pb-3 text-decoration-underline'>Selected Meeting :</h5>

                        <h5> {topic}  ({courseTopic})  </h5>
                        <p className='m-0'> <span className="meetingDetailsHeading"> Date </span>- {startDate?.split("T")[0]} to {endDate?.split("T")[0]} </p>
                        <p className='m-0'> <span className="meetingDetailsHeading">Time</span> - {startTime} - {endTime} </p>
                        <p className='m-0'> <span className="meetingDetailsHeading">Participants Limit </span>- {membersLimit} </p>
                        <p className='m-0'> <span className="meetingDetailsHeading">Pre-requistees required </span>- {knowledgeRequired} </p>
                        <p className='m-0'> {name} | {designation} | {experience} years  </p>
                    </Container>
                    <Button
                        variant="danger"
                        onClick={() => navigate(-1)}
                    >
                        Go Back
                    </Button>


                </Col>



                <Col lg={4} md={4} sm={0} className='d-flex flex-column py-5 px-5'>

                    <Container>

                        <p className='label-margin'> Name </p>
                        <input
                            type='string'
                            value={formik.values.name}
                            name='name'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name ? <p className="error-text"> {formik.errors.name}</p> : null}

                        <p className='label-margin'> Designation</p>
                        <input
                            type='string'
                            value={formik.values.designation}
                            name='designation'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.designation && formik.errors.designation ? <p className="error-text"> {formik.errors.designation}</p> : null}

                        <p className='label-margin'>  Years of Experience </p>
                        <input
                            type='number'
                            value={formik.values.experience}
                            name='experience'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.experience && formik.errors.experience ? <p className="error-text"> {formik.errors.experience}</p> : null}

                    </Container>

                </Col>
                <Col lg={4} md={4} sm={0} className='d-flex flex-column py-5 px-5'>

                    <Container>

                        <p className='label-margin'> Project/Bench </p>

                        <select
                            name="empStatus"
                            value={formik.values.empStatus}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                            <option value="" label="Select Status">
                                Select a Status
                            </option>
                            <option value="Project" label="Project">
                                Project
                            </option>
                            <option value="Bench" label="Bench">
                            Bench
                            </option>
                        </select>

                        {formik.touched.empStatus && formik.errors.empStatus ? <p className="error-text"> {formik.errors.empStatus}</p> : null}

                        {formik.values.empStatus === "Project" &&
                        <>
                        <p className='label-margin'>Account Name </p>
                        <input
                            type='string'
                            value={formik.values.accountName}
                            name='accountName'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                      
                        {formik.touched.accountName && formik.errors.accountName ? <p className="error-text"> {formik.errors.accountName}</p> : null}
                        </>
                        }


                        <p className='label-margin'>Wipro Email Id </p>
                        <input
                            type='email'
                            value={formik.values.emailId}
                            name='emailId'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.emailId && formik.errors.emailId ? <p className="error-text"> {formik.errors.emailId}</p> : null}

                        <p className='label-margin'>  {formik.values.empStatus === "Project" ? "Manager Email Id" : "HR Email Id" } </p>
                        <input
                            type='email'
                            value={formik.values.managerEmailId}
                            name='managerEmailId'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.managerEmailId && formik.errors.managerEmailId ? <p className="error-text"> {formik.errors.managerEmailId}</p> : null}

                    </Container>

                </Col>

                <Row>
                    <Col lg={7} md={7} sm={12}> </Col>
                    <Col lg={3} md={3} sm={12}>
                        <Button
                            variant='secondary'
                            onClick={formik.handleSubmit}
                            className='mx-2'
                        >
                            Register
                        </Button>

                    </Col>
                    <Col lg={2} md={2} sm={12}> </Col>
                </Row>


            </Row>



        </Container>
    )
}

export default RegisterMeeting