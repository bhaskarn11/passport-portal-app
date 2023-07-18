import React from 'react'
import { Col, Container, Row, Stack } from "@/bootstrap";
import AppListCard from "./AppListCard"
// import { applications } from "@/data/applications";
import { getServerSession } from "next-auth/next";
import { options } from "@/lib/auth.options";
import UserService from '@/lib/api/user'
import myfilesImage from '@/assets/image/my_files.svg'
import Image from 'next/image'



async function ApplicationStatusPage() {

    /*
      all application filed by the particular user will be fetched
      and shown in this page (it will contain applications accross all stages i.e. submitted, drafted, pending)
    */


    const session = await getServerSession(options)
    const api = new UserService(session.token.accessToken)
    const applications = await api.getApplications(session.user.id)


    return (
        <Container className='py-4'>
            <Row className='gy-3'>

                {
                    applications.length > 0 ? (
                        applications.map((v, i) => (
                            <Col key={i} className='col-12 col-md-6'>
                                <AppListCard app={v} />
                            </Col>
                        ))
                    ) : (
                        <Stack gap={3} className='text-center'>
                            <Image className='mx-auto' alt='no application' src={myfilesImage} style={{ maxWidth: '40vw', maxHeight: '40vw' }} />
                            <h4>No Applications Found</h4>
                        </Stack>
                    )
                }

            </Row>
        </Container>
    )
}

export default ApplicationStatusPage