import React from 'react'
import { Button, Card, Col, Container, Form, Row, Stack } from '@/bootstrap'
import Selector from './Selector'


function LocatePoliceStation() {

  return (
    <Container className='py-4'>
      <Row>
        <Form>
          <Stack gap={3}>
            <h4>Find Police Your Station</h4>
            <Selector />
            <Button variant='warning'>Search Police station</Button>
          </Stack>
        </Form>
      </Row>
      <Row>
        <Col className='col-12 col-md-6'>
          {/* <Card>
            <Body>
              <Title>{}</Title>
            </Body>
          </Card> */}
        </Col>
      </Row>
    </Container>
  )
}

export default LocatePoliceStation