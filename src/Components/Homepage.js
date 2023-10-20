import React from 'react'
import { Accordion, Button, Card, Container, ListGroup } from 'react-bootstrap'
import trainer from '../Utils/Images/trainer.jpg'
import { Link } from 'react-router-dom'
import "../Components/Homepage.css"
import { Role } from './Context/RoleContext'
import { useEffect } from 'react'
import { useState } from 'react'
import { Auth } from './Context/AuthContext'

const Homepage = () => {

  const { teacherRole } = Role()

  const [courseMeeting,setCourseMeeting] = useState([])

  const {token} = Auth()
  
  useEffect(() => {
    fetchMeetingDetails()
},[])

const fetchMeetingDetails = async () => {

  const meetingDetails =await fetch("http://localhost:5000/api/teacher/courseMeetings",{ headers :{'Authorization' : `Bearer ${token}`}})

  const responseData = await meetingDetails.json()
  console.log(responseData)
  setCourseMeeting(responseData.courseMeetings)

}

  return (
    <>
    <Container className=' d-flex justify-content-center' >

      <Card style={{ width: '80%' }} className='p-5 mt-5  d-flex flex-row align-items-center card-border'>
        <Container>
          <Card.Body>
            <Card.Text>
              Would you like to share your knowledge and experience to your colleagues throughout the wipro ?
            </Card.Text>
            <Button variant="danger" as={Link} to="/api/teacher/courses">Explore</Button>
          </Card.Body>
        </Container>
        <Container>
          <Card.Img style={{ width: '23rem' }} variant="top" src={trainer} />
        </Container>
      </Card>

    </Container>

    <Container className='d-flex flex-column  p-5 align-items-center'>

          <h5> You are now viewing <mark>{teacherRole ? "Trainer" : "Trainee"} </mark> dashboard </h5>

          <Card body className="card-border" style={{marginTop : "30px"}}> <span style={{fontWeight : "bold"}}>Note : </span> You can switch the dashboards using the radio button at the top of the page.</Card>

    </Container>

    <Container  className=' d-flex justify-content-center'>
    <Card style={{ width: '80%' }}>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            Those who know, do. Those who understand, teach.{' '}
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">Aristotle</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </Container>

    <Container className='mt-5 d-flex justify-content-center'>

    <Card style={{ width: '80%' }} className='d-flex flex-row justify-content-between card-border'>
    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item className='d-flex justify-content-center'>Overall Meetings Count </ListGroup.Item>
        <ListGroup.Item className='d-flex justify-content-center'>{courseMeeting?.length === 0 ? "Loading..." : courseMeeting?.length}</ListGroup.Item>
      </ListGroup>
    </Card>

    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item className='d-flex justify-content-center'> Upcoming Meetings Count </ListGroup.Item>
        <ListGroup.Item className='d-flex justify-content-center'>{courseMeeting?.length === 0 ? "Loading..." : courseMeeting?.length}</ListGroup.Item>
      </ListGroup>
    </Card>

    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item className='d-flex justify-content-center'>Completed Meetings Count </ListGroup.Item>
        <ListGroup.Item className='d-flex justify-content-center'> 0 </ListGroup.Item>
      </ListGroup>
    </Card>
    </Card>
    </Container>

    <Container className='mt-5 d-flex flex-column align-items-center'>

    <h4 className='p-3'> FAQ Section </h4>

    <Accordion style={{width :"80%"}}>

      <Accordion.Item eventKey="0">
        <Accordion.Header>The Course that I am looking to teach is not Present. What to Do ? </Accordion.Header>
        <Accordion.Body>
         Don't worry, we have a dedicated support team who will help on adding the course Topic and subtopic. Please write an email 
         to "EUPSupport@wipro.com" with the below required information which is 
         Course Topic and SubTopic 
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Can we delete the scheduled meeting, if we have a valuable reason ? </Accordion.Header>
        <Accordion.Body>
          Yes, you can delete the meeting under Meetings tab usng delete button. But, please note that an email will be triggered to your respective supervisor mail id. You can explain the reason to them.
        </Accordion.Body>
      </Accordion.Item>

      
      <Accordion.Item eventKey="2">
        <Accordion.Header>I have entered the wrong information while creating the meeting, Can I modify it?   </Accordion.Header>
        <Accordion.Body>
        You can modify the information under Meetings tab using Edit button. This will automatically reflect at trainee dashboard as well while they are viewing your meeting details. 
        </Accordion.Body>
      </Accordion.Item>


    </Accordion>

    </Container>

    <Container className='mt-5 p-5 d-flex justify-content-center'>

        <p>© 2023 Copyright: Developed with 💌 by Sabari </p>

    </Container>

    </>
  )
}

export default Homepage