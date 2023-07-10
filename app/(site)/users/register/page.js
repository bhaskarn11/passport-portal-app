'use client'
import React from 'react'
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row, Stack } from '@/bootstrap'
import PassportOfficeSelector from './PassportOfficeSelector';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";
import Image from 'next/image';
import logo from '@/assets/image/access_account.svg'


const scheme = yup.object({
    pspOfficeCity: yup.string(),
    // registerToApply: yup.string().default("CPV Delhi"),
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    dob: yup.date().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "password did not match")
})


function RegisterPage() {

    const methods = useForm({ resolver: yupResolver(scheme) })
    const { register, formState: { errors } } = methods
    const submitForm = (data) => {
        console.log(data);
    }


    const handleReset = () => {
        methods.reset()
    }

    return (
        <FormProvider {...methods}>
            <Container className='py-4'>
                <Row>
                    <Col className='col-md-6'>
                        <Form onSubmit={methods.handleSubmit(submitForm)}>
                            <Stack gap={3}>
                                <h4>Register New User</h4>

                                {/* <PassportOfficeSelector /> */}
                                <Stack direction='horizontal' gap={3}>
                                    <FormGroup className='w-50'>
                                        <FormLabel>Given Name</FormLabel>
                                        <FormControl isInvalid={errors.firstName} {...register('firstName')} />
                                    </FormGroup>
                                    <FormGroup className='w-50'>
                                        <FormLabel>Surname</FormLabel>
                                        <FormControl isInvalid={errors.lastName} {...register('lastName')} />
                                    </FormGroup>
                                </Stack>
                                <FormGroup>
                                    <FormLabel>Date of Birth: </FormLabel>
                                    <FormControl isInvalid={errors.dob} type='date' {...register('dob')} />
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl isInvalid={errors.email} {...register('email')} />
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl type='password' isInvalid={errors.password} {...register('password')} />
                                </FormGroup>
                                <FormGroup>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl type='password' isInvalid={errors.confirmPassword} {...register('confirmPassowrd')} />
                                </FormGroup>
                                <Stack direction='horizontal' gap={3}>
                                    <Button className='w-25' variant="primary" type="submit">
                                        Submit
                                    </Button>
                                    <Button onClick={handleReset} variant='outline-warning'>
                                        Reset
                                    </Button>
                                </Stack>
                            </Stack>

                        </Form>
                    </Col>
                    <Col className='col-md-6 text-center d-none d-md-block'>
                        <Image src={logo} style={{objectFit: 'scale-down', maxWidth: "25vw", maxHeight: "50vw"}} alt='sign up banner' />
                    </Col>

                </Row>
            </Container>
        </FormProvider>
    )
}

export default RegisterPage