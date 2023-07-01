
import React from 'react'
import { Accordion, Button, Col, Container, Form, FormControl, Row, Stack, Body, Item, Header } from '@/bootstrap'
import faqs from "./faq.json"
import { getTop4Articles } from '@/lib/utils'
import Link from 'next/link'

export const metadata = {
  title: "Help Center"
}

async function HelpPage() {


  const articles = await getTop4Articles()

  return (
    <Container className='py-3'>
      <Row className='pb-4'>
        <Col>
          <Stack gap={3}>
            <h3>How can we help you?</h3>
            <Form action="/help/search" method='GET'>
              <Stack direction='horizontal' gap={2}>
                <FormControl required id='help-center-search-box' name='keyword' type='text' placeholder='Search content' />
                <Button type='submit' variant='primary'>Search</Button>
              </Stack>
            </Form>
          </Stack>
        </Col>
      </Row>
      <Row className='pb-4'>
        <Stack gap={4}>
          <h5>Looking for something else?</h5>

        </Stack>
        <hr />
      </Row>
      
      <Row className='pb-4'>
        <Stack gap={4}>
          <h4>Popular topics</h4>
          <Row>

            {
              articles.map((a, idx) => (
                <Col key={idx} className='col-6 col-md-3'>
                  <Link href={`/help/topics/${a.topic.slug}/${a.slug}`}>
                    <h5>{a.title}</h5>
                  </Link>
                </Col>
              ))
            }
          </Row>
        </Stack>
      </Row>
      <Row id='faq' className='mt-4'>
        <h4>FAQs</h4>
        <Accordion flush alwaysOpen className='gap-3' defaultActiveKey={0}>
          {
            faqs.map((faq, idx) => (
              <Item key={idx} eventKey={idx}>
                <Header>
                  <span className='fw-bold text-wrap'>{faq.question}</span>
                </Header>
                <Body>
                  {faq.answer}
                </Body>
              </Item>
            ))
          }
        </Accordion>
      </Row>
    </Container>
  )
}

export default HelpPage