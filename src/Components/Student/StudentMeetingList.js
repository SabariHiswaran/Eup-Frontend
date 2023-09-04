import React, { useEffect,useState } from 'react'
import { Container } from 'react-bootstrap'
import { ColorRing } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import StudentMeetingCards from './StudentMeetingCards'

const StudentMeetingsList = () => {

  const [courseMeeting,setCourseMeeting] = useState([])

  const [isLoading,setIsLoading] = useState(null)

  const {courseTopic,topic} = useParams()

  useEffect(() => {
      fetchMeetingDetails()
  },[])

  const fetchMeetingDetails = async () => {

    setIsLoading(true)

    const meetingDetails =await fetch(`http://localhost:5000/api/student/courses/${courseTopic}/${topic}/upcomingMeetings`)

    const responseData = await meetingDetails.json()

    setCourseMeeting(responseData.meetings)

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

     {
     isLoading === false && courseMeeting.length === 0 ?<Container className='d-flex justify-content-center'>
    
     <h4 className='mx-4 px-5 mt-4'> Currently there is no upcoming meetings for the selected course and topic. </h4>

     </Container> 
     : 
     null 
      }

    </Container>

   
    <Container>

      <Container className='p-5'>
      {courseMeeting?.map((meeting) => {
        return(
          <StudentMeetingCards meeting = {meeting} key={meeting.id} />
        )
      })}

      </Container>

    </Container>
    </>
  )
}

export default StudentMeetingsList