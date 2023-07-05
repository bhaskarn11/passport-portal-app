'use client'

import Head from 'next/head'
import { Col, Container, Row, Carousel, Alert } from '@/bootstrap'
import QuickLinkSidebar from '../components/QuickLinkSidebar'
import LatestUpdates from '../components/LatestUpdates'
import SiteStateWidget from '../components/SiteStatsWidget'
import Image from 'next/image'
import Slide1 from "@/assets/image/Rajkumar_Ranjan_Singh.jpg";
import Slide2 from '@/assets/image/slide6.jpg'
import Marquee from "react-fast-marquee";
import { getTop3Announcements } from '@/lib/utils'


function MainBannerSlide() {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={Slide1}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={Slide2}
          alt="First slide"
        />

      </Carousel.Item>
    </Carousel>
  )
}

export default async function Home() {


  const ann = await getTop3Announcements()

  return (
    <Row>
      <Head>
        <title>Passport Seva, Ministry of External Affairs (.gov.in)</title>
      </Head>
      <Container className='py-3'>
        <Row>
          <Col className='col-12 col-md-4'>
            <QuickLinkSidebar />
            <SiteStateWidget />
          </Col>
          <Col className='pt-3 pt-md-0 col-12 col-md-8'>
            {/* marquee effect will go here */}
            {
              ann.length > 0 ? (
                <Marquee pauseOnHover={true} className='alert alert-warning'>

                  
                    {
                      ann.map((a, i) => (
                        <div className='me-2' key={i}>{i+1}. {a.description} </div>
                      ))
                    }
                  
                </Marquee>
              ) : ""
            }
            <MainBannerSlide />
            <LatestUpdates />
          </Col>
        </Row>
      </Container>
    </Row>
  )
}
