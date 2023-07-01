import React from 'react'
import { Button, Container, Form, FormCheck, FormControl, FormGroup, FormLabel, Stack } from "@/bootstrap";
function ForgotPassowrdPage() {
  return (
    <Container className='py-4'>
      <Form>
        <Stack gap={4}>
          <FormGroup>
            <FormLabel>Login Id</FormLabel>
            <FormControl name='userName' type='text' placeholder='Enter Login id' />
          </FormGroup>
          <FormGroup>
            <FormLabel>Date of Birth</FormLabel>
            <FormControl name='dob' type='date' />
          </FormGroup>
          <FormGroup>
            <FormCheck id='forgotUnLockPassE' type='radio' value="E" inline name='emailFlag' label="Send OTP to my registered email-id" />
            <FormCheck id='forgotUnLockPassS' type='radio' value="S" inline name='emailFlag' label="Use my hint question" />
          </FormGroup>
          <Button>Reset Password</Button>
        </Stack>
      </Form>
    </Container>
  )
}

export default ForgotPassowrdPage