import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import { ColorRing } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import EnrolledMemberTable from './EnrolledMemberTable'
import { Auth } from './Context/AuthContext'

const RewardsPageTable = ({ meeting, tableId  }) => {

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


    const newStartDate =    startDate?.split("T")[0]

     const newEndDate = endDate?.split("T")[0]

    return (
  
                                <tr>
                                    <td> {tableId}  </td>
                                    <td>{courseTopic} </td>
                                    <td>{topic} </td>
                                    <td>{newStartDate}</td>
                                    <td> {newEndDate} </td>
                                    <td>  500 </td>

                                </tr>

    )
}

export default RewardsPageTable