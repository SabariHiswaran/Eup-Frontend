import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const ModeComponent = ({unEnroll,setUnenroll,meetingId,id}) => {

    const [show, setShow] = useState(unEnroll);

    const handleClose = () => {
        setUnenroll(false)
        setShow(false);
    }
    // const handleShow = () => setShow(true);
  
  return (
    <>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Unregister</Modal.Title>
      </Modal.Header>
      <Modal.Body>Would you like to unEnroll to this meeting ? </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button variant="primary" as={Link} to={`/api/student/courses/enrolledMeetings/unregister/${id}/${meetingId}`}>
         Yes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default ModeComponent