import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Auth } from './Context/AuthContext'
import { Button, Container } from 'react-bootstrap'

import { GiTrophyCup } from "react-icons/gi"

const UpdateMeetingStatus = () => {

    const {id} = useParams()

    const {token} = Auth()

    useEffect(() => {
        updateMeeting()
    },[])


    const updateMeeting =  async () => {

    const MeetingStatus = await fetch(`http://localhost:5000/api/teacher/courseMeetings/updateMeetingStatus/${id}`,{method : 'PATCH', headers: { 'Authorization': `Bearer ${token}`}  })

    const res = await MeetingStatus.json()

    } 

  return (
   <Container className='d-flex flex-column justify-content-center align-items-center p-5'>
      <h1 style={{fontSize : "70px"}}> <GiTrophyCup/></h1> 
      <h4> Congratulation!!! on successfully completing the training</h4>
      <p> Winner Circle points has been awarded to you. You can visit your rewards page for more information.</p>
      <Container className='d-flex justify-content-center p-4'>
            <Button variant='danger' className='mx-5' as={Link} to="/api/teacher/courses/rewards">
                View Rewards 
            </Button>
            <Button variant='danger' className='mx-5' as={Link} to="/api/teacher/courses/upcomingMeetings">
                View Upcoming Meeting List 
            </Button>
      </Container>
    </Container>
  )
}

export default UpdateMeetingStatus