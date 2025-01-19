import site from '@/data/site'
import { wilsonFletcher } from '@/data/organizations'
import review from '@/data/review'
import { markWilson } from '@/data/people'

interface SchemaEventProps {
  name: string
  description: string
  url: string
}

function SchemaEvent({ name, description, url }: SchemaEventProps) {
  const ldData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BusinessEvent',
        '@id': `${site.url}${url}#futurestate-workshops`,
        name,
        description,
        url: `${site.url}${url}`,
        maximumAttendeeCapacity: 15,
        eventAttendanceMode: 'mix',
        performer: {
          '@type': 'Person',
          ...markWilson
        },
        organizer: {
          '@type': 'Organization',
          '@id': wilsonFletcher['@id']
        },
        review: {
          '@type': 'Review',
          reviewBody: review.description,
          author: {
            '@type': 'Person',
            name: review.name
          },
          datePublished: '2022-04-02'
        }
      }
    ]
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldData, null, 2) }}
      />
    </>
  )
}

export default SchemaEvent
