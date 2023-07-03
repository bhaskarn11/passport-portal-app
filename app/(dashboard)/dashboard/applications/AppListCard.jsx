'use client'

import Link from 'next/link'
import React from 'react'
import { Badge, Button, Card, Stack } from 'react-bootstrap'
import { usePathname } from "next/navigation";
function AppListCard({appSlug}) {

    const path = usePathname()

    return (
        <Card>
            <Card.Body>
                <Card.Title className='d-flex gap-1'>
                    <span >
                        Jan 24, 2023
                    </span>
                    <Badge pill bg='warning'>
                        Submitted
                    </Badge>
                </Card.Title>
                <Stack gap={3}>
                    <Link href={`${path.toString()}/view?app=${appSlug}`} className='link-underline link-underline-opacity-0'>
                        <h5>New Passport</h5>
                    </Link>
                    <p className='text-muted'>
                        Please pay the application fee and book an appointment after that <br />
                        your application will expire if fee not paid within 30 days
                    </p>
                </Stack>
                <Stack direction='horizontal' gap={4}>
                    <Button variant='success'>Pay application fee</Button>
                    <Button variant='outline-success' disabled>Book appointment for this application</Button>
                </Stack>
            </Card.Body>
        </Card>
    )
}

export default AppListCard