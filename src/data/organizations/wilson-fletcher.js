import site from '@data/site'
import { markWilson, stephanieFletcher } from '@data/people'

export default {
  '@id': `${site.url}/#wilson-fletcher`,
  name: 'Wilson Fletcher',
  description: 'Digital business designers',
  url: 'https://wilsonfletcher.com/',
  logo: 'https://wilsonfletcher.com/logo.png',
  sameAs: [
    'https://www.linkedin.com/company/wilson-fletcher',
    'https://medium.com/thehumanlayer',
    'https://twitter.com/wilsonfletcher',
    'https://www.instagram.com/_wilsonfletcher'
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+44 (0)203 865 8704',
      contactType: 'Sales',
      // areaServed: ['GB', 'US'],
      email: 'info@wilsonfletcher.com'
    }
  ],
  email: 'info@wilsonfletcher.com',
  founder: [
    {
      '@type': 'Person',
      '@id': markWilson['@id']
    },
    {
      '@type': 'Person',
      '@id': stephanieFletcher['@id']
    }
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '202-208 New North Road',
    addressLocality: 'Unit 10 New North House',
    addressRegion: 'London',
    postalCode: 'N1 7BJ',
    addressCountry: 'United Kingdom'
  }
}
