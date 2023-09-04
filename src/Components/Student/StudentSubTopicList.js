import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import StudentSubTopic from './StudentSubTopic'
import { ColorRing } from 'react-loader-spinner'

const StudentSubTopicList = () => {

  const { courseTopic } = useParams()

  const [subTopics, setSubTopics] = useState([])
  
  const [isLoading,setIsLoading] = useState(null)

  useEffect(() => {

    fetchSubTopics()

  }, [])

  const fetchSubTopics = async () => {

    setIsLoading(true)

    const subTopicsData = await fetch("http://localhost:5000/api/student/courses")

    const result = await subTopicsData.json()

    setSubTopics(result.courses.courseLists)

    setIsLoading(false)
  }

  return (
    <Container>

      <h4 className='mx-4 px-5 mt-4'> {courseTopic} : </h4>

      
    <p className='mx-4 px-5'> Kindly choose the sub topic and based on your availability you can choose any meeting and register.</p>

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
  
      <StudentSubTopic topics={subTopics} courseTopic={courseTopic}/>

    </Container>
  )
}

export default StudentSubTopicList