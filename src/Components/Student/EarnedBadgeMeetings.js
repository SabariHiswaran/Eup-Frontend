import React, { useEffect, useState } from 'react'
import { Badge, Button, Card, Container } from 'react-bootstrap'

import "./EnrolledMeetings.css"
import MeetingShimmer from './MeetingShimmer'
import { Auth } from '../Context/AuthContext'

const EarnedBadgeMeetings = ({ meeting }) => {

  const [isLoading,setIsLoading] = useState(null)

  const [courseDetails,setCourseDetails] = useState({})



  const {token} = Auth()

  const {
    id,
    name,
    designation,
    experience,
    empStatus,
    emailId,
    supervisorId,
    accountName,
    courseTopic,
    topic,
    meetingId,
    badge
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

    const courseDetails = await fetch(`http://localhost:5000/api/student/courses/${courseTopic}/${topic}/register/${meetingId}`,{ headers :{'Authorization' : `Bearer ${token}`}})

    const responseData = await courseDetails.json()
console.log(responseData)
    setCourseDetails(responseData.meeting)

    setIsLoading(false)

  }



  return (
    <>
       <Card style={{ width: '23rem', marginLeft : "30px" }} >
        <h5>
       <Badge bg="success">{badge}</Badge>
       </h5>
    {isLoading ?
      <Container className='d-flex justify-content-center'>
        
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
        
      </Card.Body>
      
      } 
    </Card>

  
    </>
  )
}

export default EarnedBadgeMeetings