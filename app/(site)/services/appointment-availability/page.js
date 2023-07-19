import React, { Suspense } from 'react'
import { Container } from '@/bootstrap'
import PageComponent from './PageComponent'
import PublicService from '@/lib/api/public'


async function AppointmentAvailPage({ searchParams }) {

    const api = new PublicService()

    const res = await api.getRpos()

    return (
        <Container className='py-4'>
            <Suspense>
                <PageComponent passportOffices={res} />
            </Suspense>
        </Container>
    )
}

export default AppointmentAvailPage