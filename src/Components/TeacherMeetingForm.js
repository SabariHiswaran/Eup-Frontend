import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup"
import moment from "moment"
import './TeacherMeetingForm.css'

const TeacherMeetingForm = () => {

  const { courseTopic, topic } = useParams()

  const currentDate = new Date()
  const currentTime = currentDate.getTime()

  const formik = useFormik({
    initialValues: {
      courseTopic: courseTopic,
      topic: topic,
      membersLimit: 0,
      startDate: currentDate,
      endDate: currentDate,
      startTime: currentTime,
      endTime: currentTime,
      totalDays: 0,
      name: "",
      designation: "",
      experience: 0,
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
        .test("is-greater", "Meeting End time should be greater", function (value) {
          const { startTime } = this.parent;
          return moment(value, "HH:mm").isSameOrAfter(moment(startTime, "HH:mm"));
        }),
      totalDays: Yup.number().required("Total number of training Days is required").max(7, "Training Days should not exceed 7"),
      name: Yup.string().required("Your name is required"),
      designation: Yup.string().required("Your designation is required"),
      experience: Yup.number().required("Your total number of years is required"),
      knowledgeRequired: Yup.string().required("Pre-requistees skill is required")

    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <Container>
      <h4 className='mx-4 px-5 mt-4'> Schedule the Meeting : </h4>


      <p className='mx-4 px-5'> Fill the meeting details in below form and schedule the meeting.</p>

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
               {formik.touched.courseTopic && formik.errors.courseTopic ? <p className="error-text"> {formik.errors.courseTopic}</p> : null }


              <p className='label-margin'> Selected Sub Topic </p>
              <input
                type='text'
                value={formik.values.topic}
                disabled={true}
                name='topic'
              />
              {formik.touched.topic && formik.errors.topic ? <p className="error-text"> {formik.errors.topic}</p> : null }


              <p className='label-margin'> Meeting Start Date </p>
              <input
                type='date'
                value={formik.values.startDate}
                name='startDate'
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />
              {formik.touched.startDate && formik.errors.startDate ? <p className="error-text"> {formik.errors.startDate}</p> : null }


              <p className='label-margin'> Meeting End Date </p>
              <input
                type='date'
                value={formik.values.endDate}
                name='endDate'
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />
               {formik.touched.endDate && formik.errors.endDate ? <p className="error-text"> {formik.errors.endDate}</p> : null }

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
                onBlur={formik.onBlur}
              />
               {formik.touched.startTime && formik.errors.startTime ? <p className="error-text"> {formik.errors.startTime}</p> : null }

              <p className='label-margin'> Meeting End Time </p>
              <input
                type='time'
                value={formik.values.endTime}
                name='endTime'
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />
               {formik.touched.endTime && formik.errors.endTime ? <p className="error-text"> {formik.errors.endTime}</p> : null }

              <p className='label-margin'>  Total No.of.Days </p>
              <input
                type='number'
                value={formik.values.totalDays}
                name='totalDays'
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />
               {formik.touched.totalDays && formik.errors.totalDays ? <p className="error-text"> {formik.errors.totalDays}</p> : null }

              <p className='label-margin'> Participants Limit </p>
              <input
                type='number'
                value={formik.values.membersLimit}
                name='membersLimit'
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />
               {formik.touched.membersLimit && formik.errors.membersLimit ? <p className="error-text"> {formik.errors.membersLimit}</p> : null }


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
                onBlur={formik.onBlur}
              />
               {formik.touched.name && formik.errors.name ? <p className="error-text"> {formik.errors.name}</p> : null }

              <p className='label-margin'> Designation</p>
              <input
                type='string'
                value={formik.values.designation}
                name='designation'
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />
               {formik.touched.designation && formik.errors.designation ? <p className="error-text"> {formik.errors.designation}</p> : null }

              <p className='label-margin'>  Years of Experience </p>
              <input
                type='number'
                value={formik.values.experience}
                name='experience'
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />
               {formik.touched.experience && formik.errors.experience ? <p className="error-text"> {formik.errors.experience}</p> : null }

              <p className='label-margin'> Pre-requisites required </p>

              <textarea
                rows='1'
                cols='30'
                value={formik.values.knowledgeRequired}
                name='knowledgeRequired'
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />
               {formik.touched.knowledgeRequired && formik.errors.knowledgeRequired ? <p className="error-text"> {formik.errors.knowledgeRequired}</p> : null }

            </Container>

          </Col>

        </Row>


      </Container>

      <Container>
        <Row>
          <Col lg={5} md={5} sm={0} > </Col>
          <Col lg={1} md={1} sm={12} className=' py-3 px-5' >
            <Button variant='secondary' onClick={formik.handleSubmit} > Schedule </Button>
          </Col>

          <Col lg={2} md={2} sm={12} className=' py-3 px-5'>
            <Button variant='secondary'>  Go Back </Button>
          </Col>
          <Col lg={5} md={5} sm={0} > </Col>
        </Row>

      </Container>

    </Container>
  )
}

export default TeacherMeetingForm