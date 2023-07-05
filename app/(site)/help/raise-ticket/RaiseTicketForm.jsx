'use client'

import React from 'react'
import { Form, FormGroup, Stack, Button } from 'react-bootstrap'
import CategorySelector from './CategorySelector';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'


const scheme = yup.object({
    isPassportAvailable: yup.string(),
    refNo: yup.string(),
    name: yup.string().required(),
    email: yup.string().email().required(),
    mobileNumber: yup.string().required(),
    description: yup.string().required(),
    issueCategory: yup.number(),
    issueSubCategory: yup.number()
})

function RaiseTicketForm() {


    const methods = useForm({ resolver: yupResolver(scheme) })
    const { register, handleSubmit, formState: { errors }, reset } = methods

    const submitForm = (data) => {
        console.log(data);
    }

    return (
        <FormProvider {...methods}>
            <Form onSubmit={handleSubmit(submitForm)}>
                <Stack gap={4}>
                    <h4>Raise Ticket/Feedback</h4>
                    <FormGroup>
                        <Form.Check id='passport-available-checkbox'
                            type='checkbox' label='Passport Available' inline
                            {...register("isPassportAvailable")}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Form.Label>Passport Number/File Number/ARN</Form.Label>
                        <Form.Control {...register("refNo")} required name='refNo' type='text' />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Applicant's Name</Form.Label>
                        <Form.Control {...register("name")} name='name' type='text' />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control {...register("mobileNumber")} name='mobileNumber' type='text' />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control {...register("email")} name='email' type='email' />
                    </FormGroup>
                    <CategorySelector />
                    <FormGroup>
                        <Form.Label>Description</Form.Label>
                        <Form.Control {...register("description")} name='description' as="textarea" />
                    </FormGroup>
                    <FormGroup>
                        <Form.Label>
                            Attachment
                        </Form.Label>
                        <Form.Control type='file' accept='.pdf,.docx, .jpg, .jpeg, .png' {...register("attachment")} />
                    </FormGroup>
                    <Stack direction='horizontal' gap={3}>
                        <Button type='submit' >Create Ticket</Button>
                        <Button onClick={() => reset() } variant='outline-primary'>Reset</Button>
                    </Stack>
                </Stack>
            </Form>
        </FormProvider>
    )
}

export default RaiseTicketForm