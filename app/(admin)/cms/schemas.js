export const Articles = {
    name: 'articles',
    title: 'General Articles',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title'
            }
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [{ 
                type: 'block',
            }]
        },

        {
            name: 'files',
            title: 'Files',
            type: 'array',
            of: [
                {
                    type: 'file',
                    options: {
                        accept: '.pdf, .doc, .docx'
                    }
                }
            ]
        }
    ]
}




export const HelpArticle = {
    name: 'helpArticles',
    title: 'Help Articles',
    type: 'document',

    fields: [

        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            rows: 4,
            validation: Rule => Rule.required().max(100)
        },
        {
            name: 'topic',
            type: 'reference',
            title: 'Topic',
            to: [{ type: 'topics' }]
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [{ type: 'block' }]
        }
    ]
}

export const Topic = {
    name: 'topics',
    title: 'Topics',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'name'
            }
        }
    ]
}



export const GenDocFiles = {
    name: 'documents',
    title: 'Documents',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'file',
            title: 'File',
            type: 'file',
            options: {
                accept: '.pdf, .doc, .docx, .xlsx, xls, .pptx, .ppt'
            }
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title'
            }
        }
    ]
}

export const Forms = {
    name: 'fa',
    title: 'Forms and Affidevits',
    type: 'document',
    fields: [
        {
            name: 'Name',
            type: 'string',
            title: 'Form/Affidevits Name',
            description: "Only -, 0-9, a-z, A-Z allowed"
        },
        {
            name: 'file',
            title: 'File',
            type: 'file',
            options: {
                accept: '.pdf, .doc, .docx'
            }
        }
    ]
}


export const NoticesAndUpdates = {
    name: "notices",
    type: 'document',
    title: 'Notices and Updates',
    preview: {
        select: {
            title: 'description',
            subtitle: 'category'
        }
    },
    fields: [
        {
            name: 'file',
            title: 'File',
            type: 'file',
            options: {
                accept: '.pdf'
            },

            fields: [
                {
                    name: 'fileTitle',
                    type: 'string',
                    title: 'File Title',
                    description: "Only (-, _ , 0-9, a-z, A-Z) allowed"
                }
            ]
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            rows: 4,
            validation: Rule => Rule.required().max(300)
        },
        {
            name: 'category',
            type: 'string',
            title: 'Category',
            options: {
                list: [
                    { title: 'Circular', value: 'circular' },
                    { title: 'News', value: 'news' },
                    { title: 'Announcement', value: 'announcement' }
                ]
            },
            validation: rule => rule.required()
        }

    ]
}