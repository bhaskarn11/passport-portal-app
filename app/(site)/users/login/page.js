import React from 'react'
import { Col, Container, Row } from '@/bootstrap'
import { getCsrfToken } from "next-auth/react";
import LoginForm from './LoginForm'
import LoginBanner from '@/assets/image/mobile_login.svg'
import Image from 'next/image'
// const csrf = getCsrfToken()


async function LoginPage() {


    const csrf = await getCsrfToken()
   

    return (
        <Container className='py-4'>

            <Row>
                <Col className=' col-12 col-md-7'>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <h4>Login User</h4>
                        </Col>
                    </Row>
                    <LoginForm csrfToken={csrf} />
                </Col>
                <Col className='col-md-5 d-md-block d-none'>
                    <Image alt='Login Banner' src={LoginBanner} style={{ maxHeight: '50vh', maxWidth: '40vw' }} />
                </Col>
            </Row>

        </Container>
    )
}


export default LoginPage