import React from 'react'
import { Accordion, Button, Card, Container, ListGroup } from 'react-bootstrap'
import trainee from "../../Utils/Images/trainee.jpg"
import { Link } from 'react-router-dom'
import "./StudentHomepage.css"
import { Role } from '../Context/RoleContext'
import { useEffect } from 'react'
import { useState } from 'react'
import { Auth } from '../Context/AuthContext'

const Homepage = () => {

  const { teacherRole } = Role()

  
  const [meetings, setMeetings] = useState([])

  const [isLoading, setIsLoading] = useState(false)

  const {token} = Auth()
  
  useEffect(() => {
      fetchEnrolledMeetings()
  }, [])


  const fetchEnrolledMeetings = async () => {


      const meetingList = await fetch("http://localhost:5000/api/student/courses/enrolledMeetings",{ headers :{'Authorization' : `Bearer ${token}`}})

      const response = await meetingList.json()

      setMeetings(response.enrolledMeetings)

      
    setIsLoading(true)

  }

  return (
    <>
    <Container className=' d-flex justify-content-center' >

      <Card style={{ width: '80%' }} className='p-5 mt-5  d-flex flex-row align-items-center card-border'>

      <Container>
          <Card.Img style={{ width: '25rem' }} variant="top" src={trainee} />
        </Container>

        <Container>
          <Card.Body>
            <Card.Text>
              Upskilling is one of the most important part of the Career.Start Your Journey now.
            </Card.Text>
            <Button variant="danger" as={Link} to="/api/student/courses">Explore</Button>
          </Card.Body>
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
            The Beautiful Things About Learning is that No One Can Take It Away From You.{' '}
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">B.B. King</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </Container>

    <Container className='mt-5 d-flex justify-content-center'>

    <Card style={{ width: '80%' }} className='d-flex flex-row justify-content-between card-border'>
    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item className='d-flex justify-content-center'>Overall Registered Meetings Count </ListGroup.Item>
        <ListGroup.Item className='d-flex justify-content-center'>{isLoading === false ? "Loading..." : meetings.length}</ListGroup.Item>
      </ListGroup>
    </Card>

    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item className='d-flex justify-content-center'> Upcoming Meetings Count </ListGroup.Item>
        <ListGroup.Item className='d-flex justify-content-center'>{ isLoading === false ? "Loading..." : meetings.length}</ListGroup.Item>
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
        <Accordion.Header>How to register the meeting ? </Accordion.Header>
        <Accordion.Body>
         Click on Courses tab and select topic and subtopic. Post that it will display
          if there is any upcoming meetings scheduled or not. Click on Register Button and enter your details and submit the form.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Is it possible to unenroll from the meeting? If i have the valuable reason ?</Accordion.Header>
        <Accordion.Body>
          Yes, you can enroll the meeting under Registered Meetings tab usng unregister button. But, please note that an email will be triggered to your respective supervisor mail id. You can explain the reason to them.
        </Accordion.Body>
      </Accordion.Item>

      
      <Accordion.Item eventKey="2">
        <Accordion.Header>How will I get an meeting invite Link ? </Accordion.Header>
        <Accordion.Body>
      One day before the training, trainer will generate the meeting invite and send it to all of the enrolled members via wipro email which you have used
       while entering the registered meeting form. To change / update any information please write an email to "EUPsupport@wipro.com"
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