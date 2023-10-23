import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import StudentCourseTopic from './StudentCourseTopic'
import { ColorRing } from 'react-loader-spinner'
import { Auth } from '../Context/AuthContext'

const StudentCourseList = () => {

  const [courses,setCourses] = useState([])

  const [isLoading,setIsLoading] = useState(null)

  const {token} = Auth()

  useEffect(() => {

      fetchCourses()

  },[])

  const fetchCourses = async () => {
    setIsLoading(true)
    const courseData =await fetch("http://localhost:5000/api/student/courses",{ headers :{'Authorization' : `Bearer ${token}`}})

    const result = await courseData.json()

    setCourses(result.courses.courseLists)
    setIsLoading(false)
  }
  
  return ( 
    <>
   
    <Container>

    <h4 className='mx-4 px-5 mt-4'> Course List :  </h4>

    <p className='mx-4 px-5'> You can choose any course topic that you would like to learn from your colleagues.</p>

    { isLoading ? 
      <Container className='d-flex justify-content-center'>
       <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
  
       </Container>
        :
       null }
  

    <Container className='d-flex flex-wrap justify-content-between align-items-center py-3 px-5'>

      {courses.map((course,index) => {

        return(
         <StudentCourseTopic course = {course} key={index} />
        )
      })}
     
    </Container>

    </Container>
    </>
  )
} 

export default StudentCourseList