'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLock } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row, Stack } from '@/bootstrap'
import Link from 'next/link'
import { useForm } from 'react-hook-form'



export const metadata = {
    title: "User Login"
}


function LoginPage() {


    const { register, handleSubmit, formState: { errors } } = useForm()


    const submitForm = (data) => {
        console.log(data);
    }

    return (
        <Container className='py-4'>

            <Row>
                <Col className='col-md-7'>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <h4>Login User</h4>
                        </Col>
                    </Row>
                    <Form onSubmit={handleSubmit(submitForm)}>
                        <FormGroup>
                            <FormLabel>Email</FormLabel>
                            <FormControl isInvalid={errors.email} 
                                {...register("email", {required: true})} type='email' />
                        </FormGroup>
                        <FormGroup className='mb-3'>
                            <FormLabel>Password</FormLabel>
                            <FormControl isInvalid={errors.password} 
                                {...register("password", {required: true})} type='password' />
                        </FormGroup>
                        <Stack direction='horizontal' gap={3} className='mb-3'>
                            <span>
                                <Link href={"/users/register"}>Register (new user)</Link>
                            </span>
                            <span className='vr'></span>
                            <span>
                                <Link href="/users/forgot-password">Having trouble login?</Link>
                            </span>
                        </Stack>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
                <Col className='d-md-block d-none'>
                    <FontAwesomeIcon className='text-secondary' style={{ height: "inherit" }} icon={faUserLock} size="lg" />
                </Col>
            </Row>

        </Container>
    )
}

export default LoginPage