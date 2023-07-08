'use client'
import React from 'react'
import { FormGroup, FormCheck, FormSelect } from '@/bootstrap'
import { useFormContext } from 'react-hook-form'

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

    const { register, formState: {errors} } = useFormContext()

    const handleOfficeOptionChange = (e) => {
        setPassOfficeOption(e.target.value)
        
    }


    return (
        <FormGroup className='mx-auto'>
            <FormCheck
                inline
                isInvalid={errors.registerToApply}
                id='inline-radio-1'
                {...register("registerToApply")}
                type='radio'
                checked={passOfficeOption === 'CPV Delhi'}
                
                onChange={handleOfficeOptionChange}
                value="CPV Delhi"
                label="CPV Delhi"
            />
            <FormCheck
                inline
                isInvalid={errors.registerToApply}
                id='inline-radio-2'
                {...register("registerToApply")}
                checked={passOfficeOption === 'Passport Office'}
                onChange={handleOfficeOptionChange}
                type='radio'
                value="Passport Office"
               
                label="Passport Office"
            />
            {
                passOfficeOption === 'Passport Office' ? (
                    <FormSelect isInvalid={errors.pspOfficeCity} {...register("pspOfficeCity")}>
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