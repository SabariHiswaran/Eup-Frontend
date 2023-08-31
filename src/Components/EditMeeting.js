
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import {  useParams } from 'react-router-dom'
import EditForm from './EditForm'
import { ColorRing } from 'react-loader-spinner'


const EditMeeting = () => {

    const { meetingId } = useParams()

    const [meetingDetails,setMeetingDetails] = useState([])

    const [isLoading,setIsLoading] = useState(true)
    

    useEffect(() => {
        fetchMeetingDetails()
    },[])
  
    const fetchMeetingDetails = async () => {

      const meeting =await fetch(`http://localhost:5000/api/teacher/courseMeetings/${meetingId}`)
  
      const responseData = await meeting.json()
  
      setMeetingDetails(responseData.courseMeetings)
  
      setIsLoading(false)
    }


  return (
    <>
    <Container>

      <h4 className='mx-4 px-5 mt-4'> Edit Meeting : </h4>

      {isLoading 

      ?
      <Container className='d-flex flex-column align-items-center'>
      <h4  className='mx-4 px-5 mt-4'> Edit Form is being Loaded...</h4> 
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
        <EditForm meetingDetails = {meetingDetails}/>
    }
    </Container>
    </>
  )
}

export default EditMeeting