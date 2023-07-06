'use client'

import { useParams } from 'next/navigation';
import React from 'react'

import { Col, Container, Row, Form, FormGroup, Button, Stack } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import AppoinmentSelectWidget from './AppoinmentSelectWidget';

/*
    in this page we will fetch the application details 
    and let user select RPO (Regional Passport Office) then book the appointment
    and show appointment details
*/

const rpoDetails = [
    {
        id: "1",
        name: "Kolkata",
    },
    {
        id: "2",
        name: "Mumbai",
    },
    {
        id: "3",
        name: "Bangaluru",
    }
]

const app = [
    {
        poName: "PSK Kolkata",
        poCode: "KOL1",
        dates: [
            {
                date: "12-02-2023",
                available: 20
            },
            {
                date: "15-02-2023",
                available: 19
            },
            {
                date: "16-02-2023",
                available: 20
            },
            {
                date: "17-02-2023",
                available: 19
            },
            {
                date: "18-02-2023",
                available: 20
            },
            {
                date: "19-02-2023",
                available: 19
            }
        ],
        capacity: 25
    },
    {
        poName: "POPSK Serampur",
        poCode: "KOL-PO1",
        dates: [
            {
                date: "10-02-2023",
                available: 20
            },
            {
                date: "09-02-2023",
                available: 19
            }
        ],
        capacity: 30
    },
    {
        poName: "POPSK Chandannagar",
        poCode: "KOL-PO2",
        dates: [
            {
                date: "11-02-2023",
                available: 20
            },
            {
                date: "09-02-2023",
                available: 19
            }
        ],
        capacity: 30
    }
]

function BookAppointmentPage() {

    const params = useParams()
    const { register, handleSubmit } = useForm()
    const [appointments, setAppointments] = React.useState([])


    const submitForm = (data) => {
        console.log(data);
        setAppointments(app)
    }

    return (
        <Container className='my-3'>
            <Row >
                <Col className='col-12 col-md-6'>
                    <Form onSubmit={handleSubmit(submitForm)}>
                        <Stack gap={2}>
                            <FormGroup>
                                <Form.Label>Select RPO</Form.Label>
                                <Form.Select {...register("rpoLocation")}>
                                    {
                                        rpoDetails.map((rpo, i) => (
                                            <option key={i} value={rpo.id} >{ rpo.name }</option>

                                        ))
                                    }
                                </Form.Select>
                            </FormGroup>
                            <Button type='submit'>Search Appoinment</Button>
                        </Stack>
                    </Form>
                </Col>
                <Col className='col-12 col-md-6'>
                    <h5>Available PSK/POPSK's</h5>
                    { appointments.length != 0 ? <AppoinmentSelectWidget appointments={appointments} /> : (
                        <h4 className='text-center'>
                            No appointments available/RPO Selected (please select an RPO from menu and search)
                        </h4>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default BookAppointmentPage