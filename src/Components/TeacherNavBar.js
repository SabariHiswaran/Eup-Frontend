import React from 'react'

import { Nav } from 'react-bootstrap';

import '../Components/TeacherNavBar.css'
import { Link } from 'react-router-dom';

const TeacherNavBar = () => {
  return (
    <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Courses</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Meetings</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Enrolled Members</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">Rewards</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5">Badge</Nav.Link>
        </Nav.Item>
      </Nav>
  )
}

export default TeacherNavBar