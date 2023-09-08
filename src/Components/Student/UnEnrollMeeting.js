import { method } from 'lodash'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { ColorRing } from 'react-loader-spinner'
import { Link, useParams, useSearchParams } from 'react-router-dom'


const UnEnrollMeeting = () => {


  const {id,meetingId} = useParams()

  const [isDeleted,setIsDeleted] = useState(null)

  useEffect(() => {

      deleteStudent()

  },[])

  const deleteStudent = async () => {

    setIsDeleted(true)

    const deleteData = await fetch(`http://localhost:5000/api/student/courses/unenroll/${id}/${meetingId}`, {method : "DELETE"})

    const response = await deleteData.json()

    setIsDeleted(false)

  }
  console.log(meetingId)
  return (

    <Container>
        <h4 className=' px-5 mt-4'> Enrolled Meetings : </h4>      
    {isDeleted 
    ?
      
    <Container className='d-flex flex-column justify-content-center align-items-center p-5'>

        <h3> Please wait while you are getting unregistered from the meeting....</h3>
        {/* react loading spinner */}
        <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />

    </Container>
    
    : 

    <Container className='d-flex flex-column justify-content-center align-items-center p-5'>

        <h3> Your are unrolled from the meeting. Notification will be sent to your supervisor. </h3>

        <Button 
        variant='danger' 
        className='my-3'
        as={Link}
        to="/api/student/courses/enrolledMeetings"
        > 
        View Registered Meetings 
        </Button>

    </Container>
  
    }
    </Container>
  )
}

export default UnEnrollMeeting