import React, { useEffect,useState } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { ColorRing } from 'react-loader-spinner'
import EnrolledMeetingCards from './EnrolledMeetingCards'
import { Auth } from './Context/AuthContext'
import MeetingsBadgePage from './MeetingsBadgePage'

const BadgePage = () => {

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

    setCourseMeeting(responseData.courseMeetings.filter(meeting => meeting.status === "Completed" ))

    setIsLoading(false)
  }
console.log(courseMeeting)
  return(
    <>

    <Container>
     <h4 className='mx-4 px-5 mt-4'> Badges</h4>
     <p className='mx-4 px-5 mt-4'><span style={{fontWeight : "bold"}}> Note :</span> Completed Trainings will be listed below. You can choose upto 5 students in each meeting and
       can award the Badges. Based on the Badges winnercircle points will be awarded as below.</p>
       <span  className='mx-4 px-5 mt-4'> WCP - Winner Circle Points </span>
       <ListGroup className='mx-4 px-5 mt-4'>
      <ListGroup.Item>Iron Badge - 50 WCP </ListGroup.Item>
      <ListGroup.Item>Bronze Badge - 100 WCP </ListGroup.Item>
      <ListGroup.Item>Silver Badge - 200 WCP </ListGroup.Item>
      <ListGroup.Item>Gold Badge - 300 WCP </ListGroup.Item>
      <ListGroup.Item>Diamond Badge - 500 WCP </ListGroup.Item>
    </ListGroup>
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
    
     <h4 className='mx-4 px-5 mt-4'> Currently there is no completed trainings. </h4>

     </Container> 
     : 
     null 
      }

    </Container>

   
    <Container>

      <Container className='p-5'>
      {courseMeeting?.map((meeting) => {
        return(
          <MeetingsBadgePage meeting = {meeting} key={meeting.id} />
        )
      })}

      </Container>

    </Container>
    </>
  )
}

export default BadgePage