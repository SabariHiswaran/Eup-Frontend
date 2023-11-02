import React, { useState } from 'react'
import { Button, Container, Dropdown, DropdownButton, Modal, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ViewModelComponent from './ViewModelComponent'
import { ColorRing } from 'react-loader-spinner'
import { Auth } from './Context/AuthContext'

const BadgePageTable = ({ memberDetails, tableId }) => {


    const { id, name, accountName , badge } = memberDetails
console.log(badge)

    const moreMemberDetails = memberDetails

    delete moreMemberDetails._id
    delete moreMemberDetails.__v
    // delete moreMemberDetails.id
    delete moreMemberDetails.userId
    delete moreMemberDetails.meetingId

    const managerId = moreMemberDetails.supervisorId

    const [viewMore, setViewMore] = useState(false)

    const [show, setShow] = useState(false);

    const [badgeShow, setBadgeShow] = useState(false);

    const [selectedBadge, setSelectedBadge] = useState("Iron")

    const [updateBadgeButton, setUpdateBadgeButton] = useState("Award Badge")

    const [loading, setLoading] = useState(false)

    const [status, setStatus] = useState(null)

    const [memberId] = useState(id)

    const { token } = Auth()

    const handleClose = () => {
        setShow(false);
        setViewMore(false)
    }

    const handleBadgeClose = () => {
        setBadgeShow(false);
        setLoading(false)
        setStatus(null)
    }

    const handleSelect = (e) => {
        setSelectedBadge(e)
    }

    const handleBadgeSubmit = async () => {
        console.log("final user ID", id)
        // console.log("id is ",memberId)
        setLoading(true)
        const updatingBadge = await fetch(`http://localhost:5000/api/teacher/courses/updateBadge/${id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
            body: JSON.stringify({ "badge": selectedBadge })
        })


        const res = await updatingBadge.json()

        if (res.status === 200) {
            setUpdateBadgeButton("Badge Awarded")
            setStatus(true)
        } else {
            setUpdateBadgeButton("Award Badge")
            setStatus(false)
        }
        setLoading(false)
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
                }}  variant={badge !== "Not Awarded"  ? "secondary" : "danger"}
                > 
                {badge !== "Not Awarded" ? "Badge Awarded" +"-" + badge : "Award Badge"} </Button></td>

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

                    {loading ?
                        <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="blocks-loading"
                            wrapperStyle={{}}
                            wrapperClass="blocks-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        />


                        :
                        null
                    }

                    {!loading && status === null ?
                        <Dropdown>


                            <DropdownButton title={selectedBadge} key="Danger" onSelect={handleSelect}>
                                <Dropdown.Item eventKey="Iron">Iron Badge - 50 WCP</Dropdown.Item>
                                <Dropdown.Item eventKey="Bronze">Bronze Badge - 100 WCP</Dropdown.Item>
                                <Dropdown.Item eventKey="Silver">Silver Badge - 200 WCP</Dropdown.Item>
                                <Dropdown.Item eventKey="Gold">Gold Badge - 300 WCP</Dropdown.Item>
                                <Dropdown.Item eventKey="Diamond">Diamond Badge - 500 WCP</Dropdown.Item>

                            </DropdownButton>
                        </Dropdown>

                        : null}

                    {!loading & status === true ? "You have successfully provided the Badge" : null
                    }

                    {!loading & status === false ? "Something went wrong, please try again after sometime" : null}


                </Modal.Body>
                <Modal.Footer>
                    {!loading & status === true ? <Button variant="primary" as={Link} to={"/api/teacher/courses/badges"} onClick={handleBadgeClose}>
                        Close
                    </Button> :
                        <>
                            <Button variant="primary" as={Link} to={"/api/teacher/courses/badges"} onClick={() => handleBadgeSubmit()}>
                                Submit
                            </Button>
                            <Button variant="primary" as={Link} to={"/api/teacher/courses/badges"} onClick={handleBadgeClose}>
                                Cancel
                            </Button>
                        </>
                    }
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default BadgePageTable