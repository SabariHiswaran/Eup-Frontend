import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import RewardsPageTable from './RewardsPageTable'
import { ColorRing } from 'react-loader-spinner'
import { Auth } from './Context/AuthContext'

const RewardsPage = () => {

    const [meetings, setMeetings] = useState([])

    const [isLoading, setIsLoading] = useState(false)

    const { token } = Auth()

    useEffect(() => {
        fetchEligibleMeeting()
    }, [])

    const fetchEligibleMeeting = async () => {

        setIsLoading(true)
        const eligibleMeeting = await fetch("http://localhost:5000/api/teacher/courseMeetings/completedMeetings/Rewards", { headers: { 'Authorization': `Bearer ${token}` } })

        const responseData = await eligibleMeeting.json()

        setMeetings(responseData.eligibleMeetings)

        setIsLoading(false)
    }

    const TotalRewardPoints = meetings.length * 500

    return (

        <>
            <Container>
                <h4 className='mx-4 px-5 mt-4'> Rewards </h4>


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
                    isLoading === false && meetings.length === 0 ? <Container className='d-flex justify-content-center'>

                        <h4 className='mx-4 px-5 mt-4'> You have not yet completed any Trainings . </h4>

                    </Container>
                        :
                        null
                }



            </Container>

                {isLoading ? 
          null
: 
<Container className='p-5'>

<Table bordered hover>
    <thead>
        <tr>
            <th>No.</th>
            <th>Course Name</th>
            <th>Course Topic</th>
            <th>Start Date </th>
            <th> End Date </th>
            <th> Winner Circle Points </th>
        </tr>
    </thead>
    <tbody>

            {meetings?.map((meeting) => {
                return (
                    <RewardsPageTable meeting={meeting}   key={meeting.id} tableId={meetings.indexOf(meeting) + 1}  />
                )
            })}
    </tbody>
</Table>


<h3 className='p-3 d-flex justify-content-center'> Total reward Points = <span> {TotalRewardPoints} </span></h3>
</Container >
                        }
        </>
    )
}

export default RewardsPage