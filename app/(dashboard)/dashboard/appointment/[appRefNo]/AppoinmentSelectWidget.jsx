'use client'

import React from 'react'
import { Accordion, Button, Form, FormGroup, ListGroup, ListGroupItem, Stack } from 'react-bootstrap'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'
import { useForm } from 'react-hook-form'


function CustomLabel({ app }) {
    return (
        <ListGroup.Item>
            <h4>{app.poName}</h4>
        </ListGroup.Item>
    )
}


function AppoinmentSelectWidget({ appointments }) {

    const { register, handleSubmit, setValue, getFieldState } = useForm()


    const submitForm = (data) => {
        console.log(data);
    }

    return (
        <Form onSubmit={handleSubmit(submitForm)}>
            <Stack gap={2} >
                <Accordion style={{ overflowY: 'scroll', height: '60vh' }} alwaysOpen>
                    {
                        appointments.map((a, i) => (
                            <Accordion.Item onClick={() => setValue("poCode", a.poCode)} eventKey={a.poCode} key={i}>
                                <Accordion.Header>
                                    {a.poName}
                                </Accordion.Header>
                                <AccordionBody>
                                    <h6>Available Dates</h6>
                                    {
                                        a.dates.map((d, j) => (
                                            <Form.Check key={j} inline
                                                value={d.date} type='radio'
                                                className={d.available > (a.capacity * 3 / 4) ? "text-warning" : "text-success"}
                                                label={<strong>{d.date}</strong>} id={`date-field-${i + 1}-${j + 1}`} {...register("date")}
                                            />
                                        ))
                                    }
                                </AccordionBody>
                            </Accordion.Item>
                        ))
                    }
                </Accordion>
                <div className='sticky-bottom py-3 bg-white'>
                    <Button className='w-100' type='submit' variant='warning'>Book Appointment</Button>
                </div>

            </Stack>
        </Form>
    )
}

export default AppoinmentSelectWidget