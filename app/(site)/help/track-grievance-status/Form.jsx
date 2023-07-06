'use client'

import React from 'react'
import { Button, Form, FormGroup, Stack } from 'react-bootstrap'
import { useForm } from 'react-hook-form'


const formFields = [
    {
        label: "Service Request Number",
        name: "serviceRequestNumber",
        type: "text"
    },
    {
        label: "Application Reference Number",
        name: "appRefNum",
        type: "text"
    },
    {
        label: "File Number",
        name: "fileNum",
        type: "text"
    },
    {
        label: "Date of Birth",
        name: "dob",
        type: "date"
    }
]



function StatusForm() {

    const { handleSubmit, register, formState: {errors} } = useForm()

    const submitForm = (data) => {
        console.log(data);
    }

    return (
        <Form onSubmit={handleSubmit(submitForm)}>
            <Stack gap={4}>
                {
                    formFields.map((field, idx) => (
                        <FormGroup key={idx}>
                            <Form.Label>{field.label}</Form.Label>
                            <Form.Control
                                {...register(field.name,{ required: true })}
                                isInvalid={errors[`${field.name}`]}
                                type={field.type}
                                id={field.label.replace(/\s/g, "-").toLowerCase().concat("-field")} />
                        </FormGroup>
                    ))
                }
                <Button type='submit'>Get Status</Button>
            </Stack>
        </Form>
    )
}

export default StatusForm