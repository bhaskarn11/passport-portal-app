'use client'

import React from 'react'
import { Form, FormGroup, FormSelect, Stack } from '@/bootstrap'
import menus from "./menus.json";


function AppStatusMenuWidget({ appType }) {
    return (
        <Form method='GET'>

            <FormGroup>
                <FormSelect defaultValue={appType} onChange={(e) => e.target.form.submit()} name='appType'>
                    {
                        menus.map((app, idx) => (
                            <option key={idx} value={app.code}>{app.name}</option>
                        ))
                    }
                </FormSelect>
            </FormGroup>

        </Form>
    )
}

export default AppStatusMenuWidget