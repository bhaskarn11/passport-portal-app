import React from 'react'
import { Stack } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form'
import MultistepFormNavigator from './MultistepFormNavigator'
import { useStepper } from './StepperContext'



function PassportPreview() {
  const { formState, getValues } = useFormContext()
  const { nextStep } = useStepper()
  return (
    <Stack>
      <h3>Preview and Submit</h3>
      <MultistepFormNavigator handleNextStep={() => nextStep()} />
    </Stack>
  )
}

export default PassportPreview