import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EnrolledMemberTable = ({ memberDetails,tableId }) => {


    const { id, name, accountName } = memberDetails

    return (
        <>

                    <tr>
                        <td> {tableId}  </td>
                        <td>{name} </td>
                        <td>{accountName} </td>
                        <td><Button as={Link} > View </Button></td>

                    </tr>
        
        </>
    )
}

export default EnrolledMemberTable