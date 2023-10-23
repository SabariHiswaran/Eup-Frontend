import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './StudentMeetingCards.css'
import { Link } from 'react-router-dom'
import { Auth } from '../Context/AuthContext'

const StudentMeetingCards = ({meeting}) => {

  const {
    id,
    courseTopic,
    topic ,
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
  }  = meeting

  const {token} = Auth()
  
  const [ members,setMembers] = useState([])

  const [isLoading,setIsLoading] = useState(false)

  useEffect(() => {
    
    fetchEnrolledMembers()
},[])

  
  
  const fetchEnrolledMembers = async () => {

    setIsLoading(true)
    const members = await fetch(`http://localhost:5000/api/teacher/courses/enrolledMembers/${id}`,{ headers :{'Authorization' : `Bearer ${token}`}})

    const responseData = await members.json()

    setMembers(responseData.members)

    setIsLoading(false)

}

  const checkLimit = members?.length === membersLimit ? "Participant Limit reached" : "Register"

  return (
    <Container className='p-3 border-bottom border-dark my-2 '>

        <Row>

                <Col lg={2} md={2} sm={0}> </Col>

                <Col lg={4} md={4} sm={12}>
                    
                    <h5> {topic}  ({courseTopic})  </h5>
                    <p className='m-0'> <span className="meetingDetailsHeading"> Date </span>- {startDate?.split("T")[0]} to {endDate?.split("T")[0]} </p>
                    <p className='m-0'> <span className="meetingDetailsHeading">Time</span> - {startTime} - {endTime} </p>
                    <p className='m-0'> <span className="meetingDetailsHeading">Participants Limit </span>- {membersLimit} </p>
                    <p className='m-0'> <span className="meetingDetailsHeading">Pre-requistees required </span>- {knowledgeRequired} </p>
                    <p className='m-0'> {name} | {designation} | {experience} years  </p>
                    
                </Col>

                <Col lg={4} md={4} sm={12} className='d-flex justify-content-around align-items-center p-3'> 
                    
                    <Button 
                    variant={checkLimit === "Participant Limit reached" ? "secondary" : "danger"}
                    as={Link}
                    to={`register/${id}`}
                    disabled = {checkLimit === "Participant Limit reached" ? true : false}
                    > 
                    {isLoading ? 
                    "Loading...."
                  : 
                    checkLimit
}
                    </Button>

                   
                </Col>

                <Col lg={2} md={2} sm={0}> </Col>

        </Row>

   </Container>
  )
}

export default StudentMeetingCards