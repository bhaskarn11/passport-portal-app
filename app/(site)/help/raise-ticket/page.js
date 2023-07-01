import React from 'react'
import { Button, Container, Form, FormCheck, FormControl, FormGroup, FormLabel, FormSelect, Stack } from "@/bootstrap";
import CategorySelector from './CategorySelector';

export const metadata = {
  title: "Raise Ticket"
}




function RaiseTicketPage() {
  return (
    <Container className='py-4'>
      <Form>
        <Stack gap={4}>
          <h4>Raise Ticket/Feedback</h4>
          <FormGroup>
            <FormCheck id='passport-available-checkbox' type='checkbox' label='Passport Available' inline name='isPassportAvailable' />

          </FormGroup>

          <FormGroup>
            <FormLabel>Passport Number/File Number/ARN</FormLabel>
            <FormControl required name='refNo' type='text' />
          </FormGroup>
          <FormGroup>
            <FormLabel>Applicant's Name</FormLabel>
            <FormControl name='name' type='text' />
          </FormGroup>
          <FormGroup>
            <FormLabel>Mobile Number</FormLabel>
            <FormControl name='mobileNumber' type='text' />
          </FormGroup>
          <FormGroup>
            <FormLabel>Email Id</FormLabel>
            <FormControl name='email' type='email' />
          </FormGroup>
          <CategorySelector />
          <FormGroup>
            <FormLabel>Description</FormLabel>
            <FormControl name='description' as="textarea" />
          </FormGroup>
          <Stack direction='horizontal' gap={3}>
            <Button>Create Ticket</Button>
            <Button variant='outline-primary'>Reset</Button>
          </Stack>
        </Stack>
      </Form>

    </Container>
  )
}

export default RaiseTicketPage