import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { ColorRing } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

const EnrolledMeetingCards = ({ meeting }) => {

    const {
        id,
        courseTopic,
        topic,
        membersLimit,
        startDate,
        endDate,
        startTime,
        endTime,
        knowledgeRequired
    } = meeting

    const [members, setMembers] = useState([])

    const [isLoading, setIsLoading] = useState(null)

    useEffect(() => {

        fetchEnrolledMembers()

    }, [])

    const fetchEnrolledMembers = async () => {

        setIsLoading(true)

        const members = await fetch("http://localhost:5000/api/teacher/courses/enrolledMembers")

        const responseData = await members.json()

        setMembers(responseData.members)

        setIsLoading(false)

    }

    return (
        <Container className=' border-bottom border-dark '>

            <Row>

                <Col lg={1} md={1} sm={0}> </Col>

                <Col lg={11} md={11} sm={12}>

                    <h5 className='p-2'> {topic}  ({courseTopic})  </h5>

                    <Table bordered hover>
                        <tbody>
                            <tr>
                                <td> <span className="meetingDetailsHeading"> Date </span>- {startDate?.split("T")[0]} to {endDate?.split("T")[0]} </td>
                                <td><span className="meetingDetailsHeading">Time</span> - {startTime} - {endTime} </td>

                            </tr>
                            <tr>
                                <td><span className="meetingDetailsHeading">Participants Limit </span>- {membersLimit} </td>
                                <td><span className="meetingDetailsHeading">Pre-requistees required </span>- {knowledgeRequired} </td>

                            </tr>
                        </tbody>
                    </Table>
                </Col>

            </Row>

            <Row>

                <Col lg={1} md={1} sm={0}> </Col>

                <Col lg={11} md={11} sm={12}>

                    <h5 className='p-2'> Registered Members : </h5>

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
                        isLoading === false && members.length === 0 ? <Container className='d-flex justify-content-center'>

                            <h4 className='mx-4 px-5 mt-4'> Currently there is no enrolled members for your meeting. </h4>

                        </Container>
                            :
                            null
                    }

                    



                </Col>
            </Row>

        </Container>
    )
}

export default EnrolledMeetingCards