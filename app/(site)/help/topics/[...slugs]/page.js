import React from 'react'
import { Container, Row, Col, Card } from "@/bootstrap";
import Sidebar from './Sidebar';
import { getAllTopics, getHelpArticle } from '@/lib/utils';
import { PortableText } from "@portabletext/react";


export const metadata = {
  description: "Fequently asked questions related to Passport Creation/Renew"
}

async function HelpArticlePage({ params }) {
  const { slugs } = params
  const topicSlug = slugs[0]
  const articleSlug = slugs[1]
  const topics = await getAllTopics()
  const article = await getHelpArticle(topicSlug, articleSlug)

  return (
    <Container className='py-4'>
      <Row>
        <Col className='col-12 col-md-12'>
          <h4>Help articles</h4>
        </Col>
        <Col className='col-12 col-md-4'>
          <Sidebar topics={topics} article={article} />
        </Col>
        <Col className='col-12 col-md-7 ms-md-4'>
          <Card>
            <Container fluid className='my-3'>
              {
                article ? (
                  <PortableText
                    value={article.content}
                  />
                ) : ""
              }
            </Container>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default HelpArticlePage