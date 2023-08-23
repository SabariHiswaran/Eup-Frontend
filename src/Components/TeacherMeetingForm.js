import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from "yup"
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
      name : "",
      designation : "",
      experience : 0,
      knowledgeRequired : "" 
    },
    validationSchema: Yup.object({

    }),
    onSubmit: () => {

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

              <p className='label-margin'> Selected Sub Topic </p>
              <input
                type='text'
                value={formik.values.topic}
                disabled={true}
                name='topic'
              />

              <p className='label-margin'> Meeting Start Date </p>
              <input
                type='date'
                value={formik.values.startDate}
                name='startDate'
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />

              <p className='label-margin'> Meeting End Date </p>
              <input
                type='date'
                value={formik.values.endDate}
                name='endDate'
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />


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

              <p className='label-margin'> Meeting End Time </p>
              <input
                type='time'
                value={formik.values.endTime}
                name='endTime'
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />

              <p className='label-margin'>  Total No.of.Days </p>
              <input
                type='number'
                value={formik.values.totalDays}
                name='totalDays'
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />

              <p className='label-margin'> Participants Limit </p>
              <input
                type='number'
                value={formik.values.membersLimit}
                name='membersLimit'
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />


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

              <p className='label-margin'> Designation</p>
              <input
                type='string'
                value={formik.values.designation}
                name='designation'
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />

              <p className='label-margin'>  Years of Experience </p>
              <input
                type='number'
                value={formik.values.experience}
                name='experience'
                onChange={formik.handleChange}
                onBlur={formik.onBlur}
              />

              <p className='label-margin'> Pre-requisites required </p>

              <textarea 
              rows='1'
              cols='30'
              value={formik.values.knowledgeRequired}
              name='knowledgeRequired'
              onChange={formik.handleChange}
              onBlur={formik.onBlur}
              />

            </Container>

          </Col>

        </Row>


      </Container>

      <Container>
              <Row>

                <Col lg={6} md={6} sm={12} className='d-flex justify-content-end py-3 px-5' > 
                <Button variant='secondary'> Schedule </Button>
                </Col>
            
              <Col lg={6} md={6} sm={12} className='d-flex justify-content-start py-3 px-5'>
              <Button variant='secondary'>  Go Back </Button>
              </Col>

              </Row>

      </Container>

    </Container>
  )
}

export default TeacherMeetingForm