import React, { useEffect, useState } from 'react'
import { Button, Card, Container } from 'react-bootstrap'

import "./EnrolledMeetings.css"
import { ColorRing } from 'react-loader-spinner'
import MeetingShimmer from './MeetingShimmer'
import { Link } from 'react-router-dom'
import ModeComponent from './ModeComponent'
import { Auth } from '../Context/AuthContext'
import FeedbackModeComponent from './FeedbackModelComponent'

const StudentFeedbackMeetingPage = ({ meeting }) => {

  const [isLoading,setIsLoading] = useState(null)

  const [courseDetails,setCourseDetails] = useState({})

    const [provideFeedback,setProvideFeedback] = useState(false)


  const {token} = Auth()

  const {
    id,
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
    knowledgeRequired,
    status,
    feedback
  }  = courseDetails
  const {userId} = Auth()

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


  console.log(courseDetails)

  const hanldeUnRegister = () => {
    setProvideFeedback(true)
  }

  const matchingUserFeedback = feedback?.filter(feedback => {
    console.log(feedback.userId, userId)


    return     feedback.userId === userId
  })
console.log("martching" , matchingUserFeedback)
  return (
    <>
       <Card style={{ width: '23rem', marginLeft : "30px" }}>
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
        
        </Card.Text>

        {matchingUserFeedback?.length === 0 ?
        <Button variant = {courseDetails.status !== "Completed" ? "secondary" : "danger"} onClick={ hanldeUnRegister } disabled =  {courseDetails.status !== "Completed" ? true : false}> {courseDetails.status !== "Completed" ? "Training Not yet Completed" : "Provide Feedback"} </Button>
        : 
        <Button variant='secondary' disabled= {true} > Feedback Provided Already </Button>         

}
      </Card.Body>
      
      } 
    </Card>

    {
      provideFeedback 
      ? 
      <FeedbackModeComponent id={userId} meetingId={meetingId} provideFeedback = {provideFeedback} setProvideFeedback = {setProvideFeedback} />
      :
      null
    }
    </>
  )
}

export default StudentFeedbackMeetingPage