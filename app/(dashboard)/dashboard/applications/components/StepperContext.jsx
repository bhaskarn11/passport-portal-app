'use client'
import React from 'react'


export const StepperContext = React.createContext()

export const useStepper = () => React.useContext(StepperContext)
