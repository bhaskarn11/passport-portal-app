import React from 'react'
import { Col, Container, Row } from "@/bootstrap";
import AppListCard from "./AppListCard"
import { applications } from "@/data/applications";




function ApplicationStatusPage() {

  /*
    all application filed by the particular user will be fetched
    and shown in this page (it will contain applications accross all stages i.e. submitted, drafted, pending)
  */

  return (
    <Container className='py-4'>
      <Row className='gy-3'>

        {
          applications.map((v, i) => (
            <Col key={i} className='col-12 col-md-6'>
              <AppListCard app={v} />
            </Col>
          ))
        }

      </Row>
    </Container>
  )
}

export default ApplicationStatusPage