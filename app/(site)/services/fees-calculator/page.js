import React from 'react'
import { Alert, Button, Col, Container, Form, FormGroup, FormLabel, FormSelect, Row } from '@/bootstrap'

const applicationTypes = [
  {
    name: "Passport",
    value: "Passport"
  },
  {
    name: "PCC",
    value: "PCC"
  },
  {
    name: "Identity Certificate",
    value: "IdentityCertificate"
  },
  {
    name: "Surrender Certificate",
    value: "SurrenderCertificate"
  },
  {
    name: "Background Verification for GEP",
    value: "GOES"
  }
]

const typesOfServices = [
  {
    name: "Fresh",
    value: "FRESH"
  },
  {
    name: "Renew",
    value: "RENEW"
  }
]

const candidateAgeGroup = [
  {
    name: "Less than 15",
    value: 1
  },
  {
    name: "18 or Above",
    value: 2
  },
  {
    name: "Between 15 and 18",
    value: 3
  }
]

const requiredSchemes = [
  'Normal', 'Tatkal'
]

function FeesCalculatorPage() {
  return (
    <Container className='py-3'>
      <Row>
        <Col className='col-md-7 col-12'>
          <Form className='gy-2'>
            <FormGroup>
              <FormLabel>Application type: </FormLabel>
              <FormSelect>
                {
                  applicationTypes.map((type, idx) => (
                    <option key={idx} value={type.value}>{type.name}</option>
                  ))
                }
              </FormSelect>
            </FormGroup>
            <FormGroup>
              <FormLabel>Type of Service: </FormLabel>
              <FormSelect>
                {
                  typesOfServices.map((type, idx) => (
                    <option key={idx} value={type.value}>{type.name}</option>
                  ))
                }
              </FormSelect>
            </FormGroup>
            <FormGroup>
              <FormLabel>Age of Applicant: </FormLabel>
              <FormSelect>
                {
                  candidateAgeGroup.map((type, idx) => (
                    <option key={idx} value={type.value}>{type.name}</option>
                  ))
                }
              </FormSelect>
            </FormGroup>
            <Button className='mt-2' variant='warning'><span className='font-weight-bold'>Get Fee Details</span></Button>
          </Form>
        </Col>
        <Alert variant="info">
          <strong>Note: </strong>
          For fresh Passport application, a rebate of 10% on basic Passport fee will be applicable for minor applicants (age {"<="} 8 years) and senior citizens (age {">"} 60 years).
        </Alert>
      </Row>
    </Container>
  )
}

export default FeesCalculatorPage