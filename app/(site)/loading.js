'use client'

import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loading() {
  return (
    <Spinner>
        <span className='visually-hidden' >Loading...</span>
    </Spinner>
  )
}

export default Loading