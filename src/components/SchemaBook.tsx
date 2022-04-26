import site from '../data/site.js'
import { wilsonFletcher } from '../data/organizations'
import { markWilson, stephanieFletcher } from '@data/people'

export interface Props {
  name: string
  description: string
  url?: string
}

export default function SchemaBook({ name, description, url = site.url }) {
  const ldData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Book',
        '@id': `${site.url}/#futurestate-design`,
        about: {
          '@type': 'Thing',
          description
        },
        abstract:
          "This is a book to help you think differently about the future of your business. Most established businesses find it difficult to change — because the tools they use to think about their future unknowingly tie them to their past. Based on two decades of innovation experience with hundreds of established companies around the world business innovation specialist Mark Wilson brings you 'futurestate design' outlining the techniques to help you break away from traditional business thinking and design a business fit for the future. You'll be surprised by what's holding you back and excited to get started on imagining what your future should look like.",
        alternativeHeadline:
          'How to step out of the past to create a business fit for the future',
        bookEdition: 1,
        bookFormat: 'https://schema.org/Paperback',
        copyrightYear: 2022,
        countryOfOrigin: 'United Kingdom',
        datePublished: '2022-05-12',
        genre: 'Non-Fiction/Education',
        image: [
          {
            '@type': 'ImageObject',
            url: `${site.url}/images/book-1.jpg`,
            width: 1200,
            height: 640
          },
          {
            '@type': 'ImageObject',
            url: `${site.url}/images/book-2.jpg`,
            width: 590,
            height: 393
          },
          {
            '@type': 'ImageObject',
            url: `${site.url}/images/book-3.jpg`,
            width: 590,
            height: 393
          }
        ],
        inLanguage: 'en',
        isbn: '978-1-3999-2210-4',
        isFamilyFriendly: true,
        name,
        numberOfPages: 128,
        sameAs: [
          'https://amazon.co.uk',
          'https://wilsonfletcher.com/futurestate-design'
        ],
        size: 'Height 18cm',
        url,
        author: {
          '@type': 'Person',
          ...markWilson
        },
        copyrightHolder: {
          '@type': 'Person',
          '@id': markWilson['@id']
        },
        contributor: [
          {
            '@type': 'Person',
            ...stephanieFletcher
          }
        ],
        publisher: {
          '@type': 'Organization',
          ...wilsonFletcher
        }
      }
    ]
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ldData, null, 2) }}
    />
  )
}
