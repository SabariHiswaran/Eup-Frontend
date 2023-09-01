import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './StudentCourseTopic.css'

const StudentCourseTopic = ({course}) => {

  const topic = Object.keys(course).toString()
  
  return (
    
    <Card body style={{width : "20rem"}} className="m-4 mt-2 text-center course-topic" as={Link} to={`/api/teacher/courses/${topic}`}> 

        {topic}

    </Card>

  )
}

export default StudentCourseTopic