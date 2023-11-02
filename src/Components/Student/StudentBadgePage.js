import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Container, ListGroup } from 'react-bootstrap'
import { Auth } from '../Context/AuthContext'
import { ColorRing } from 'react-loader-spinner'
import EarnedBadgeMeetings from './EarnedBadgeMeetings'

const StudentBadgePage = () => {

    const [earnedBadgesMeetings, setEarnedBadgesMeetings] = useState([])


    const [isLoading, setIsLoading] = useState(false)
    const { token } = Auth()
    useEffect(() => {

        fetchBadgesMeetings()

    }, [])

    const badgesInfo = {"Iron" : 50,"Bronze" : 100, "Silver" : 200, "Gold" : 300, "Diamond" : 500 }

    const fetchBadgesMeetings = async () => {

        setIsLoading(true)

        const meetingList = await fetch("http://localhost:5000/api/student/courses/enrolledMeetings", { headers: { 'Authorization': `Bearer ${token}` } })

        const response = await meetingList.json()

        setEarnedBadgesMeetings(response.enrolledMeetings.filter(meeting => meeting.badge !== "Not Awarded"))

        setIsLoading(false)
    }

    const pointsArray = earnedBadgesMeetings?.map(meeting =>  badgesInfo[meeting.badge]  )

    const totalSumPoints = pointsArray.reduce((pointsArray,b) => pointsArray+b,0)
    return (
        <Container>
            <h4 className='mx-4 px-5 mt-4'> Earned Badges </h4>

          
            <span className='mx-4 px-5 mt-4'> WCP - Winner Circle Points </span>

            {/* <h3 className='p-3 d-flex justify-content-center'> Total reward Points = <span> {TotalRewardPoints} </span></h3> */}

            <ListGroup className='mx-4 px-5 mt-4'>
                <ListGroup.Item>Iron Badge - 50 WCP </ListGroup.Item>
                <ListGroup.Item>Bronze Badge - 100 WCP </ListGroup.Item>
                <ListGroup.Item>Silver Badge - 200 WCP </ListGroup.Item>
                <ListGroup.Item>Gold Badge - 300 WCP </ListGroup.Item>
                <ListGroup.Item>Diamond Badge - 500 WCP </ListGroup.Item>
            </ListGroup>

            <h4 className='mx-4 px-5 mt-4'>Total Earned Rewards : {totalSumPoints} WCP </h4>

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
                : null
            }

            {isLoading === false && earnedBadgesMeetings.length === 0
                ?
                <Container>

                    <Container className='d-flex justify-content-center'>

                        <h4 className='mx-4 px-5 mt-4'> You have not earned any Badges. </h4>

                    </Container>

                </Container>

                : null}

            {earnedBadgesMeetings.length > 0 ?
                <Container>

                    <Container className='p-5 d-flex '>
                        {earnedBadgesMeetings?.map((meeting) => {
                            return (
                                <EarnedBadgeMeetings meeting={meeting} key={meeting.id} />
                            )
                        })}

                    </Container>

                </Container>
                :
                null}

        </Container>
    )
}

export default StudentBadgePage