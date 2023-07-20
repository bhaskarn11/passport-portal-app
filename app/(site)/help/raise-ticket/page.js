import React from 'react'
import { Col, Container, Row } from "@/bootstrap";
import RaiseTicketForm from './RaiseTicketForm';
import Image from 'next/image';
import LetterBanner from '@/assets/image/letter.svg'


export const metadata = {
  title: "Raise Ticket"
}




function RaiseTicketPage() {
  return (
    <Container className='py-4'>
      <Row>
        <Col className='col-12 col-md-7'>
          <RaiseTicketForm />

        </Col>
        <Col  className='col-md-5 d-none d-md-block'>
          <Image src={LetterBanner} alt='Letter Banner' style={{ maxHeight: '60vh', maxWidth: '50vw' }} />
        </Col>
      </Row>
    </Container>
  )
}

export default RaiseTicketPage