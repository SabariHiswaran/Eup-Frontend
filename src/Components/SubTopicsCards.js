import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SubTopicsCards = ({topic,courseTopic}) => {
   
  return (
    <Card body style={{width : "20rem"}} className="m-4 mt-2 text-center course-topic" as={Link} to={`/api/teacher/courses/${courseTopic}/${topic}`}> 

        {topic}

    </Card>

  )
}

export default SubTopicsCards