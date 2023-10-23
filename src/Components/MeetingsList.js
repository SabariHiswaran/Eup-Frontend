import React, { useEffect,useState } from 'react'
import { Container } from 'react-bootstrap'
import MeetingCards from './MeetingCards'
import { ColorRing } from 'react-loader-spinner'
import { Auth } from './Context/AuthContext'

const MeetingsList = () => {

  const [courseMeeting,setCourseMeeting] = useState([])

  const [isLoading,setIsLoading] = useState(null)

  const {token} = Auth()

  useEffect(() => {
      fetchMeetingDetails()
  },[])

  const fetchMeetingDetails = async () => {

    setIsLoading(true)

    const meetingDetails =await fetch("http://localhost:5000/api/teacher/courseMeetings",{ headers :{'Authorization' : `Bearer ${token}`}})

    const responseData = await meetingDetails.json()

    setCourseMeeting(responseData.courseMeetings)

    setIsLoading(false)
  }

  const updateDelete = (deleteMeetingId) => {

    const updatedMeetingList = courseMeeting.filter(meeting => meeting.id !== deleteMeetingId)

    setCourseMeeting(updatedMeetingList)
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

     {
     isLoading === false && courseMeeting.length === 0 ?<Container className='d-flex justify-content-center'>
    
     <h4 className='mx-4 px-5 mt-4'> Currently there is no upcoming meetings for you. </h4>

     </Container> 
     : 
     null 
      }

    </Container>

   
    <Container>

      <Container className='p-5'>
      {courseMeeting?.map((meeting) => {
        return(
          <MeetingCards meeting = {meeting} key={meeting.id} updateDelete={updateDelete}/>
        )
      })}

      </Container>

    </Container>
    </>
  )
}

export default MeetingsList