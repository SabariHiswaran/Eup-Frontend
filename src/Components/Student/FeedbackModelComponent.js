import React, { useState } from 'react'
import { Button, Dropdown, DropdownButton, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const FeedbackModeComponent = ({ meetingId, id,provideFeedback,setProvideFeedback}) => {

    const [show, setShow] = useState(provideFeedback);

    const [feedbackNumber,setFeedbackNumber] = useState("1")

    const handleClose = () => {
        setProvideFeedback(false)
        setShow(false);
    }
    // const handleShow = () => setShow(true);

    
    const handleSelect = (e) => {
        setFeedbackNumber(e)
    }
    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Feedback</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h6>
                        Please provide the feedback below, 1 is the lowest and 5 is the highest
                    </h6>
                    <Dropdown>


                        <DropdownButton title={feedbackNumber} key="Danger" onSelect={handleSelect}>
                            <Dropdown.Item eventKey="1">1</Dropdown.Item>
                            <Dropdown.Item eventKey="2">2</Dropdown.Item>
                            <Dropdown.Item eventKey="3">3</Dropdown.Item>
                            <Dropdown.Item eventKey="4">4</Dropdown.Item>
                            <Dropdown.Item eventKey="5">5</Dropdown.Item>

                        </DropdownButton>
                    </Dropdown>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="primary" as={Link} to={`/api/student/courses/feedback/${id}/${meetingId}/${feedbackNumber}`}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default FeedbackModeComponent