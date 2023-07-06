import React from 'react'
import { Button, Col, Container, Form, FormControl, FormGroup, FormLabel, Row, Stack } from "@/bootstrap";
import StatusForm from './Form';

export const metadata = {
  title: "Track Grievance Status"
}

const formFields = [
  {
    label: "Service Request Number",
    name: "serviceRequestNumber",
    type: "text"
  },
  {
    label: "Application Reference Number",
    name: "appRefNum",
    type: "text"
  },
  {
    label: "File Number",
    name: "fileNum",
    type: "text"
  },
  {
    label: "Date of Birth",
    name: "dob",
    type: "date"
  }
]



function TrackGrievanceStatusPage() {
  return (
    <Container className='py-4'>
      <Row>
        <Col className='d-flex justify-content-center'>
          <h4>Track Grievance/Feedback Status</h4>
        </Col>
      </Row>
      <StatusForm />
    </Container>
  )
}

export default TrackGrievanceStatusPage