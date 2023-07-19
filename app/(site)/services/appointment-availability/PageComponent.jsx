'use client'


import React from 'react'
import { Badge, Button, Card, Col, Form, FormGroup, Row, Stack } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead'
import PublicService from '@/lib/api/public'


function PageComponent({ passportOffices }) {


    const [centers, setCenters] = React.useState([])
    const [option, setOption] = React.useState()
    const api = new PublicService()

    const handleChange = (option) => {
        setOption(option[0])
        // console.log(option[0]);
    }

    const handleButtonClick = async () => {
        const r = await api.getPspOffices(option)
        setCenters(r)
    }

    return (
        <Form >
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
                                                {c.po_code}
                                                {/* <Badge className='ms-2' bg='success'>{c.applicationType}</Badge> */}
                                            </Card.Title>
                                            <p className='text-muted'>{c.address}</p>
                                            <strong>Appintment Capacity: {c.appointment_capacity}</strong>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </Form>
    )
}

export default PageComponent