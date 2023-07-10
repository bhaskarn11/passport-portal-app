import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from '@/bootstrap'
import AppListCard from '../applications/AppListCard'
import { applications } from "@/data/applications";


function AppointmentPage() {
  return (
    <Container className='py-4'>
      <ListGroup variant='flush'>
        {
          applications.map((a, i) => (
            <ListGroupItem>
              <AppListCard app={a} />
            </ListGroupItem>
          ))
        }
      </ListGroup>
    </Container>
  )
}

export default AppointmentPage