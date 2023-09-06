import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { ColorRing } from 'react-loader-spinner'
import { useParams } from 'react-router-dom'
import RegisterMeeting from './RegisterMeeting'

const SelectedMeeting = () => {

    const { courseTopic, topic, meetingId } = useParams()

    const [isLoading, setIsLoading] = useState(null)

    const [meeting, setMeeting] = useState({})

    useEffect(() => {

        fetchSelectedMeeting()

    }, [])


    const fetchSelectedMeeting = async () => {

        setIsLoading(true)

        const selectedMeeting = await fetch(`http://localhost:5000/api/student/courses/${courseTopic}/${topic}/register/${meetingId}`)

        const responseData = await selectedMeeting.json()

        setMeeting(responseData)

        setIsLoading(false)



    }

    return (
        <Container>
            <h4 className=' px-5 mt-4'> Register Meeting : </h4>
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
                isLoading === false ?
                    <Container style={{"height" : "500px"}}>

                        <RegisterMeeting meeting={meeting.meeting} />

                    </Container>
                    : null
            }




        </Container>
    )
}

export default SelectedMeeting