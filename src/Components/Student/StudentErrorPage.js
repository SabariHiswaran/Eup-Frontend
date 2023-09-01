

import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { ColorRing } from 'react-loader-spinner'
import { useNavigate, useRouteError } from 'react-router-dom'

const StudentErrorPage = () => {

    // const navigate = useNavigate()

    const error = useRouteError()
    console.log(error)

//   useEffect(() => {
//     navigate("/")
//   },[])

  return (
    <Container>
    {/* <ColorRing
    visible={true}
    height="80"
    width="80"
    ariaLabel="blocks-loading"
    wrapperStyle={{}}
    wrapperClass="blocks-wrapper"
    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  /> */}
    <h3> {error.status} : {error.statusText}</h3>
</Container>
  )
}

export default StudentErrorPage