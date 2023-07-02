'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faMagnifyingGlassMinus, faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import { Button, ButtonGroup, Stack } from "react-bootstrap";
import LanguageSelector from '@/app/components/LanguageSelector';



function AccessibilityWidget() {
    return (
        <Stack direction='horizontal'>
            <ButtonGroup size='sm' className='me-2'>
                <Button title='zoom in' variant='link' className='text-primary'>
                    <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
                </Button>
                <Button title='normal zoom' variant='link' className='text-primary'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
                <Button title='zoom out' variant='link' className='text-primary'>
                    <FontAwesomeIcon icon={faMagnifyingGlassMinus} />
                </Button>
            </ButtonGroup>
            <LanguageSelector />
        </Stack>
    )
}

export default AccessibilityWidget