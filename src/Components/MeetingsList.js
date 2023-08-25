import React, { useEffect,useState } from 'react'
import { Container } from 'react-bootstrap'
import MeetingCards from './MeetingCards'

const MeetingsList = () => {

  const [courseMeeting,setCourseMeeting] = useState([])

  useEffect(() => {
      fetchMeetingDetails()
  },[])


  console.log(courseMeeting)

  const fetchMeetingDetails = async () => {

    const meetingDetails =await fetch("http://localhost:5000/api/teacher/courseMeetings")

    const responseData = await meetingDetails.json()

    setCourseMeeting(responseData.courseMeetings)
  }
  
  return (
    <Container>

      <h4 className='mx-4 px-5 mt-4'> Upcoming Meetings List </h4>

      <Container className='p-5'>
      {courseMeeting.map((meeting) => {
        return(
          <MeetingCards meeting = {meeting} key={meeting.id}/>
        )
      })}

      </Container>

    </Container>
  )
}

export default MeetingsList