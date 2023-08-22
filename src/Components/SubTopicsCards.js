import React from 'react'
import { Card } from 'react-bootstrap'

const SubTopicsCards = ({topic}) => {
    console.log(topic)
  return (
    <Card body style={{width : "20rem"}} className="m-4 mt-2 text-center course-topic"> 

        {topic}

    </Card>

  )
}

export default SubTopicsCards