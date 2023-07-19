'use client'
import React from 'react'
import { Spinner, Container } from "react-bootstrap";

function Loading() {
    return (
        <Container className='py-4 text-center'>
            <Spinner>
                <span className='visually-hidden'>Loading...</span>
            </Spinner>
        </Container>
    )
}

export default Loading