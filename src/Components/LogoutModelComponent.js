import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { Auth } from './Context/AuthContext';

const LogoutModeComponent = ({isLogout, setIsLogout}) => {
   
    const [show, setShow] = useState(isLogout);

    const {logout} = Auth()

    const handleClose = () => {
        setIsLogout(false)
        setShow(false);
    }

    const handleLogout = () => {
        logout()
    }


  return (
    <>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Logout </Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to logout ?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          No
        </Button>
        <Button variant="primary" as={Link} to={"/login"} onClick={handleLogout}>
         Yes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default LogoutModeComponent