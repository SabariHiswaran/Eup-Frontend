import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const EditMeeting = () => {

    const { meetingId } = useParams()

    const [meetingDetails,setMeetingDetails] = useState([])

    const [isLoading,setIsLoading] = useState(null)

    useEffect(() => {
        fetchMeetingDetails()
    },[])
  
    const fetchMeetingDetails = async () => {
  
      setIsLoading(true)
  
      const meeting =await fetch(`http://localhost:5000/api/teacher/courseMeetings/update/${meetingId}`)
  
      const responseData = await meeting.json()
  
      setMeetingDetails(responseData.courseMeetings)
  
      setIsLoading(false)
    }

  return (
    <Container>
     <h4 className='mx-4 px-5 mt-4'> Edit Meeting</h4>
     </Container>
  )
}

export default EditMeeting