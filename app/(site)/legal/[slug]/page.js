import { Container } from "@/bootstrap";
import { getLegalDocs } from '@/lib/utils'
import { PortableText } from '@portabletext/react'




async function LegalPages({ params }) {


    const doc = await getLegalDocs(params.slug)

    return (
        <Container>
            {
                params.slug && doc && <PortableText value={doc.content} />
            }
        </Container>
    )
}

export default LegalPages