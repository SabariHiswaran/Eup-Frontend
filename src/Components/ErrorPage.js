import React from 'react'
import { Container } from 'react-bootstrap'

import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError()
    console.log(error)
  return (
   <Container>
        <h4> Something went wrong!</h4>
        <h3> {error.status} : {error.statusText}</h3>
    </Container>
  )
}

export default ErrorPage