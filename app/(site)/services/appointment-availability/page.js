import React from 'react'
import { Button, Container, Form, FormGroup, FormLabel, FormSelect, Stack } from '@/bootstrap'
import passportOffices from './passportOffices.json'
import { Typeahead } from '@/bootstrap'


function AppointmentAvailPage({ searchParams }) {
  return (
    <Container className='py-4'>
      <Form>
        <Stack gap={3}>
          <FormGroup>
            <Typeahead
              id='passport-office-lookup'
              options={passportOffices}
              placeholder="Search for passport office city..."
            />
          </FormGroup>
          <Button variant='warning'>Check Appointment Availability</Button>
        </Stack>
      </Form>
    </Container>
  )
}

export default AppointmentAvailPage