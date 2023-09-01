import React from 'react'

import { Nav } from 'react-bootstrap';

import './StudentNavBar.css'
import { Link } from 'react-router-dom';

const StudentNavBar = () => {
  return (
    <Nav className="justify-content-center" activeKey="/home">

        <Nav.Item>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/api/student/courses">Courses</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} to="/api/student/courses/registeredMeetings">Meetings</Nav.Link>
        </Nav.Item>

      </Nav>
  )
}

export default StudentNavBar