import React from 'react'
import './Header.css'
import { Container, Form } from 'react-bootstrap';
import { IoIosArrowDropdownCircle, IoIosArrowDropupCircle } from 'react-icons/io'
import TeacherNavBar from './TeacherNavBar';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { RoleContext } from '../Context/RoleContext';
import { useContext } from 'react';

const Header = () => {

    const roleContext = useContext(RoleContext)

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

                {/* <span onClick={handleDropDownClick} className='nav-dropDown'>

                    {navStatus ? <IoIosArrowDropdownCircle /> : <IoIosArrowDropupCircle />}

                </span> */}

            <Form>

            <Container className=" d-flex justify-content-center ">
                    <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="Teacher"
                    className='mx-3'
                    onChange={roleContext.handleRole}
                    checked={roleContext.teacherRole}
                    />

                    <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="Student"
                    onChange={roleContext.handleRole}
                    checked={roleContext.studentRole}
                    />
                    </Container>
            </Form>
            </Container>

            {navStatus && <TeacherNavBar />}

            <Outlet/>

        </>
    )
}

export default Header