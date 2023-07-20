'use client'

import React from 'react'
import { Container, Spinner } from 'react-bootstrap'

function Loading() {
  return (
    <Container className='text-center'>
      <Spinner>
        <span className='visually-hidden' >Loading...</span>
      </Spinner>
    </Container>
  )
}

export default Loading