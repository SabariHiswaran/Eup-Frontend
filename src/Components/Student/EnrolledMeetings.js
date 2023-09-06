import React from 'react'
import { Card } from 'react-bootstrap'

import "./EnrolledMeetings.css"

const EnrolledMeetings = ({ meeting }) => {


  const {
    name,
    designation,
    experience,
    empStatus,
    emailId,
    supervisorId,
    accountName,
    courseTopic,
    topic,
    meetingId
  } = meeting

  const mailId = Object.keys(supervisorId)[0]

  return (
    <Card style={{ width: '23rem' }}>
      <Card.Body>
        <Card.Title>{topic}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{courseTopic}</Card.Subtitle>
        <Card.Text>
          <p className='m-0'> {name} | {designation} | {experience} years  </p>
          <p className='statusHeading'> <span className="meetingDetailsHeading">Status :</span> - {empStatus} </p>
          <p className='m-0'> <span className="meetingDetailsHeading">Account Name :  </span>- {accountName} </p>
          <p className='m-0'> <span className="meetingDetailsHeading">Mail Id: </span>- {emailId} </p>
          <p className='m-0'> <span className="meetingDetailsHeading">Supervisor Id: </span>-{supervisorId[mailId]} </p>
        </Card.Text>
        <Card.Link href="#">Unregister</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default EnrolledMeetings