import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {  useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup"
import moment from 'moment/moment'
import './TeacherMeetingForm.css'
import Prompt from './Prompt'
import { useNavigate } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner'

const TeacherMeetingForm = () => {

  const { courseTopic, topic } = useParams()

  const navigate = useNavigate()

  const [isSubmitting,setIsSubmitting] = useState(false)

  const [displayForm,setDisplayForm] = useState(true)

  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  let minutes = today.getMinutes();
  let hour = today.getHours();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  if (hour < 10) hour = '0' + hour
  if (minutes < 10) minutes = '0' + minutes

  const currentDate = yyyy + '-' + mm + '-' + dd;

  const currentTime = hour + ':' + minutes

  const formik = useFormik({
    initialValues: {
      courseTopic: courseTopic,
      topic: topic,
      membersLimit: "",   //convert to number
      startDate: currentDate,
      endDate: currentDate,
      startTime: currentTime,
      endTime: currentTime,
      totalDays: "",        //convert to number
      name: "",
      designation: "",
      experience: "",         //convert to number
      knowledgeRequired: ""
    },
    validationSchema: Yup.object({
      courseTopic: Yup.string().required("Course Topic is required"),
      topic: Yup.string().required("Sub Topic is required"),
      membersLimit: Yup.number().required("Participants Limit is required").max(100, "Participants limit should not exceed 100"),
      startDate: Yup.date().required("Meeting start Date is required"),
      endDate: Yup.date().required("Meeting end Date is required").min(Yup.ref('startDate'), 'End date cannot be earlier than start date'),
      startTime: Yup.string().required("start time is required"),
      endTime: Yup
        .string()
        .required("Meeting End time is required")
        .test("is-greater", "Meeting End time should be greater than start Time", function(value) {
          const { startTime } = this.parent;
          return moment(value, "HH:mm").isSameOrAfter(moment(startTime, "HH:mm"));
        }),
      totalDays: Yup.number().required("Total number of training Days is required").max(7, "Training Days should not exceed 7"),
      name: Yup.string().required("Your name is required"),
      designation: Yup.string().required("Your designation is required"),
      experience: Yup.number().required("Your total number of years is required"),
      knowledgeRequired: Yup.string().required("Pre-requistees skill is required")

    }),
    onSubmit:async (values,{resetForm}) => {

      setDisplayForm(false)

      setIsSubmitting(true)

      const createMeeting =await  fetch("http://localhost:5000/api/teacher/courses/createMeeting", {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body : JSON.stringify(values)
        })
      
      const responseFromServer = await createMeeting.json()

      resetForm()

      setIsSubmitting(false)

      console.log(responseFromServer)
      
    }
  })

  return (
    <>

    <Prompt when={!!formik.dirty} message="You may lose your unsaved data, Are you sure you want to leave this page?" />

    <Container>
      <h4 className='mx-4 px-5 mt-4'> Schedule the Meeting : </h4>


      <p className='mx-4 px-5'> Fill the meeting details in below form and schedule the meeting.</p>
    
      {displayForm &&
      <>
      <Container>

        <Row>



          <Col lg={4} md={4} sm={0} className='d-flex flex-column py-3 px-5'>

            <Container>
              <p className='label-margin'> Selected Course </p>
              <input
                type='text'
                value={formik.values.courseTopic}
                disabled={true}
                name='courseTopic'
              />
              {formik.touched.courseTopic && formik.errors.courseTopic ? <p className="error-text"> {formik.errors.courseTopic}</p> : null}


              <p className='label-margin'> Selected Sub Topic </p>
              <input
                type='text'
                value={formik.values.topic}
                disabled={true}
                name='topic'
              />
              {formik.touched.topic && formik.errors.topic ? <p className="error-text"> {formik.errors.topic}</p> : null}


              <p className='label-margin'> Meeting Start Date </p>
              <input
                type='date'
                value={formik.values.startDate}
                name='startDate'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.startDate && formik.errors.startDate ? <p className="error-text"> {formik.errors.startDate}</p> : null}


              <p className='label-margin'> Meeting End Date </p>
              <input
                type='date'
                value={formik.values.endDate}
                name='endDate'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.endDate && formik.errors.endDate ? <p className="error-text"> {formik.errors.endDate}</p> : null}

            </Container>
          </Col>

          <Col lg={4} md={4} sm={0} className='d-flex flex-column py-3 px-5'>

            <Container>

              <p className='label-margin'> Meeting Start Time </p>
              <input
                type='time'
                value={formik.values.startTime}
                name='startTime'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.startTime && formik.errors.startTime ? <p className="error-text"> {formik.errors.startTime}</p> : null}

              <p className='label-margin'> Meeting End Time </p>
              <input
                type='time'
                value={formik.values.endTime}
                name='endTime'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.endTime && formik.errors.endTime ? <p className="error-text"> {formik.errors.endTime}</p> : null}

              <p className='label-margin'>  Total No.of.Days </p>
              <input
                type='number'
                value={formik.values.totalDays}
                name='totalDays'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.totalDays && formik.errors.totalDays ? <p className="error-text"> {formik.errors.totalDays}</p> : null}

              <p className='label-margin'> Participants Limit </p>
              <input
                type='number'
                value={formik.values.membersLimit}
                name='membersLimit'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.membersLimit && formik.errors.membersLimit ? <p className="error-text"> {formik.errors.membersLimit}</p> : null}


            </Container>
          </Col>


          <Col lg={4} md={4} sm={0} className='d-flex flex-column py-3 px-5'>

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

              <p className='label-margin'> Pre-requisites required </p>

              <textarea
                rows='1'
                cols='30'
                value={formik.values.knowledgeRequired}
                name='knowledgeRequired'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.knowledgeRequired && formik.errors.knowledgeRequired ? <p className="error-text"> {formik.errors.knowledgeRequired}</p> : null}

            </Container>

          </Col>

        </Row>


      </Container>

      <Container>
        <Row>
          <Col lg={5} md={5} sm={0} > </Col>
            
         

          <Col lg={3} md={3} sm={12} className=' py-3 px-5'>

            <Button 
            variant='secondary' 
            onClick={formik.handleSubmit} 
            className='mx-2'
            > 
            Schedule 
            </Button>

            <Button 
            variant='secondary'
            onClick={() => navigate(-1)}
            >  
            Go Back 
            </Button>

          </Col>

          <Col lg={5} md={5} sm={0} > </Col>

        </Row>

      </Container>
      </>
      }
    </Container>

    {isSubmitting ? 
    
    !displayForm &&
      
    <Container className='d-flex flex-column justify-content-center align-items-center p-5'>

        <h3> Please wait while Meeting Details are being saved....</h3>

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

    !displayForm &&

    <Container className='d-flex flex-column justify-content-center align-items-center p-5'>

        <h3> Your meeting details has been successfully posted. </h3>

        <Button variant='danger' className='my-3'> View Upcoming Meetings </Button>

    </Container>
  
    }
    </>
  )
}

export default TeacherMeetingForm