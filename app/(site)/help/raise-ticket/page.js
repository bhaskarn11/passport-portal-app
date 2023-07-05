import React from 'react'
import { Container } from "@/bootstrap";
import RaiseTicketForm from './RaiseTicketForm';

export const metadata = {
  title: "Raise Ticket"
}




function RaiseTicketPage() {
  return (
    <Container className='py-4'>
      <RaiseTicketForm />

    </Container>
  )
}

export default RaiseTicketPage