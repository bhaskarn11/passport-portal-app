import React from 'react'
import { Col, Container, ListGroup, ListGroupItem, Row, Stack } from "@/bootstrap";
import { searchArticles } from '@/lib/utils';
import Link from 'next/link';
import WebSearchBanner from "@/assets/image/web_search.svg";
import Image from 'next/image';

async function HelpSearchPage({ searchParams }) {

  const keyword = searchParams['keyword']

  const articles = await searchArticles(keyword)
 

  return (
    <Container className='py-4'>
      <Row>
        <Col>
          {
            articles.length > 0 ? (
              <ListGroup>
                {
                  articles.map((a, idx) => (
                    <ListGroupItem className='py-4' key={idx} action as={Link} href={`/help/topics/${a.topic.slug}/${a.slug}`}>
                      <h6>{a.title}</h6>
                    </ListGroupItem>
                  ))
                }
              </ListGroup>
            ) : (
              <Stack className='d-flex justify-content-center' gap={4}>
                <span className='h3'>No Result found with this keyword!</span>
                <Image alt='no result found' className='w-100' src={WebSearchBanner} width={200} height={200}/>
              </Stack>
            )
          }
        </Col>
      </Row>
    </Container>
  )
}

export default HelpSearchPage