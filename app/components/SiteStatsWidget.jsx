import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Card, Col, Container, ListGroup, Row, Stack } from "@/bootstrap";

const stats = [
    {
        title: "Application Processed",
        value: "341,228"
    },
    {
        title: "Passport Issued",
        value: "277,837"
    },

]

function SiteStatsWidget() {
    return (
        <Container className='mt-4'>
            <Row>
                <Stack>
                    <Stack direction='horizontal' gap={2}>
                        <FontAwesomeIcon icon={faChartPie} />
                        <h4>Stats</h4>
                    </Stack>
                    <hr className='bg-primary' />
                    <style jsx>{`                        
                        hr { 
                            width: 25%;
                            height: 5px;
                            opacity: 1;
                            border: none;
                        }
                    `}
                    </style>
                </Stack>
                {
                    stats.map((stat, idx) => (
                        <Col className='col-6' key={idx}>
                            <h4>{stat.value}</h4>
                            <span className='text-muted'>{stat.title}</span>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default SiteStatsWidget