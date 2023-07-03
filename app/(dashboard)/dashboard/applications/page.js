import React from 'react'
import { Col, Container, Row } from "@/bootstrap";
import AppListCard from "./AppListCard"

function ApplicationStatusPage() {
  return (
    <Container className='py-4'>
      <Row className='gy-3'>

        {
          ["new-passport", "renew-passport", "police-clearance"].map((v, i) => (
            <Col key={i} className='col-12 col-md-6'>
              <AppListCard appSlug={v} />
            </Col>
          ))
        }

      </Row>
    </Container>
  )
}

export default ApplicationStatusPage