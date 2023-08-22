import React, { useEffect, useState } from 'react'
import CourseTopic from './CourseTopic'
import { Container } from 'react-bootstrap'

const CourseList = () => {

  const [courses,setCourses] = useState([])

  useEffect(() => {

      fetchCourses()

  },[])

  const fetchCourses = async () => {

    const courseData =await fetch("http://localhost:5000/api/teacher/courses")

    const result = await courseData.json()

    setCourses(result.courselist)

  }
  
  return ( 

    <Container>

    <h4 className='mx-4 px-5 mt-4'> Course List :  </h4>

    <p className='mx-4 px-5'> You can choose any course topic that you would like to teach.</p>

    <Container className='d-flex flex-wrap justify-content-between align-items-center py-3 px-5'>

      {courses.map((course,index) => {

        return(
         <CourseTopic course = {course} key={index} />
        )
      })}
     
    </Container>

    </Container>

  )
} 

export default CourseList