import React from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import './MeetingCards.css'
import { Link, useNavigate } from 'react-router-dom'
import { Auth } from './Context/AuthContext'
import { useState } from 'react'
import { ColorRing } from 'react-loader-spinner'

const MeetingCards = ({ meeting, updateDelete , completed }) => {

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


  const { token } = Auth()


  const [show, setShow] = useState(false);
  

  const [isLoading,setIsLoading] = useState(false)

  const navigate = useNavigate()

  const handleDelete = async (meetingId) => {

    if (window.confirm("Are you sure you want to delete the meeting?")) {

      updateDelete(meetingId)

      const deleteRequest = await fetch(`http://localhost:5000/api/teacher/courseMeetings/${meetingId}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } })

      const response = await deleteRequest.json()

    }
  }

  const handleComplete =async () => {

    setShow(false)

    navigate(`/api/teacher/courses/upcomingMeetings/status/${id}`)
  

  }

  const handleClose = () => setShow(false)

  return (

    <>
    {isLoading ?
       <ColorRing
       visible={true}
       height="80"
       width="80"
       ariaLabel="blocks-loading"
       wrapperStyle={{}}
       wrapperClass="blocks-wrapper"
       colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
     />

: 

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
          {completed ?
            <Col lg={4} md={4} sm={12} className='d-flex justify-content-around align-items-center p-3'>

            <Button
              variant="secondary"
              disabled = {true}
            >
              Training Completed 
            </Button>

           
          </Col>
          : 
          <Col lg={4} md={4} sm={12} className='d-flex justify-content-around align-items-center p-3'>

            <Button
              variant="danger"
              as={Link}
              to={`editMeeting/${id}`}
            >
              Edit
            </Button>

            <Button
              variant="danger"
              onClick={() => handleDelete(id)}> Delete </Button>

            <Button
              variant="danger"
              onClick={() => setShow(true)}
            > Mark it as complete </Button>
          </Col>
}
          <Col lg={2} md={2} sm={0}> </Col>

        </Row>

      </Container>

      
    }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Confirmation </Modal.Title>
        </Modal.Header>
        <Modal.Body>This will trigger an email to your manager to notify that you have completed the training. Are you sure you want to continue?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary" onClick={handleComplete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default MeetingCards