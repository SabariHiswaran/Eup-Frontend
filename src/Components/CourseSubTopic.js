import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const CourseSubTopic = () => {

 const {courseTopic} = useParams()


  return (
    <Container>
       <h4> {courseTopic} </h4>
    </Container>
  )
}

export default CourseSubTopic