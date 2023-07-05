'use client'

import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";


import { useStepper } from './StepperContext';


function MultistepFormNavigator({ handleNextStep }) {


    const { prevStep, activePage, steps } = useStepper()


    return (
        <Stack className='pt-3' direction="horizontal" gap={3}>
            <Button className='icon-link' onClick={prevStep} disabled={activePage === 0} variant="outline-primary">
                <FontAwesomeIcon icon={faArrowLeftLong} />
                PREVIOUS
            </Button>
            {
                activePage === (steps - 1) ? (
                    <Button className='icon-link' type='submit' variant="success">
                        <span>SUBMIT</span>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </Button>
                ) : (
                    <Button className='icon-link' onClick={handleNextStep} variant="warning">
                        <span>NEXT</span>
                        <FontAwesomeIcon icon={faArrowRightLong} />
                    </Button>
                )
            }
        </Stack>
    )
}

export default MultistepFormNavigator