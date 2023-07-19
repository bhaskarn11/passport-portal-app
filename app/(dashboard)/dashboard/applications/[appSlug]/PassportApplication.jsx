'use client'

import React from 'react'
import { Button, Card, Container, Form, ProgressBar, Stack } from "react-bootstrap";
import { FormProvider, useForm } from "react-hook-form";


import PersonalDetails from "../components/PersonalDetails";
import FamilyDetails from "../components/FamilyDetails";
import AddressDetails from "../components/AddressDetails";
import PreviousPassportDetails from "../components/PreviousPassportDetails";
import SelfDeclaration from "../components/SelfDeclaration";
import PassportPreview from "../components/PassportPreview";
import PassportTypeSelect from "../components/PassportTypeSelect";
import { yupResolver } from '@hookform/resolvers/yup';

import { applicationFormSchema } from "../components/form.schema";
import { StepperContext } from '../components/StepperContext';

import ApplicationService from '@/lib/api/application'
import { useSession } from 'next-auth/react';
import dayjs from 'dayjs'

const RenderComponent = (page) => {

    switch (page) {
        case 0: {
            return <PassportTypeSelect />
        }
        case 1: {
            return <PersonalDetails />
        }

        case 2: {
            return <FamilyDetails />
        }

        case 3: {
            return <AddressDetails />
        }

        case 4: {
            return <PreviousPassportDetails />
        }

        case 5: {
            return <SelfDeclaration />
        }

        case 6: {
            return <PassportPreview />
        }
    }


}




function PassportForm() {

    const [page, setPage] = React.useState(0)
    const StepTitles = ['Type of Passport', 'Personal Details',
        'Family Details', 'Address Details',
        'Previous Passport Details', 'Self Declaration', 'Preview & Submit'
    ]

    const { data: session } = useSession()



    const methods = useForm({ resolver: yupResolver(applicationFormSchema) })


    const steps = StepTitles.length


    const nextStep = () => {
        if (page < steps - 1) {
            setPage(page + 1)
        }
    }


    const prevStep = () => {

        if (page > 0) {
            setPage(page - 1)
        }
    }



    const submitForm = async (data) => {
        const api = new ApplicationService(session.token.accessToken)

        const res = await api.createApplication({
            "app_name": "New Passport",
            "status": "SUBMITTED",
            "application_type": data.appType.applicationType,
            "scheme_type": data.appType.schemeType,
            "booklet_type": data.appType.bookletType,
            "first_name": data.personalDetails.firstName,
            "last_name": data.personalDetails.lastName,
            "gender": data.personalDetails.gender,
            "marital_status": data.personalDetails.maritalStatus,
            "email": data.personalDetails.email,
            "mobile_number": data.personalDetails.mobileNumber,
            "dob": dayjs(data.personalDetails.dob).format('YYYY-MM-DD'),
            "submitted_at": "2023-07-17",
            "address_details": {
                "house_street": data.addressDetails.houseStreet,
                "city_name": data.addressDetails.cityName,
                "pin_code": data.addressDetails.pinCode,
                "state": data.addressDetails.state,
                "district": data.addressDetails.district,
                "police_station": data.addressDetails.policeStation
            },
            "prev_psp_details": {
                "is_identity_cert_held": data.prevPspDetails.isIdentityCertHeld,
                "is_diplomatic_psp_held": data.prevPspDetails.isDiplomaticPassHeld,
                "applied_psp_before": data.prevPspDetails.appliedPassBefore
            },
            "family_details": {
                "father_name": data.familyDetails.fatherName,
                "mother_name": data.familyDetails.motherName,
                "legal_guardian_name": data.familyDetails.legalGuardianName,
                "spouse_name": data.familyDetails.spouseName
            },
            "fee": 1500.00,
        })

        console.log(res);
    }

    return (
        <FormProvider {...methods}>
            <StepperContext.Provider value={{ activePage: page, steps, prevStep, nextStep }}>
                <Stack gap={4}>
                    <ProgressBar variant='success' now={Math.ceil((page) / (steps - 1) * 100)}
                        label={Math.ceil((page) / (steps - 1) * 100) + " %"}
                    />
                    <Card className='mx-auto'>
                        <Card.Body>
                            <Container fluid>
                                <Card.Title>
                                    {StepTitles[page]}
                                </Card.Title>
                                <Form onSubmit={methods.handleSubmit(submitForm)}>
                                    {
                                        RenderComponent(page)
                                    }

                                </Form>
                            </Container>
                        </Card.Body>
                    </Card>
                </Stack>
            </StepperContext.Provider>
        </FormProvider>
    )
}

export default PassportForm