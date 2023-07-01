'use client'

import React from 'react'
import { FormSelect, Row, Stack } from '@/bootstrap'
import states from "./states.json"


function Selector() {

    const [state, setState] = React.useState(states[0].code)
    const handleStateChange = (e) => {
        setState(e.target.value)
        
    }
    return (
        <Stack gap={3}>
            <FormSelect onChange={handleStateChange}>
                {
                    states.map((s, idx) => (
                        <option key={idx} defaultValue={state} value={s.code}>{s.name}</option>
                    ))
                }
            </FormSelect>

            <FormSelect>
                {
                    states.find((v) => v.code === state).policeDistricts.map((dis, idx) => (
                        <option value={idx} key={idx}>{dis}</option>
                    ))
                }
            </FormSelect>
        </Stack>
    )
}

export default Selector