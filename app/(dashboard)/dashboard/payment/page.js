import React, { Suspense } from 'react'
import { Col, Container, Row, Stack, Button, Alert } from "@/bootstrap";
import ApplicationService from "@/lib/api/application";
import { getServerSession } from 'next-auth'
import NoDataBanner from '../NoDataBanner'
import { options } from '@/lib/auth.options'
import Loading from '../loading';


async function PaymentPage({ searchParams }) {
    /*
        stage 1: order will be created on the payment gateway side through backend and order id will be returned
        stage 2: application data will be fetched from server and payment will be initiated against the order id at stage 1
        state 3: a payment signature verification will be done through handler function and shown status of the payment and update it to the server
    */

    if (!searchParams['arn'] || searchParams['arn'].lenght === 0) {
        return (
            <NoDataBanner />
        )
    }

    let application = null
    const session = await getServerSession(options)
    if (session && session.token) {

        const api = new ApplicationService(session.token.accessToken)
        application = await api.getApplication(searchParams['arn'])
    }



    


    return (
        <Container className='py-4'>
            <Suspense fallback={<Loading />}>
                <Row>
                    <Alert variant='warning'>
                        Payments once made for availing passport services will not be refunded. If the payment is
                        is successfully done please do not pay again
                    </Alert>
                    <Col className='col-12 col-md-6'>
                        <ul className='gap-2'>
                            <li>
                                <span>Application Reference Number(ARN): </span>
                                <h6 className='text-success'>{application.arn}</h6>
                            </li>

                            <li>
                                <span>Given Name</span>
                                <h6 className='text-success'>{application.first_name} {application.last_name}</h6>
                            </li>
                            <li>
                                <span>Application Type</span>
                                <h6 className='text-success'>{application.application_type}</h6>
                            </li>
                            <li>
                                <span>Type of Appliction</span>
                                <h6 className='text-success'>{application.scheme_type}</h6>
                            </li>
                        </ul>
                    </Col>
                    <Col className='col-12 col-md-6'>
                        <Stack gap={2}>
                            <ul className='gap-2'>
                                <li>
                                    <span>Total Fee: </span>
                                    <h6 className='text-success'>{application.fee}</h6>
                                </li>

                                <li>
                                    <strong>Amount to be paid: </strong>
                                    <h6 className='text-danger'>{application.fee}</h6>
                                </li>
                            </ul>
                            <Button className='w-50' variant='warning'>
                                <strong>Pay Fee</strong>
                            </Button>
                        </Stack>
                    </Col>
                </Row>
            </Suspense>
        </Container>
    )
}

export default PaymentPage