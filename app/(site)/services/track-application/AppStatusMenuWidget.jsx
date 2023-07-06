'use client'

import React from 'react'
import { Button, Form, FormGroup, Stack } from 'react-bootstrap'
import menus from "./menus.json";
import { useForm } from 'react-hook-form';


const RenderMenus = ({appType, register}) => {

    let l
    if (appType) {
        l = menus.find((v) => v.code === appType)

    } else {
        l = menus[0]
    }

    return (
        l.subMenus.map((menu, idx) => (
            <FormGroup key={idx}>
                <Form.Label>{menu.label}</Form.Label>
                <Form.Control id={`${menu.name}-field`} {...register(`${menu.name}`)} type={menu.type} />
            </FormGroup>
        ))
    )
}


function AppStatusMenuWidget() {

    const { handleSubmit, register, formState: { errors }, getValues, reset } = useForm()
    const [appType, setAppType] = React.useState()
    const submitForm = (data) => {
        console.log(data);
    }

    const handleChange = () => {
        setAppType(getValues("appType"))
        
    }

    return (
        <Form onSubmit={handleSubmit(submitForm)}>
            <Stack gap={3}>
                <FormGroup>
                    <Form.Select {...register("appType")} defaultValue={appType} onChangeCapture={handleChange} >
                        {
                            menus.map((app, idx) => (
                                <option key={idx} value={app.code}>{app.name}</option>
                            ))
                        }
                    </Form.Select>
                </FormGroup>
                
                    <RenderMenus appType={appType} register={register} />
                
                <Button type='submit' variant='warning'>Track Application</Button>
            </Stack>
        </Form>
    )
}

export default AppStatusMenuWidget