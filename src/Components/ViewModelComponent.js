import React, { useState } from 'react'
import { Button, Container, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const ViewModelComponent = ({member}) => {
   
  console.log("reached")
    const [show, setShow] = useState(true);
  console.log(member)
    const handleClose = () => {
        setShow(false);
    }

  return (
    <>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Member Details </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
              {JSON.stringify(member)}
      
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" as={Link} to={"/api/teacher/courses/enrolledMembers"} onClick={handleClose}>
         Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default ViewModelComponent