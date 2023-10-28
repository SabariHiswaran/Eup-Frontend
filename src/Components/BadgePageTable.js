import React, { useState } from 'react'
import { Button, Container, Dropdown, DropdownButton, Modal, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ViewModelComponent from './ViewModelComponent'

const BadgePageTable = ({ memberDetails, tableId }) => {


    const { id, name, accountName } = memberDetails

    const moreMemberDetails = memberDetails

    delete moreMemberDetails._id
    delete moreMemberDetails.__v
    delete moreMemberDetails.id
    delete moreMemberDetails.userId
    delete moreMemberDetails.meetingId

    const managerId = moreMemberDetails.supervisorId

    const [viewMore, setViewMore] = useState(false)

    const [show, setShow] = useState(false);

    const [badgeShow, setBadgeShow] = useState(false);

    const [selectedBadge,setSelectedBadge] = useState("Please Select the Badge")

    const handleClose = () => {
        setShow(false);
        setViewMore(false)
    }

    const handleBadgeClose = () => {
        setBadgeShow(false);
    }

    const handleSelect = (e) => {
        setSelectedBadge(e)
    }

    console.log(selectedBadge)

    return (
        <>

            <tr>
                <td> {tableId}  </td>
                <td>{name} </td>
                <td>{accountName} </td>
                <td><Button as={Link} onClick={() => {
                    setViewMore(true)
                    setShow(true)
                }}> View </Button></td>
                <td> <Button as={Link} onClick={() => {
                    setBadgeShow(true)
                }}> Award Badge  </Button></td>

            </tr>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Member Details </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <h6> {Object.keys(moreMemberDetails)[0]}: {Object.values(moreMemberDetails)[0]}</h6>
                    <h6> {Object.keys(moreMemberDetails)[1]}: {Object.values(moreMemberDetails)[1]}</h6>
                    <h6> {Object.keys(moreMemberDetails)[2]}: {Object.values(moreMemberDetails)[2]}</h6>
                    <h6> {Object.keys(moreMemberDetails)[3]}: {Object.values(moreMemberDetails)[3]}</h6>
                    <h6> {Object.keys(moreMemberDetails)[4]}: {Object.values(moreMemberDetails)[4]}</h6>
                    <h6> {Object.keys(moreMemberDetails)[5]}: {Object.values(moreMemberDetails)[5]}</h6>
                    <h6> {Object.keys(moreMemberDetails)[6]}: {Object.values(moreMemberDetails)[6]}</h6>
                    <h6> {Object.keys(moreMemberDetails)[8]}: {Object.values(moreMemberDetails)[8]}</h6>

                    <h6> {Object.keys(managerId)[0]}: {Object.values(managerId)[0]}</h6>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" as={Link} to={"/api/teacher/courses/badges"} onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={badgeShow} onHide={handleBadgeClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Award  </Modal.Title>
                </Modal.Header>
                <Modal.Body className='pb-5'>

                   

                    <Dropdown> 
                       

                        <DropdownButton title={selectedBadge} key="Danger" onSelect={handleSelect}>
                            <Dropdown.Item eventKey="Iron">Iron Badge - 50 WCP</Dropdown.Item>
                            <Dropdown.Item eventKey="Bronze">Bronze Badge - 100 WCP</Dropdown.Item>
                            <Dropdown.Item eventKey="Silver">Silver Badge - 200 WCP</Dropdown.Item>
                            <Dropdown.Item eventKey="Gold">Gold Badge - 300 WCP</Dropdown.Item>
                            <Dropdown.Item eventKey="Diamond">Diamond Badge - 500 WCP</Dropdown.Item>
                            
                        </DropdownButton>
                    </Dropdown>


                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" as={Link} to={"/api/teacher/courses/badges"} onClick={handleBadgeClose}>
                        Submit 
                    </Button>
                    <Button variant="primary" as={Link} to={"/api/teacher/courses/badges"} onClick={handleBadgeClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default BadgePageTable