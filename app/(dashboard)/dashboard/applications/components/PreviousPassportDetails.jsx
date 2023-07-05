import React from 'react'
import { Form, FormGroup, Stack } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form'
import MultistepFormNavigator from './MultistepFormNavigator'
import { useStepper } from './StepperContext'


function PreviousPassportDetails() {

  const { register, trigger  } = useFormContext()
  const { nextStep } = useStepper()
  
  const handleNextStep = () => {
    nextStep()
  }

  return (
    <Stack gap={3}>


      <Form.Check reverse label="Have you ever held any Identity Cetificate?"
        id='identity-cert-check' {...register("prevPspDetails.isIdentityCertHeld")} />


      <Form.Check  reverse label="Ever held Diplomatic Passport before?"
        id='diplomatic-psp-check' {...register("prevPspDetails.isDiplomaticPassHeld")} />

      

      <Form.Check reverse label="Have you ever applied for passport before?"
        id='applied-psp-before-check' {...register("prevPspDetails.appliedPassBefore")} />
      <MultistepFormNavigator handleNextStep={handleNextStep} />
    </Stack>
  )
}

export default PreviousPassportDetails