import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './MeetingCards.css'

const MeetingCards = ({meeting}) => {

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


  return (
    <Container className='p-3 border-bottom border-dark my-2 '>

        <Row>

                <Col lg={2} md={2} sm={0}> </Col>

                <Col lg={4} md={4} sm={12}>
                    
                    <h5> {topic}  ({courseTopic})  </h5>
                    <p className='m-0'> <span className="meetingDetailsHeading"> Date </span>- {startDate.split("T")[0]} to {endDate.split("T")[0]} </p>
                    <p className='m-0'> <span className="meetingDetailsHeading">Time</span> - {startTime} - {endTime} </p>
                    <p className='m-0'> <span className="meetingDetailsHeading">Participants Limit </span>- {membersLimit} </p>
                    <p className='m-0'> <span className="meetingDetailsHeading">Pre-requistees required </span>- {knowledgeRequired} </p>
                    <p className='m-0'> {name} | {designation} | {experience} years  </p>
                    
                </Col>

                <Col lg={4} md={4} sm={12} className='d-flex justify-content-around align-items-center p-3'> 
                    
                    <Button variant="danger"> Edit </Button>

                    <Button variant="danger"> Delete </Button>
                </Col>

                <Col lg={2} md={2} sm={0}> </Col>

        </Row>

   </Container>
  )
}

export default MeetingCards