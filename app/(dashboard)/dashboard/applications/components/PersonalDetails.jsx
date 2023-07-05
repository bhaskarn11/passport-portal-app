import React from 'react'
import { Button, Form, FormGroup, Stack } from 'react-bootstrap'
import { useFormContext } from "react-hook-form";
import { useStepper } from './StepperContext';


import MultistepFormNavigator from './MultistepFormNavigator';

const genderOptions = ['', 'Male', 'Female', "Other"]
const martialStatus = ['Single', 'Married', 'Engaged', 'Widow']

const employmentOptions = [
  'Service', 'Business', 'Student', 'Retired', 'Housework'
]


function PersonalDetails() {

  const { nextStep } = useStepper()
  const { register, trigger, formState: { errors } } = useFormContext()



  const handleNextStep = async () => {
    let valid = await trigger(['personalDetails.firstName', 'personalDetails.lastName',
      'personalDetails.dob', 'personalDetails.gender', 'personalDetails.email', 'personalDetails.mobileNumber'
    ])

    valid && nextStep()
  }

  return (
    <Stack gap={3}>
      <Stack direction='horizontal' gap={3}>
        <FormGroup>
          <Form.Label>First Name</Form.Label>
          <Form.Control isInvalid={errors.personalDetails?.firstName}
            {...register("personalDetails.firstName")} />
        </FormGroup>
        <FormGroup>
          <Form.Label>Last Name</Form.Label>
          <Form.Control isInvalid={errors.personalDetails?.lastName}
            {...register("personalDetails.lastName")} />
        </FormGroup>
      </Stack>
      <FormGroup>
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control isInvalid={errors.personalDetails?.dob}
          type='date' {...register("personalDetails.dob")} />
      </FormGroup>
      <Stack gap={3} direction='horizontal'>
        <FormGroup>
          <Form.Label>Gender</Form.Label>
          <Form.Select isInvalid={errors.personalDetails?.gender}
            {...register("personalDetails.gender")}>
            {
              genderOptions.map((g, i) => (
                <option key={i} value={g.toLowerCase()}>{g}</option>
              ))
            }
          </Form.Select>
        </FormGroup>
        <FormGroup>
          <Form.Label>Marital Status</Form.Label>
          <Form.Select isInvalid={errors.personalDetails?.gender}
            {...register("personalDetails.maritalStatus")}>
            {
              martialStatus.map((g, i) => (
                <option key={i} value={g.toLowerCase()}>{g}</option>
              ))
            }
          </Form.Select>
        </FormGroup>
      </Stack>

      <FormGroup>
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control isInvalid={errors.personalDetails?.mobileNumber} type='phone'
          {...register("personalDetails.mobileNumber")} />
      </FormGroup>
      <FormGroup>
        <Form.Label>Email Id</Form.Label>
        <Form.Control isInvalid={errors.personalDetails?.email} type='email'
          {...register("personalDetails.email")} />
      </FormGroup>
      <Stack direction='horizontal' gap={3}>
        <FormGroup>
          <Form.Label>Employment Type</Form.Label>
          <Form.Select isInvalid={errors.personalDetails?.gender}
            {...register("personalDetails.employmentType")}>
            {
              employmentOptions.map((g, i) => (
                <option key={i} value={g.toLowerCase()}>{g}</option>
              ))
            }
          </Form.Select>
        </FormGroup>
        <FormGroup>
          <Form.Label>Organization Name (if any)</Form.Label>
          <Form.Control {...register("personalDetails.orgName")} />
        </FormGroup>

      </Stack>

      <FormGroup>
        <Form.Label>Visible Mark</Form.Label>
        <Form.Control {...register("personalDetails.visibleMark")} />
      </FormGroup>

      <FormGroup>
        <Form.Label>Aadhar Number (if any)</Form.Label>
        <Form.Control {...register("personalDetails.aadhaarNumber")} />
      </FormGroup>
      {/* Multi step form navigation */}

      <MultistepFormNavigator handleNextStep={handleNextStep} />
    </Stack>
  )
}

export default PersonalDetails