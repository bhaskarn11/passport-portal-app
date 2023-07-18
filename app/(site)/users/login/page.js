import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLock } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Col, Container, Row } from '@/bootstrap'
import { getCsrfToken } from "next-auth/react";
import LoginForm from './LoginForm'


// const csrf = getCsrfToken()


async function LoginPage() {


    const csrf = await getCsrfToken()
   

    return (
        <Container className='py-4'>

            <Row>
                <Col className='col-md-7'>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <h4>Login User</h4>
                        </Col>
                    </Row>
                    <LoginForm csrfToken={csrf} />
                </Col>
                <Col className='d-md-block d-none'>
                    <FontAwesomeIcon className='text-secondary' style={{ height: "inherit" }} icon={faUserLock} size="lg" />
                </Col>
            </Row>

        </Container>
    )
}


export default LoginPage