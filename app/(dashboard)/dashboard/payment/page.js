import React from 'react'
import { Col, Container, Row, Stack, Button, Alert } from "@/bootstrap";

function PaymentPage({ searchParams }) {
    /*
        stage 1: order will be created on the payment gateway side through backend and order id will be returned
        stage 2: application data will be fetched from server and payment will be initiated against the order id at stage 1
        state 3: a payment signature verification will be done through handler function and shown status of the payment and update it to the server
    */

    if (!searchParams['arn']) {
        return (
            <Container className='py-4 text-center'>
                <h3>Sorry! application not found. contact web admin</h3>
            </Container>
        )
    }

    return (
        <Container className='py-4'>
            <Row>
                <Alert variant='warning'>
                    Payments once made for availing passport services will not be refunded. If the payment is 
                    is successfully done please do not pay again
                </Alert>
                <Col className='col-12 col-md-6'>
                    <ul className='gap-2'>
                        <li>
                            <span>Application Reference Number(ARN): </span>
                            <h6 className='text-success'>{"23-9878455"}</h6>
                        </li>

                        <li>
                            <span>Given Name</span>
                            <h6 className='text-success'>{"Bhaskar Ghosh"}</h6>
                        </li>
                        <li>
                            <span>Service Type</span>
                            <h6 className='text-success'>{"NORMAL"}</h6>
                        </li>
                        <li>
                            <span>Type of Appliction</span>
                            <h6 className='text-success'>{"NEW PASSPORT"}</h6>
                        </li>
                    </ul>
                </Col>
                <Col className='col-12 col-md-6'>
                    <Stack gap={2}>
                        <ul className='gap-2'>
                            <li>
                                <span>Total Fee: </span>
                                <h6 className='text-success'>{"Rs. 1500.00"}</h6>
                            </li>

                            <li>
                                <strong>Amount to be paid: </strong>
                                <h6 className='text-danger'>{"Rs. 1500.00"}</h6>
                            </li>
                        </ul>
                        <Button className='w-50' variant='warning'>
                            <strong>Pay Fee</strong>
                        </Button>
                    </Stack>
                </Col>
            </Row>
        </Container>
    )
}

export default PaymentPage