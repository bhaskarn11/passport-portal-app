import React, { Suspense } from 'react'
import { Container } from "@/bootstrap";
import PublicService from '@/lib/api/public'
import ApplicationService from '@/lib/api/application'
import Loading from '../../loading';
import Page from './PageComponent'


/*
    in this page we will fetch the application details 
    and let user select RPO (Regional Passport Office) then book the appointment
    and show appointment details
*/

const rpoDetails = [
    {
        id: "1",
        name: "Kolkata",
    },
    {
        id: "2",
        name: "Mumbai",
    },
    {
        id: "3",
        name: "Bangaluru",
    }
]

const app = [
    {
        rpo: "Kolkata",
        poName: "PSK Kolkata",
        poCode: "KOL1",
        dates: [
            {
                date: "12-02-2023",
                available: 20
            },
            {
                date: "15-02-2023",
                available: 19
            },
            {
                date: "16-02-2023",
                available: 20
            },
            {
                date: "17-02-2023",
                available: 19
            },
            {
                date: "18-02-2023",
                available: 20
            },
            {
                date: "19-02-2023",
                available: 19
            }
        ],
        capacity: 25
    },
    {
        rpo: "Kolkata",
        poName: "POPSK Serampur",
        poCode: "KOL-PO1",
        dates: [
            {
                date: "10-02-2023",
                available: 20
            },
            {
                date: "09-02-2023",
                available: 19
            }
        ],
        capacity: 30
    },
    {
        rpo: "Kolkata",
        poName: "POPSK Chandannagar",
        poCode: "KOL-PO2",
        dates: [
            {
                date: "11-02-2023",
                available: 20
            },
            {
                date: "09-02-2023",
                available: 19
            }
        ],
        capacity: 30
    },
    {
        rpo: "Mumbai",
        poName: "PSK Mumbai",
        poCode: "MUM-PO2",
        dates: [
            {
                date: "11-02-2023",
                available: 6
            },
            {
                date: "09-02-2023",
                available: 19
            }
        ],
        capacity: 30
    }
]

async function BookAppointmentPage({params}) {

    const api = new PublicService()
    const res = await api.getRpos()
    const appService = new ApplicationService()
    const app = await appService.getApplication(params['appRefNo'])



    return (
        <Container className='my-3'>
            <Suspense fallback={<Loading />}>
                <Page rpos={res} app={app} />
            </Suspense>
        </Container>
    )
}

export default BookAppointmentPage