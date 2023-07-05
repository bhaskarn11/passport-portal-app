import React from 'react'
import { Col, Form, FormGroup, Row, Stack } from 'react-bootstrap'
import { useFormContext } from "react-hook-form";
import MultistepFormNavigator from './MultistepFormNavigator';
import { useStepper } from './StepperContext';



function FamilyDetails() {

  const { register, trigger, formState: { errors } } = useFormContext()
  const { nextStep } = useStepper()

  const handleNextStep = async () => {
    let valid = await trigger([
      "familyDetails.fatherName", "familyDetails.motherName", 
      "familyDetails.legalGuardianName", "familyDetails.spouseName", 
      "familyDetails.emergencyContact.phoneNumber"
    ])

    valid && nextStep()
  }

  return (
    <Stack gap={2}>
      <Row className='gx-4'>
        <Col className='col-12 col-md-6'>
          <Stack gap={3}>
            <FormGroup>
              <Form.Label>Father's Name</Form.Label>
              <Form.Control isInvalid={errors.familyDetails?.fatherName} {...register("familyDetails.fatherName")} />
            </FormGroup>
            <FormGroup>
              <Form.Label>Mother's Name</Form.Label>
              <Form.Control isInvalid={errors.familyDetails?.motherName} {...register("familyDetails.motherName")} />
            </FormGroup>
            <FormGroup>
              <Form.Label>Legal Guardian's Name</Form.Label>
              <Form.Control isInvalid={errors.familyDetails?.legalGuardianName} {...register("familyDetails.legalGuardianName")} />
            </FormGroup>
            <FormGroup>
              <Form.Label>Spouse's Name</Form.Label>
              <Form.Control isInvalid={errors.familyDetails?.spouseName} {...register("familyDetails.spouseName")} />
            </FormGroup>
          </Stack>
        </Col>
        <Col className='col-12 col-md-6'>
          <Stack gap={3}>
            <h4>Emergency Contact</h4>
            <FormGroup>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control isInvalid={errors.familyDetails?.emergencyContact?.phoneNumber} {...register("familyDetails.emergencyContact.phoneNumber")} />
            </FormGroup>
          </Stack>
        </Col>
      </Row>
      <MultistepFormNavigator handleNextStep={handleNextStep} />
    </Stack>
  )
}

export default FamilyDetails