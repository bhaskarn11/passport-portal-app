import { createClient, groq } from "next-sanity";

const client = createClient({
    dataset: 'production',
    apiVersion: '2023-06-30',
    projectId: '6ticjj8p'
})

export function getAllTopics() {
    return client.fetch(
        groq`*[_type== "topics"]{
            _id,
            name,
            "slug": slug.current,
            'articles': *[_type=='helpArticles' && references(^._id)] {
                _id, 
                title,
                'articleSlug': slug.current
             } 
        }`
    )
}

export function getTop6Topics() {
    return client.fetch(
        groq`*[_type== "topics"][0..5]{
            _id,
            name,
            "slug": slug {
                current
            },
            'articles': *[_type=='helpArticles' && references(^._id)] {
                _id, 
                title,
                'articleSlug': slug.current
             } 
        }`
    )
}

export function getTop4Articles() {
    return client.fetch(
        groq`*[_type=='helpArticles'][0...5]{
            _id,
            title,
            'slug': slug.current,
            'topic': topic -> {
                name,
                'slug': slug.current
            }
        }`
    )
}


export function searchArticles(keyword, offset=0, limit=10) {
    return client.fetch(
        groq`*[_type=='helpArticles' && content[].children[].text match '${keyword}'][${offset}...${limit-1}]{
            _id,
            title,
            'slug': slug.current,
            content,
            'topic': topic -> {
                name,
                'slug': slug.current
            }
        }`
    )
}


export function getHelpArticlesByTopic(topic, start = 0, end = null) {
    if (start && end) {
        return client.fetch(
            groq`*[_type=='helpArticles' && topic._ref == *[_type==${topic} && slug.current=='how-tos'][0]._id][${start}...${end}]{
                _id,
                _createdAt,
                title,
                'slug': slug.current,
                content,
                'topic': topic -> {
                    name,
                    'slug': slug.current
                }
              }`
        )
    }

    return client.fetch(
        groq`*[_type=='helpArticles' && topic._ref == *[_type=='topics' && slug.current=='${topic}'][0]._id]{
            _id,
            _createdAt,
            title,
            'slug': slug.current,
            content,
            'topic': topic -> {
            name,
            'slug': slug.current
            }
          }`
    )

}


export function getHelpArticle(topicSlug, articleSlug) {
    return client.fetch(
        groq`*[_type=='helpArticles' && slug.current=='${articleSlug}' && topic._ref == *[_type=='topics' && slug.current=='${topicSlug}'][0]._id][0]{
            _id,
            _createdAt,
            title,
            'slug': slug.current,
            content,
            'topic': topic -> {
                name,
                'slug': slug.current
            }
        }`
    )
}


export function getTop4Notices() {
    return client.fetch(
        groq`*[_type=='notices'][0...4]{
            _id,
            description,
            category,
            'fileURL': file.asset->url,
            _createdAt
        }`
    )
}

export function getNoticesByYear(year, offset=0, limit=10) {

    return client.fetch(
        groq`*[_type == 'notices' && _createdAt <= '${year}'][${offset}...${limit - 1}]{
            _id,
            description,
            category,
            'fileURL': file.asset->url,
            _createdAt
        }`
    )
}
