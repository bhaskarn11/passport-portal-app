'use client'
import React from 'react'
import { FormGroup, FormCheck, FormSelect } from '@/bootstrap'

const passportOffices = [
    'Ahmedabad',
    'Bhubaneshwar',
    'Hyderabad',
    'Kolkata',
    'Mumbai',
    'Cochin',
    'Coimbator',
    'CHennai',
    'Bengalore',
    'Dehradun',
    'Guwahati',
    'Pune'
]


function PassportOfficeSelector() {

    const [passOfficeOption, setPassOfficeOption] = React.useState('CPV Delhi')

    
    const handleOfficeOptionChange = (e) => {
        setPassOfficeOption(e.target.value)
        
    }


    return (
        <FormGroup>
            <FormCheck
                inline
                id='inline-radio-1'
                type='radio'
                checked={passOfficeOption === 'CPV Delhi'}
                name='registerToApply'
                onChange={handleOfficeOptionChange}
                value="CPV Delhi"
                label="CPV Delhi"
            />
            <FormCheck
                inline
                id='inline-radio-2'
                checked={passOfficeOption === 'Passport Office'}
                onChange={handleOfficeOptionChange}
                type='radio'
                value="Passport Office"
                name='registerToApply'
                label="Passport Office"
            />
            {
                passOfficeOption === 'Passport Office' ? (
                    <FormSelect>
                        {
                            passportOffices.map((office, idx) => (
                                <option key={idx} value={office}>{office}</option>
                            ))
                        }
                    </FormSelect>
                ) : ""
            }
        </FormGroup>
    )
}

export default PassportOfficeSelector