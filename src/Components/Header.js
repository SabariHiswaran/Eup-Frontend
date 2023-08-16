import React from 'react'
import { Container } from 'react-bootstrap';
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io'
import TeacherNavBar from './TeacherNavBar';
import { useState } from 'react';


const Header = () => {

    const [navStatus, setNavStatus] = useState(true)

    const handleDropDownClick = () => {
        setNavStatus(prevState => !prevState)
    }

    return (
        <>
            <Container className=" d-flex justify-content-center">

                <p> Employee Uptrain Platform</p>

            </Container>

            <Container className=" d-flex justify-content-center">

                <span onClick={handleDropDownClick} className='nav-dropDown'>
                    {navStatus ? <IoIosArrowDropdownCircle /> : <IoIosArrowDropupCircle />}
                </span>

            </Container>

            {navStatus && <TeacherNavBar />}

        </>
    )
}

export default Header