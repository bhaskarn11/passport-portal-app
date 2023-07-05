import React from 'react'
import { useFormContext } from "react-hook-form";
import { Form, FormGroup, Stack } from 'react-bootstrap';

import states from './states-districts.json'
import { useStepper } from './StepperContext';
import MultistepFormNavigator from './MultistepFormNavigator';



function AddressDetails() {

  const [isAddressSame, setAddressType] = React.useState(true)
  const { nextStep } = useStepper()
  const { trigger } = useFormContext()


  const handleNextStep = async () => {
    let valid = await trigger([
      "addressDetails.houseStreet", "addressDetails.cityName",
      "addressDetails.pinCode", "addressDetails.state",
      "addressDetails.district", "addressDetails.policeStation"
    ])

    valid && nextStep()
  }

  return (
    <Stack gap={3}>

      <AddressFields addressType="presentAddress" />
      <MultistepFormNavigator handleNextStep={handleNextStep} />
    </Stack>
  )
}

export default AddressDetails


function AddressFields({ addressType }) {

  const [districts, setDistricts] = React.useState(states['WB'].policeDistricts)
  const { register, getValues, formState: { errors } } = useFormContext()

  return (
    <Stack gap={3}>
      <FormGroup>
        <Form.Label>House No. and Street Name/Locality</Form.Label>
        <Form.Control isInvalid={errors.addressDetails?.houseStreet}
          {...register(`addressDetails.houseStreet`)} />
      </FormGroup>
      <Stack gap={3} direction='horizontal'>
        <FormGroup>
          <Form.Label>Village/Town/City</Form.Label>
          <Form.Control isInvalid={errors.addressDetails?.cityName}
            {...register(`addressDetails.cityName`)} />
        </FormGroup>
        <FormGroup>
          <Form.Label>PIN Code</Form.Label>
          <Form.Control isInvalid={errors.addressDetails?.pinCode}
            {...register(`addressDetails.pinCode`)} />
        </FormGroup>
      </Stack>

      <Stack gap={3} direction='horizontal'>
        <FormGroup>
          <Form.Label>State</Form.Label>
          <Form.Select isInvalid={errors.addressDetails?.state}
            onClick={() => setDistricts(states[getValues(`addressDetails.state`)].policeDistricts)}
            {...register(`addressDetails.state`)}
          >
            {
              Object.entries(states).map((g, i) => (
                <option key={i} value={g[0]}>{g[1].name}</option>
              ))
            }
          </Form.Select>
        </FormGroup>
        <FormGroup>
          <Form.Label>District</Form.Label>
          <Form.Select isInvalid={errors.addressDetails?.district}
            {...register(`addressDetails.district`)}
          >
            {
              districts.map((g, i) => (
                <option key={i} value={g}>{g}</option>
              ))
            }
          </Form.Select>
        </FormGroup>
      </Stack>
      <FormGroup>
        <Form.Label>Police Station</Form.Label>
        <Form.Control isInvalid={errors.addressDetails?.policeStation}
          {...register(`addressDetails.policeStation`)}
        />
      </FormGroup>

    </Stack>
  )

}