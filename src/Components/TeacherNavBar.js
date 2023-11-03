import React, { useState } from 'react'

import { Button, Container, Nav } from 'react-bootstrap';

import '../Components/TeacherNavBar.css'
import { Link, useNavigate } from 'react-router-dom';
import { Auth } from './Context/AuthContext';
import LogoutModeComponent from './LogoutModelComponent';
import { Role } from './Context/RoleContext';

const TeacherNavBar = () => {

  const {isLoggedIn, logout} = Auth()

  const [isLogout, setIsLogout] = useState(false)

  const {setTeacherRole} = Role()

  const navigate = useNavigate()

  const handleLogout = () => {
    setIsLogout(true)
    setTeacherRole(true)
  }
  return (
    <Container className='p-3'>
    <Nav fill variant='tabs' className="justify-content-center" activeKey="/home">

        <Nav.Item>
          <Nav.Link as={Link} to="/api/teacher">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/api/teacher/courses">Courses</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/api/teacher/courses/upcomingMeetings">Meetings</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/api/teacher/courses/enrolledMembers">Enrolled Members</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/api/teacher/courses/rewards">Rewards</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/api/teacher/courses/badges">Badge</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/api/teacher/courses/profile">Profile</Nav.Link>
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

export default TeacherNavBar