'use client'

import Link from 'next/link'
import React from 'react'
import { Badge, Button, Card, Stack } from 'react-bootstrap'
import { usePathname } from "next/navigation";
import dayjs from 'dayjs'

function AppListCard({ app }) {

    const path = usePathname()

    return (
        <Card>
            <Card.Body>
                <Card.Title className='d-flex gap-1'>
                    <span >
                        {dayjs(app.submitted_at).format("MMM, DD YYYY")}
                    </span>
                    <Badge pill bg='warning'>
                        {app.status}
                    </Badge>
                </Card.Title>
                <Stack gap={3}>
                    <Link href={`${path.toString()}/view?app=${encodeURIComponent(app.app_name)}&arn=${app.arn}`} className='link-underline link-underline-opacity-0'>
                        <h5>{app.app_name}</h5>
                    </Link>
                    <p className='text-muted'>
                        Please pay the application fee and book an appointment. <br />
                        Your application will expire if fee not paid within 30 days
                    </p>
                </Stack>
                <Stack direction='horizontal' gap={4}>
                    <Button as={Link} href={`/dashboard/payment?arn=${app.arn}`} variant='success' disabled={app.payment_details}>Pay application fee</Button>
                    <Button as={Link} href={`/dashboard/appointment/${app.arn}`} variant='outline-success' disabled={!app.payment_details}>Book appointment for this application</Button>
                </Stack>
            </Card.Body>
        </Card>
    )
}

export default AppListCard