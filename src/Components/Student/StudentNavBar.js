import React, { useState } from 'react'

import { Button, Container, Nav } from 'react-bootstrap';

import './StudentNavBar.css'
import { Link } from 'react-router-dom';
import { Auth } from '../Context/AuthContext';
import LogoutModeComponent from '../LogoutModelComponent';

const StudentNavBar = () => {

  const {isLoggedIn, logout} = Auth()

  const [isLogout, setIsLogout] = useState(false)


  const handleLogout = () => {
    setIsLogout(true)
  }

  return (
    <Container className='p-3'>
    <Nav fill variant='tabs' className="justify-content-center" activeKey="/home">

        <Nav.Item>
          <Nav.Link as={Link} to="/api/student">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/api/student/courses">Courses</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/api/student/courses/enrolledMeetings">Registered Meetings</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/api/student/courses/badges">Earned Rewards </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/api/student/courses/feedback">Feedback</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/api/student/courses/profile">Profile</Nav.Link>
        </Nav.Item>

        {
                isLoggedIn && 
                <Button 
                variant='danger'
                onClick={handleLogout}> Logout </Button>
        }

      </Nav>

      
{isLogout ?
  <LogoutModeComponent isLogout = {isLogout} setIsLogout={ setIsLogout} />
: 
null 
}

</Container>
  )
}

export default StudentNavBar