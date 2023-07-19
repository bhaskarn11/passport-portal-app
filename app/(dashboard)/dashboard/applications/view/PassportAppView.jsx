'use client'

import React from 'react'
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap'

function PassportAppView({ app }) {


    return (
        <Container className='py-4'>
            <Form>
                <Row className='gx-3 gy-3'>
                    {
                        Object.entries(app).map(([key, value], i) => (
                            <Col key={i} className='col-12 col-md-3'>
                                <FormGroup>
                                    <Form.Label>{key.replace("_", " ").toUpperCase()}:</Form.Label>
                                    <Form.Control disabled value={value} />
                                </FormGroup>
                            </Col>
                        ))
                    }
                </Row>
            </Form>
        </Container>
    )
}

export default PassportAppView