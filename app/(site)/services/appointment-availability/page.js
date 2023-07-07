'use client'

import React from 'react'
import { Badge, Button, Card, Col, Container, Form, FormGroup, FormLabel, FormSelect, Row, Stack } from 'react-bootstrap'
import passportOffices from './passportOffices.json'
import { Typeahead } from '@/bootstrap'
import psps from "./psp-center-details.json";

function AppointmentAvailPage({ searchParams }) {

    const [centers, setCenters] = React.useState([])
    const [option, setOption] = React.useState()

    const handleChange = (option) => {
        setOption(option[0])
        // console.log(option[0]);
    }

    const handleButtonClick = () => {
        setCenters(psps.filter((p, _) => p.passportOffice === option)) // in production this will be fetched from the API

    }



    return (
        <Container className='py-4'>
            <Form>
                <Row>
                    <Col className='col-12 col-md-4 mx-auto'>
                        <Stack gap={3}>
                            <FormGroup>
                                <Typeahead
                                    id='passport-office-lookup'
                                    options={passportOffices}
                                    onChange={handleChange}
                                    placeholder="Search for passport office city..."
                                />
                            </FormGroup>
                            <Button onClick={handleButtonClick} variant='warning'>Check Appointment Availability</Button>
                        </Stack>
                    </Col>
                    <Col className='col-12 col-md-8'>
                        <Row className='gy-2'>
                            {
                                centers.map((c, i) => (
                                    <Col key={i} className='col-6'>
                                        <Card className='flush' border='warning'>
                                            <Card.Body>
                                                <Card.Title as="h6">
                                                    {c.location}<Badge className='ms-2' bg='success'>{c.applicationType}</Badge>
                                                </Card.Title>
                                                <p className='text-muted'>{c.address}</p>
                                                <strong>Appintment Released: {c.appointmentsReleased}</strong>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default AppointmentAvailPage