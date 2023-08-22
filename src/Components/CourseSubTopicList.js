import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CourseSubTopic from './CourseSubTopic'

const CourseSubTopicList = () => {

  const { courseTopic } = useParams()

  const [subTopics, setSubTopics] = useState([])

  useEffect(() => {

    fetchSubTopics()

  }, [])

  const fetchSubTopics = async () => {

    const subTopicsData = await fetch("http://localhost:5000/api/teacher/courses")

    const result = await subTopicsData.json()

    setSubTopics(result.courses.courseLists)

  }

  return (
    <Container>

      <h4 className='mx-4 px-5 mt-4'> {courseTopic} : </h4>

      
    <p className='mx-4 px-5'> Kindly choose the sub topic and schedule the meeting.</p>

      <CourseSubTopic topics={subTopics} courseTopic={courseTopic}/>

    </Container>
  )
}

export default CourseSubTopicList