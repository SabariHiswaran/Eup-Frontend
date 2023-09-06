import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'

import "./EnrolledMeetings.css"
import { ColorRing } from 'react-loader-spinner'
import MeetingShimmer from './MeetingShimmer'

const EnrolledMeetings = ({ meeting }) => {

  const [isLoading,setIsLoading] = useState(null)

  const [courseDetails,setCourseDetails] = useState({})

  const {
    name,
    designation,
    experience,
    empStatus,
    emailId,
    supervisorId,
    accountName,
    courseTopic,
    topic,
    meetingId
  } = meeting

  const {

    membersLimit,   
    startDate,
    endDate,
    startTime,
    endTime,
    totalDays,           
    knowledgeRequired
  }  = courseDetails

  const mailId = Object.keys(supervisorId)[0]

  useEffect(() => {

      fetchCourseDetails()

  },[])

  const fetchCourseDetails = async () => {

  
    setIsLoading(true)

    const courseDetails = await fetch(`http://localhost:5000/api/student/courses/${courseTopic}/${topic}/register/${meetingId}`)

    const responseData = await courseDetails.json()

    setCourseDetails(responseData.meeting)

    setIsLoading(false)

  }

  console.log(courseDetails)

  return (
    <>
       <Card style={{ width: '23rem' }}>
    {isLoading ?
      <Container className='d-flex justify-content-center'>
          {/* <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          /> */}
          <MeetingShimmer/>

      </Container>
      :
      <Card.Body>
        <Card.Title>{topic}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{courseTopic}</Card.Subtitle>
        <Card.Text>
        <hr/>
        <p className='m-0'> <span className="meetingDetailsHeading"> Date </span>- {startDate?.split("T")[0]} to {endDate?.split("T")[0]} </p>
        <p className='m-0'> <span className="meetingDetailsHeading">Time</span> - {startTime} - {endTime} </p>
        <p className='m-0'> <span className="meetingDetailsHeading">Participants Limit </span>- {membersLimit} </p>
        <p className='m-0'> <span className="meetingDetailsHeading">Pre-requistees required </span>- {knowledgeRequired} </p>
        <p className='m-0'> {courseDetails.name} | {courseDetails.designation} | {courseDetails.experience} years  </p> 
        <hr/>
          <p  className='statusHeading'> <span className="meetingDetailsHeading">Mail Id: </span>- {emailId} </p>
          <p className='m-0'> <span className="meetingDetailsHeading">Supervisor Id: </span>-{supervisorId[mailId]} </p>
          <p className='m-0'> <span className="meetingDetailsHeading">Account Name :  </span>- {accountName} </p>
          <p className='m-0'> <span className="meetingDetailsHeading">Status :</span> - {empStatus} </p>
          <p className='m-0'> {name} | {designation} | {experience} years  </p>
        </Card.Text>
        <Card.Link href="#">Unregister</Card.Link>
        
      </Card.Body>
      
      } 
    </Card>
    </>
  )
}

export default EnrolledMeetings