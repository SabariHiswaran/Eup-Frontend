import { method } from 'lodash'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button, Container } from 'react-bootstrap'
import { ColorRing } from 'react-loader-spinner'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { Auth } from '../Context/AuthContext'


const MeetingFeedback = () => {


  const {id,meetingId,feedbackNumber} = useParams()

  const [isFeedbackProvided,setIsFeedbackProvided] = useState(null)

  const {token} = Auth()

  useEffect(() => {

      sendFeedback()

  },[])

  const sendFeedback = async () => {

    setIsFeedbackProvided(true)

    const feedbackData = await fetch(`http://localhost:5000/api/student/courses/feedback/${id}/${meetingId}/${feedbackNumber}`, 
                                  {method : "PATCH", 
                                  headers :{
                                    'Authorization' : `Bearer ${token}`
                                  }
                                })

    const response = await feedbackData.json()

    setIsFeedbackProvided(false)

  }
  // console.log(meetingId)
  return (

    <Container>
        <h4 className=' px-5 mt-4'>Feedback  : </h4>      
    {isFeedbackProvided 
    ?
      
    <Container className='d-flex flex-column justify-content-center align-items-center p-5'>

        <h3> Please wait while the feedback is being updated....</h3>
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

        <h3> Thanks for Providing the Feedback for your completed training. </h3>

        <Button 
        variant='danger' 
        className='my-3'
        as={Link}
        to="/api/student/courses/"
        > 
        View Other Courses
        </Button>

    </Container>
  
    }
    </Container>
  )
}

export default MeetingFeedback