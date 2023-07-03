import React from 'react'
import { Alert, Button, Col, Container, Form, FormGroup, FormLabel, FormSelect, Row } from '@/bootstrap'




const applicationTypes = [
  {
    name: "Passport",
    value: "Passport",
    options: [
      {
        label: "Fresh",
        value: "fresh",
        options: {}
      },
      {
        label: "Reissue",
        value: "reissue",
        options: {}
      }
    ]
  },
  {
    name: "PCC",
    value: "PCC",
    option: []
  },
  {
    name: "Identity Certificate",
    value: "IdentityCertificate",
    options: [
      {
        label: "Fresh",
        value: "fresh"
      },
      {
        label: "Reissue",
        value: "reissue"
      }
    ]
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
            {/* <FormGroup>
              <FormLabel>Type of Service: </FormLabel>
              <FormSelect>
                {
                  typesOfServices.map((type, idx) => (
                    <option key={idx} value={type.value}>{type.name}</option>
                  ))
                }
              </FormSelect>
            </FormGroup> */}
            {/* <FormGroup>
              <FormLabel>Age of Applicant: </FormLabel>
              <FormSelect>
                {
                  candidateAgeGroup.map((type, idx) => (
                    <option key={idx} value={type.value}>{type.name}</option>
                  ))
                }
              </FormSelect>
            </FormGroup> */}
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