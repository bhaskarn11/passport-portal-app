'use client'

import Link from 'next/link'
import React from 'react'
import { Badge, Button, Card, Stack } from 'react-bootstrap'
import { usePathname } from "next/navigation";


function AppListCard({ app }) {

    const path = usePathname()

    return (
        <Card>
            <Card.Body>
                <Card.Title className='d-flex gap-1'>
                    <span >
                        Jan 24, 2023
                    </span>
                    <Badge pill bg='warning'>
                        {app.status}
                    </Badge>
                </Card.Title>
                <Stack gap={3}>
                    <Link href={`${path.toString()}/view?app=${app.type}&arn=${app.arn}`} className='link-underline link-underline-opacity-0'>
                        <h5>{app.name}</h5>
                    </Link>
                    <p className='text-muted'>
                        Please pay the application fee and book an appointment. <br />
                        Your application will expire if fee not paid within 30 days
                    </p>
                </Stack>
                <Stack direction='horizontal' gap={4}>
                    <Button as={Link} href={`/dashboard/payment?arn=${app.arn}`} variant='success' disabled={app.appointmentDetails}>Pay application fee</Button>
                    <Button as={Link} href={`/dashboard/appointment/${app.arn}`} variant='outline-success' disabled={!app.paymentDetails}>Book appointment for this application</Button>
                </Stack>
            </Card.Body>
        </Card>
    )
}

export default AppListCard