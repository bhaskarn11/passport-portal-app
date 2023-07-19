import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row } from '@/bootstrap'
import AppListCard from '../applications/AppListCard'
// import { applications } from "@/data/applications";
import ApplicationService from '@/lib/api/application'
import { getServerSession } from "next-auth";
import { options } from "@/lib/auth.options";

async function AppointmentPage() {

  const session = await getServerSession(options)




  return (
    <Container className='py-4'>
      <ListGroup variant='flush'>
        {
          applications.map((a, i) => (
            <ListGroupItem key={i}>
              <AppListCard app={a} />
            </ListGroupItem>
          ))
        }
      </ListGroup>
    </Container>
  )
}

export default AppointmentPage