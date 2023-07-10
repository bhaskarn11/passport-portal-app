'use client'
import React from 'react'
import { Button, Card, Col, Container, Form, Row, Stack } from 'react-bootstrap'
import states from "./states.json"
import { useForm } from 'react-hook-form'


function LocatePoliceStation() {

    const [state, setState] = React.useState(states[0].code)
    const handleStateChange = (e) => {
        setState(e.target.value)

    }

    const { handleSubmit, register } = useForm()

    const submitForm = (data) => {
        console.log(data);
    }

    return (
        <Container className='py-4'>
            <Row className='py-3'>
                <Col className='col-md-6 col-12'>
                    <Form onSubmit={handleSubmit(submitForm)}>
                        <Stack gap={3}>
                            <h4>Find Police Your Station</h4>
                            <Stack gap={3}>
                                <Form.Select {...register("state")} onChange={handleStateChange}>
                                    {
                                        states.map((s, idx) => (
                                            <option key={idx} defaultValue={state}
                                                value={s.code}
                                            >
                                                {s.name}
                                            </option>
                                        ))
                                    }
                                </Form.Select>

                                <Form.Select {...register("district")}>
                                    {
                                        states.find((v) => v.code === state).policeDistricts.map((dis, idx) => (
                                            <option value={dis} key={idx}>
                                                {dis}
                                            </option>
                                        ))
                                    }
                                </Form.Select>
                            </Stack>
                            <Button type='submit' variant='warning'>Search Police station</Button>
                        </Stack>
                    </Form>
                </Col>
                <Col className='col-md-6 col-12'>
                    <h4>Results will be shown here</h4>
                </Col>
            </Row>

        </Container>
    )
}

export default LocatePoliceStation