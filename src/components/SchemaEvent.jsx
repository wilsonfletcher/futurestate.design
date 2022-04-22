import site, { image } from '@data/site'
import { wilsonFletcher } from '@data/organizations'
import review from '@data/review'
import { markWilson } from '@data/people'

function SchemaEvent({ name, description, url }) {
  const foo = `${site.url}${url}`

  const ldData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': foo,
        name,
        description,
        url: foo,
        image: {
          '@type': 'ImageObject',
          url: image.url,
          width: image.width,
          height: image.height,
          description: image.alt
        },
        mainEntity: `${foo}#futurestate-workshops`,
        copyrightHolder: {
          '@type': 'Organization',
          ...wilsonFletcher
        },
        copyrightYear: 2022
      },
      {
        '@type': 'BusinessEvent',
        '@id': `${foo}#futurestate-workshops`,
        name,
        description,
        url: foo,
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
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldData, null, 2) }}
      />
    </>
  )
}

export default SchemaEvent
