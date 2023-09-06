import React from 'react'
import { Card } from 'react-bootstrap'

const MeetingShimmer = () => {
  return (
    <Card style={{ width: '23rem' }}>
          <Card.Body>
        <Card.Title style={{ width: '13rem',height : '1rem',backgroundColor : "lightgray" }} ></Card.Title>
        <Card.Subtitle className="mb-2 text-muted" style={{ width: '13rem',height : '1rem',backgroundColor : "lightgray" }} ></Card.Subtitle>
        <Card.Text>
        <hr/>
        <p className='m-1'style={{ width: '13rem',height : '1rem',backgroundColor : "lightgray" }}>  </p>
        <p className='m-1'style={{ width: '13rem',height : '1rem',backgroundColor : "lightgray" }}>  </p>
        <p className='m-1'style={{ width: '13rem',height : '1rem',backgroundColor : "lightgray" }}>  </p>
        <p className='m-1'style={{ width: '13rem',height : '1rem',backgroundColor : "lightgray" }}>  </p>
        <p className='m-1'style={{ width: '13rem',height : '1rem',backgroundColor : "lightgray" }}>  </p>
    
        <hr/>
        <p className='m-1'style={{ width: '13rem',height : '1rem',backgroundColor : "lightgray" }}>  </p>
        <p className='m-1'style={{ width: '13rem',height : '1rem',backgroundColor : "lightgray" }}>  </p>
        <p className='m-1'style={{ width: '13rem',height : '1rem',backgroundColor : "lightgray" }}>  </p>
        <p className='m-1'style={{ width: '13rem',height : '1rem',backgroundColor : "lightgray" }}>  </p>
        <p className='m-1'style={{ width: '13rem',height : '1rem',backgroundColor : "lightgray" }}>  </p>
        </Card.Text>
        
      </Card.Body>
      
    </Card>
  )
}

export default MeetingShimmer