import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseTopic.css'

const CourseTopic = ({course}) => {

  const topic = Object.keys(course).toString()

  const trimmedTopic = topic.split(" ").join("")

  return (
    
    <Card body style={{width : "20rem"}} className="m-4 text-center course-topic" as={Link} to={`/api/teacher/courses/${trimmedTopic}`}> 

        {topic}

    </Card>

  )
}

export default CourseTopic