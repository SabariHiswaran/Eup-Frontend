import React, { useEffect,useState } from 'react'
import { Container } from 'react-bootstrap'
import MeetingCards from './MeetingCards'
import { ColorRing } from 'react-loader-spinner'

const MeetingsList = () => {

  const [courseMeeting,setCourseMeeting] = useState([])

  const [isLoading,setIsLoading] = useState(false)

  useEffect(() => {
      fetchMeetingDetails()
  },[])


  console.log(courseMeeting)

  const fetchMeetingDetails = async () => {

    setIsLoading(true)

    const meetingDetails =await fetch("http://localhost:5000/api/teacher/courseMeetings")

    const responseData = await meetingDetails.json()

    setCourseMeeting(responseData.courseMeetings)

    setIsLoading(false)
  }

  return(
    <>

    <Container>
     <h4 className='mx-4 px-5 mt-4'> Upcoming Meetings List </h4>
    { isLoading ? 
    <Container className='d-flex justify-content-center'>
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
     null }
    </Container>

    <Container>

      <Container className='p-5'>
      {courseMeeting?.map((meeting) => {
        return(
          <MeetingCards meeting = {meeting} key={meeting.id}/>
        )
      })}

      </Container>

    </Container>
    </>
  )
}

export default MeetingsList