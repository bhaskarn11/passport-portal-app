import React from 'react'
import { Col, Container, ListGroup, Row } from "@/bootstrap";
import menus from './menus.js'
import DashMenuCards from './DashMenuCards';

function DashboardPage() {
  return (
    <Container className='py-4'>
      <Row className='gy-4'>
        {
          menus.map((menu, idx) => (
            <Col className='col-12 col-md-6' key={idx}>

              <DashMenuCards menu={menu}/>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default DashboardPage