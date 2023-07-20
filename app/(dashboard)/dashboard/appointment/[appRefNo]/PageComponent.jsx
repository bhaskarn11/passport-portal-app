'use client'

import React from 'react'
import AppoinmentSelectWidget from './AppoinmentSelectWidget';
import { Col, Row, Form, FormGroup, Button, Stack } from "react-bootstrap";
import PublicService from '@/lib/api/public'
import { useForm } from 'react-hook-form';

function Page({ rpos, app }) {


    const { register, handleSubmit } = useForm()
    const [appointments, setAppointments] = React.useState([])

    const api = new PublicService()


    const submitForm = async (data) => {
        const res = await api.getAppointementSlots(data.rpoLocation)

        setAppointments(res)
        
    }

    return (
        <Row className='gy-4' >
            <Col className='col-12 col-md-6'>
                <Form onSubmit={handleSubmit(submitForm)}>
                    <Stack gap={2}>
                        <FormGroup>
                            <Form.Label>Select RPO</Form.Label>
                            <Form.Select {...register("rpoLocation")}>
                                {
                                    rpos.map((r, i) => (
                                        <option key={i}value={r}>{r}</option>

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
                {appointments.length != 0 ? <AppoinmentSelectWidget appointments={appointments} /> : (
                    <h4 className='text-center'>
                        No appointments available/RPO Selected (please select an RPO from menu and search)
                    </h4>
                )}
            </Col>
        </Row>
    )
}

export default Page