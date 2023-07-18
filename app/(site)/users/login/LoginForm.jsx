'use client'

import React from 'react'
import { Button, Form, FormGroup, Stack } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { signIn } from "next-auth/react";
import Link from 'next/link'




function LoginForm({ csrfToken }) {

    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const submitForm = async (data) => {
        await signIn('credentials', {
            ...data,
            redirect: true,
            callbackUrl: "/dashboard",
        })
        // console.log(res);
        reset()
    }

    return (
        <Form onSubmit={handleSubmit(submitForm)}>
            <Form.Control {...register("csrfToken")} defaultValue={csrfToken} hidden />
            <FormGroup>
                <Form.Label>Email</Form.Label>
                <Form.Control isInvalid={errors.email}
                    {...register("username", { required: true })} type='email' />
            </FormGroup>
            <FormGroup className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control isInvalid={errors.password}
                    {...register("password", { required: true })} type='password' />
            </FormGroup>
            <Stack direction='horizontal' gap={3} className='mb-3'>
                <span>
                    <Link href={"/users/register"}>Register (new user)</Link>
                </span>
                <span className='vr'></span>
                <span>
                    <Link href="/users/forgot-password">Having trouble login?</Link>
                </span>
            </Stack>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    )
}

export default LoginForm