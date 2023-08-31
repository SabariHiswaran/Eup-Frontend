import React from 'react'
import './Header.css'
import { Container, Form } from 'react-bootstrap';
import TeacherNavBar from './TeacherNavBar';
import { Outlet } from 'react-router-dom';

import { Role } from './Context/RoleContext';
import StudentNavBar from './Student/StudentNavBar';

const Header = () => {

    const { teacherRole, studentRole, handleRole } = Role()


    return (
        <>
            <Container className=" d-flex justify-content-center">

                <p> Employee Uptrain Platform</p>

            </Container>

            <Container className=" d-flex justify-content-center">

                <Form>
                    <Container className=" d-flex justify-content-center">
                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch"
                            label="Teacher"
                            onChange={handleRole}
                            checked={teacherRole}
                            className='mx-3'
                        />

                        <Form.Check // prettier-ignore
                            type="switch"
                            id="custom-switch2"
                            label="Student"
                            onChange={handleRole}
                            checked={studentRole}
                        />
                    </Container>
                </Form>

            </Container>

            {teacherRole ? <TeacherNavBar /> : <StudentNavBar />}

            <Outlet />

        </>
    )
}

export default Header