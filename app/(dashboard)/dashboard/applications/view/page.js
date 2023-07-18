import React from 'react'
import { Container, Row } from "@/bootstrap";


async function ApplicationViewPage({ searchParams }) {


    const renderApplicationView = (appSlug) => {
        switch (appSlug) {
            case "passport":
                return (
                    <h4>New Passport</h4>
                )

            case "PCC":
                return (
                    <h4>Police Clearance</h4>
                )
        }
    }

    return (
        <Container>
            <Row>
                {
                    searchParams.app? renderApplicationView("passport") : ""
                }
            </Row>
        </Container>
    )
}

export default ApplicationViewPage