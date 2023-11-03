import React from 'react'
import { useEffect } from 'react'
import { Container, Table } from 'react-bootstrap'
import { Auth } from './Context/AuthContext'
import { useState } from 'react'
import { ColorRing } from 'react-loader-spinner'

const CommonProfile = () => {

    const { userId, token } = Auth()

    const [profile, setProfile] = useState({})

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchUserProfile()
    }, [])

    const {name,emailId,designation} = profile


    const fetchUserProfile = async () => {

        setIsLoading(true)
        const profileData = await fetch("http://localhost:5000/api/teacher/profile", { headers: { 'Authorization': `Bearer ${token}` } })

        const result = await profileData.json()

        setProfile(result.profileData)
        setIsLoading(false)
    }
    return (
        <Container>
            <h4 className='mx-4 px-5 mt-4'> Profile </h4>
            <p className='mx-4 px-5 mt-4'> <span> Note :</span> If you want to make any changes in profile , please visit wipro servicenow and reach out to support team.</p>

            {isLoading ?
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
                null}

            {isLoading === false && profile === null ? "Something went wrong, please try again" : null}


            <Container className='d-flex justify-content-center'>

                <Table  className=" d-flex justify-content-center mx-4 px-5 mt-4  table table-borderless">
                    <tbody>
                        <tr>
                            <td > <span style={{ fontWeight: "bold" }}> Name  :</span> {name}</td>
                          
                        </tr>

                        <tr >
                            <td ><span style={{ fontWeight: "bold" }}> Email ID  :</span> {emailId}</td>
           

                        </tr>

                        <tr>
                            <td><span style={{ fontWeight: "bold" }}>Designation :</span> {designation}  </td>
                       
                        </tr>
                    </tbody>
                </Table>

            </Container>

        </Container>
    )
}

export default CommonProfile