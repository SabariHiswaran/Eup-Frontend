import React, { useState } from 'react'
import { Button, Container, Modal, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ViewModelComponent from './ViewModelComponent'

const EnrolledMemberTable = ({ memberDetails, tableId }) => {


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

      const handleClose = () => {
          setShow(false);
          setViewMore(false)
      }

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

            </tr>
  
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Member Details </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
            
                            <h6> {Object.keys(moreMemberDetails)[0] }: { Object.values(moreMemberDetails)[0] }</h6>
                            <h6> {Object.keys(moreMemberDetails)[1] }: { Object.values(moreMemberDetails)[1] }</h6>
                            <h6> {Object.keys(moreMemberDetails)[2] }: { Object.values(moreMemberDetails)[2] }</h6>
                            <h6> {Object.keys(moreMemberDetails)[3] }: { Object.values(moreMemberDetails)[3] }</h6>
                            <h6> {Object.keys(moreMemberDetails)[4] }: { Object.values(moreMemberDetails)[4] }</h6>
                            <h6> {Object.keys(moreMemberDetails)[5] }: { Object.values(moreMemberDetails)[5] }</h6>
                            <h6> {Object.keys(moreMemberDetails)[6] }: { Object.values(moreMemberDetails)[6] }</h6>
                            <h6> {Object.keys(moreMemberDetails)[8] }: { Object.values(moreMemberDetails)[8] }</h6>
                            
                            <h6> {Object.keys(managerId)[0]}: { Object.values(managerId)[0] }</h6>

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

export default EnrolledMemberTable