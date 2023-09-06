import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { ColorRing } from 'react-loader-spinner'
import EnrolledMeetings from './EnrolledMeetings'

const EnrolledMeetingList = () => {

    const [meetings, setMeetings] = useState([])

    const [isLoading, setIsLoading] = useState(null)

    useEffect(() => {
        fetchEnrolledMeetings()
    }, [])


    const fetchEnrolledMeetings = async () => {

        setIsLoading(true)

        const meetingList = await fetch("http://localhost:5000/api/student/courses/enrolledMeetings")

        const response = await meetingList.json()

        setMeetings(response.enrolledMeetings)

        setIsLoading(false)
    }
    console.log(meetings)

    return (
        <Container>
            <h4 className=' px-5 mt-4'> Enrolled Meetings : </h4>
            {isLoading ?
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
                null}

            {
                isLoading === false && meetings.length === 0 ?
                    <Container className='d-flex justify-content-center'>

                        <h4 className='mx-4 px-5 mt-4'> You have not enrolled to any meetings. </h4>

                    </Container>
                    :
                    null
            }

            {meetings.length > 0 ?
            <Container>

                <Container className='p-5'>
                    {meetings?.map((meeting) => {
                        return (
                            <EnrolledMeetings meeting={meeting} key={meeting.id} />
                        )
                    })}

                </Container>

            </Container>
            : 
            null}

        </Container>
    )
}

export default EnrolledMeetingList