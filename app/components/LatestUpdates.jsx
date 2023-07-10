import Link from 'next/link'
import { Card, Col, Row, Stack } from '@/bootstrap'
import { getTop4Notices } from "@/lib/utils";
import dayjs from 'dayjs'



function LatestUpdateCard({ update }) {
    return (
        <Card border="secondary">
            <Card.Body>
                <Card.Header style={{backgroundColor: "inherit"}}>{dayjs(update._createdAt).format('DD/MM/YYYY')}</Card.Header>
                <Card.Title>
                    <Link className='link-underline-opacity-0 link-underline-opacity-75-hover link-underline h5' href={`/latest-updates#${update._id}`}>{update.description.length > 50 ? (update.description.slice(0, 50) + "...") : update.description}</Link>
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

async function LatestUpdates() {

    const updates = await getTop4Notices()

    return (
        <Row className='gx-3 gy-3'>
            <Stack direction='horizontal' className='align-middle'>
                <div>
                    <h3>Latest updates</h3>
                    <hr className='bg-primary' />
                    <style jsx>{`                        
                        hr { 
                            width: 25%;
                            height: 3px;
                            opacity: 1;
                            border: none;
                        }
                    `}
                    </style>
                </div>
                <h6 className='ms-auto'>
                    <Link href="/latest-updates">View more</Link>
                </h6>
            </Stack>
            {
                updates.map((update, idx) => (
                    <Col key={idx} className='col-12 col-md-6'>
                        <LatestUpdateCard update={update} />
                    </Col>
                ))
            }

        </Row>
    )
}

export default LatestUpdates