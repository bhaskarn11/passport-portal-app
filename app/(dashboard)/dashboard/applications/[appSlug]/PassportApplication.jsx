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



    const submitForm = (data) => console.log(data);

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