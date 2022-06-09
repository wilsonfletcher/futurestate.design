import { wilsonFletcher } from '@data/organizations'
import site from '@data/site'

interface SchemaWebPageProps {
  name: string
  description: string
  url: string
  image?: {
    url: string
  }
  mainEntity: object
}

export default function SchemaWebPage({
  name,
  description,
  url,
  image = site.image,
  mainEntity
}: SchemaWebPageProps) {
  const ldData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${site.url}${url}`,
        name,
        description,
        url: `${site.url}${url}`,
        image: {
          '@type': 'ImageObject',
          url: image.url
        },
        mainEntity,
        copyrightHolder: {
          '@type': 'Organization',
          ...wilsonFletcher
        },
        copyrightYear: 2022
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
