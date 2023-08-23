import React from 'react'
import {  Container } from 'react-bootstrap'
import SubTopicsCards from './SubTopicsCards'

const CourseSubTopic = ({topics,courseTopic}) => {

  const filteredTopics = topics
                         .filter(topic => Object.keys(topic).toString() === courseTopic)
                         .map(topic => Object.values(topic[courseTopic]))

  const topicsList = filteredTopics.flat(1)

  return (

    <Container className='d-flex flex-wrap justify-content-between align-items-center py-3 px-5'>

{topicsList.map((topic,index) => {

return(
 <SubTopicsCards topic = {topic} courseTopic={courseTopic} key={index} />
)
})}


    </Container>

  )
}

export default CourseSubTopic