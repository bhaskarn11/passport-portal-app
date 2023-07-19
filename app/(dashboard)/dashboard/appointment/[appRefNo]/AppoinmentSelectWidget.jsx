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

    const { register, handleSubmit, setValue, formState: { isValid } } = useForm()


    const submitForm = (data) => {
        console.log(data);
    }

    return (
        <Form onSubmit={handleSubmit(submitForm)}>
            <Stack gap={2} >
                <ul className='legend align-middle'>
                    <li>
                        <span className='bg-danger'></span>Very few left
                    </li>
                    <li>
                        <span className='bg-warning'></span>Filling fast
                    </li>
                    <li>
                        <span className='bg-success'></span>Available
                    </li>
                </ul>
                <style jsx>
                    {`
                        .legend {
                            list-style: none;
                        }
                        .legend span {
                            border: 1px solid #ccc; float: left; width: 15px; height: 15px; margin-right: 4px; margin-top: 4px
                        }
                        .legend li {
                            float: left;
                            margin-right: 10px;
                        }
                    `}
                </style>
                <Accordion style={{ overflowY: 'scroll', height: '60vh' }} alwaysOpen>
                    {
                        appointments.map((a, i) => (
                            <Accordion.Item eventKey={a.po_code} key={i}>
                                <Accordion.Header>
                                    {a.po_code}
                                </Accordion.Header>
                                <AccordionBody>
                                    <h6>Available Dates</h6>
                                    {
                                        a.appointment_schedules.map((d, j) => (
                                            <Form.Check key={j} inline
                                                value={d.date} type='radio'
                                                onChangeCapture={() => setValue("poCode", d.po_code)}
                                                className={d.available_slots < (a.appointment_capacity * 0.25) ? "text-danger" : d.available_slots < (a.appointment_capacity * 0.5) ? "text-warning" : "text-success"}
                                                label={<strong>{d.date}</strong>} id={`date-field-${i + 1}-${j + 1}`} {...register("date", { required: true })}
                                            />
                                        ))
                                    }
                                </AccordionBody>
                            </Accordion.Item>
                        ))
                    }
                </Accordion>
                <div className='sticky-bottom py-3 bg-white'>
                    <Button disabled={!isValid} className='w-100' type='submit' variant='warning'>Book Appointment</Button>
                </div>

            </Stack>
        </Form>
    )
}

export default AppoinmentSelectWidget