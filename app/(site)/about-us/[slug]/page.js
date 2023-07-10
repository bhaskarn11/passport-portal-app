import { getArticle } from '@/lib/utils'
import React from 'react'
import { Container } from '@/bootstrap'
import { PortableText } from '@portabletext/react'

async function PassportSevaAboutPage({params}) {


  const article = await getArticle(params.slug)

  return (
    <Container>
      {
        article? <PortableText value={article.content} /> : (
          <h4>Sorry page does not exists</h4>
        )
      }
    </Container>
  )
}

export default PassportSevaAboutPage