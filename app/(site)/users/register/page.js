import React from 'react'
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row, Stack } from '@/bootstrap'
import PassportOfficeSelector from './PassportOfficeSelector';


export const metadata = {
    title: "User Register"
}

function RegisterPage() {

    return (
        <Container className='py-4'>
            <Row>
                <Col className='col-6 ms-auto me-auto'><h4>Register New User</h4></Col>
            </Row>
            <Form>
                <Stack gap={3}>

                    <PassportOfficeSelector />
                    <Stack direction='horizontal' gap={3}>
                        <FormGroup>
                            <FormLabel>Given Name</FormLabel>
                            <FormControl type='text' name='givenName' />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>Surname</FormLabel>
                            <FormControl type='text' name='surname' />
                        </FormGroup>
                    </Stack>
                    <FormGroup>
                        <FormLabel>Date of Birth: </FormLabel>
                        <FormControl type='date' name='dob' />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Email</FormLabel>
                        <FormControl type='email' name='email' />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Password</FormLabel>
                        <FormControl type='password' name='password' />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl type='password' name='confirmPassowrd' />
                    </FormGroup>
                    <Stack direction='horizontal' gap={3}>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        <Button variant='outline-warning'>
                            Reset
                        </Button>
                    </Stack>
                </Stack>

            </Form>
        </Container>
    )
}

export default RegisterPage