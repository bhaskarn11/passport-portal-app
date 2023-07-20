'use client'
import Image from 'next/image';
import React from 'react'
import { Button, Col, Container, Form, FormCheck, FormControl, FormGroup, FormLabel, Row, Stack } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import ForgotPassowrdBanner from '@/assets/image/forgot_password.svg'

function ForgotPassowrdPage() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const submitForm = (data) => {
        console.log(data);
    }

    return (
        <Container className='py-4'>

            <Row>
                <Col className='col-12 col-md-6'>
                    <Form onSubmit={handleSubmit(submitForm)} className='mx-auto'>

                        <Stack gap={4}>
                            <h4>Reset Password</h4>
                            <FormGroup>
                                <FormLabel>Email Id</FormLabel>
                                <FormControl {...register("userName", { required: true })}
                                    isInvalid={errors.userName}
                                    type='text' placeholder='Enter email id' />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Date of Birth</FormLabel>
                                <FormControl {...register("dob", { required: true })}
                                    isInvalid={errors.dob} type='date' />
                            </FormGroup>
                            <FormGroup>
                                <FormCheck id='forgotUnLockPassE' type='radio' value="E" inline name='emailFlag' label="Send OTP to my registered email-id" />
                                <FormCheck id='forgotUnLockPassS' type='radio' value="S" inline name='emailFlag' label="Use my hint question" />
                            </FormGroup>
                            <Button type='submit'>Reset Password</Button>
                        </Stack>
                    </Form>
                </Col>
                <Col className='d-none d-md-block col-md-6'>
                    <Image src={ForgotPassowrdBanner} style={{ maxHeight: '50vh', maxWidth: "40vw" }} />
                </Col>
            </Row>
        </Container>
    )
}

export default ForgotPassowrdPage