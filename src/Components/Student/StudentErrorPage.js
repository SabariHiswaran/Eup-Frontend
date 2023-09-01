
import { Container } from 'react-bootstrap'
import {  useRouteError } from 'react-router-dom'

const StudentErrorPage = () => {

    const error = useRouteError()
 

  return (
    <Container>
    <h3> {error.status} : {error.statusText}</h3>
</Container>
  )
}

export default StudentErrorPage