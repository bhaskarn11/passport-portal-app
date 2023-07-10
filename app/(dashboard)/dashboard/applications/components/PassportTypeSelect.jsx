'use client'
import React from 'react'
import { Alert, Form, FormGroup, Stack } from 'react-bootstrap'

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

      <Alert variant='info'>
        <strong>Note: </strong>
        While applying under Fresh issuance category please make<br />
        sure you never held a passport of the applied Category.
        <hr />
        <ul>
          <li>
            Please read the Passport Instruction Booklet carefully before filling the application form.<br />
          </li>
          <li>
            Furnishing of incorrect information/suppression of information would lead to rejection of <br />
            application and would attract penal provisions as prescribed under the Passports Act, 1967.<br />
          </li>
          <li>
            Please produce your original documents at the time of submission of the form.
          </li>
        </ul>
      </Alert>

      <MultistepFormNavigator handleNextStep={handleNextStep} />
    </Stack>
  )
}

export default PassportTypeSelect