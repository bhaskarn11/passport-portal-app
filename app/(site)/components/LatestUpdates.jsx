import Link from 'next/link'
import { Card, Col, Row, Stack } from '@/bootstrap'
import { getTop4Notices } from "@/lib/utils";
import dayjs from 'dayjs'
// const updates = [
//     {
//         date: "12/06/2023",
//         title: "Message from EAM about Passport Seva"
//     },
//     {
//         date: "12/06/2023",
//         title: "Press release regarding PCC"
//     },
//     {
//         date: "12/06/2023",
//         title: "Applicants can book the appointments to the nearest Operational PSK/POPSK as per the attached schedule (Operational PSK and POPSK List.)"

//     }
// ]

function LatestUpdateCard({ title, date }) {
    return (
        <Card bg="secondary">
            <Card.Body>
                <Card.Header style={{backgroundColor: "inherit"}}>{dayjs(date).format('DD/MM/YYYY')}</Card.Header>
                <Card.Title>
                    {title.length > 50 ? (title.slice(0, 50) + "...") : title}
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
                        <LatestUpdateCard title={update.description} date={update._createdAt} />
                    </Col>
                ))
            }

        </Row>
    )
}

export default LatestUpdates