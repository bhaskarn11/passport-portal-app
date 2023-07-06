import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from '@/bootstrap'
import AppListCard from '../applications/AppListCard'

function AppointmentPage() {
  return (
    <Container className='py-4'>
      <ListGroup variant='flush'>
        <ListGroupItem>
          <AppListCard />
        </ListGroupItem>
      </ListGroup>
    </Container>
  )
}

export default AppointmentPage