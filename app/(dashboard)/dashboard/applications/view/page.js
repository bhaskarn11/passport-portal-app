import React, { Suspense } from 'react'
import { Container, Row } from "@/bootstrap";
import PassportAppView from './PassportAppView';
import ApplicationService from '@/lib/api/application'
import Loading from '../../loading';
import NoDataBanner from '../../NoDataBanner';
import {options} from '@/lib/auth.options'
import { getServerSession } from "next-auth"

const renderApplicationView = (app) => {

    switch (app.app_name.toLowerCase()) {
        case "new passport":
            return (
                <PassportAppView app={app} />
            )

        case "reissue passport":
            return (
                <h4>Police Clearance</h4>
            )

        case "pcc":
            return (
                <h4>Police Clearance</h4>
            )
        default:
            return <NoDataBanner />
    }
}




async function ApplicationViewPage({ searchParams }) {

    const session = await getServerSession(options)
    const api = new ApplicationService(session.token.accessToken)

    const app = await api.getApplication(searchParams['arn'])

    return (
        <Container>
            <Suspense fallback={<Loading />}>
                <Row>
                    {
                        (searchParams.app && searchParams.arn && app) ?
                        renderApplicationView(app) : <NoDataBanner />
                    }
                </Row>
            </Suspense>
        </Container>
    )
}

export default ApplicationViewPage