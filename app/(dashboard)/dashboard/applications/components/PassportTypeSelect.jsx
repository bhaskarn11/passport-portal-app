'use client'
import React from 'react'
import { Form, FormGroup, Stack } from 'react-bootstrap'

import { useFormContext } from "react-hook-form";
import { useStepper } from './StepperContext';
import MultistepFormNavigator from './MultistepFormNavigator';



function PassportTypeSelect() {


  const { register, trigger, formState: { errors } } = useFormContext()
  const { nextStep } = useStepper()

  const handleNextStep = async () => {
    try {
      let valid = await trigger(['appType.applicationType', 'appType.schemeType',
        'appType.bookletType'])
      //console.log(errors);

      valid && nextStep()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Stack gap={2}>
      <FormGroup>
        <Form.Check inline {...register("appType.applicationType")}
          isInvalid={errors.appType?.applicationType} type='radio' label="New"
          value="new" id='application-type-field-1' />
        <Form.Check inline {...register("appType.applicationType")}
          isInvalid={errors.appType?.applicationType}
          type='radio' label="Re-issue" value="reissue" id='application-type-field-2' />

      </FormGroup>
      <FormGroup>
        <Form.Check inline {...register("appType.schemeType")}
          isInvalid={errors.appType?.schemeType}
          type='radio' label="Normal" value="normal" id='scheme-type-field-1' />
        <Form.Check inline {...register("appType.schemeType")}
          isInvalid={errors.appType?.schemeType}
          type='radio' label="Tatkal" value="tatkal" id='scheme-type-field-2' />
      </FormGroup>
      <FormGroup>
        <Form.Check inline {...register("appType.bookletType")}
          isInvalid={errors.appType?.bookletType}
          type='radio' label="36 Pages" value="36" id='booklet-type-field-1' />
        <Form.Check inline {...register("appType.bookletType")}
          isInvalid={errors.appType?.bookletType}
          type='radio' label="60 Pages" value="60" id='booklet-type-field-2' />
      </FormGroup>
      <MultistepFormNavigator handleNextStep={handleNextStep} />
    </Stack>
  )
}

export default PassportTypeSelect