import React from 'react'
import { Container } from '@/bootstrap'
import Image from 'next/image'
import noDataSvg from '@/assets/image/no_data.svg'

function NoDataBanner() {
    return (
        <Container className='text-center py-4'>
            <h4 className='mb-4'>Sorry application not found!</h4>
            <Image src={noDataSvg} alt='No Application Data' style={{ maxHeight: "40vh" }} />
        </Container>
    )
}

export default NoDataBanner