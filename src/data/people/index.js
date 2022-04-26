import site from '@data/site'
import { wilsonFletcher } from '@data/organizations'

export const markWilson = {
  '@id': `${site.url}/#mark-wilson`,
  givenName: 'Mark',
  familyName: 'Wilson',
  jobTitle: 'Managing Partner & CEO',
  sameAs: ['https://www.linkedin.com/in/mwilson/'],
  worksFor: {
    '@type': 'Organization',
    name: 'Wilson Fletcher'
  },
  description:
    'Mark Wilson is CEO at Wilson Fletcher, a London-based business innovation consultancy.',
  image: {
    '@type': 'ImageObject',
    url: `${site.url}/images/mark-wilson.jpg`,
    width: 285,
    height: 285,
    description: 'Photo of Mark Wilson'
  }
}

export const stephanieFletcher = {
  '@id': `${site.url}/#stephanie-fletcher`,
  givenName: 'Stephanie',
  familyName: 'Fletcher',
  jobTitle: 'Managing Partner & CDO',
  image: `${site.url}/images/stephanie-fletcher.jpg`,
  sameAs: ['https://www.linkedin.com/in/stephanie-fletcher-6840152/'],
  worksFor: {
    '@type': 'Organization',
    name: 'Wilson Fletcher'
  }
}

export const ellaBowman = {
  '@id': `${site.url}/#ella-bowman`,
  givenName: 'Ella',
  familyName: 'Bowman',
  jobTitle: 'Senior Content Strategist',
  image: `${site.url}/images/ella-bowman.jpg`,
  sameAs: ['https://www.linkedin.com/in/ellabowman/'],
  worksFor: {
    '@type': 'Organization',
    name: 'Wilson Fletcher'
  }
}

export const terryNicholls = {
  givenName: 'Terry',
  familyName: 'Nicholls',
  jobTitle: 'Freelance Design Director',
  image: `${site.url}/images/terry-nicholls.jpg`,
  sameAs: ['https://www.linkedin.com/in/terry-nicholls-ba031348/'],
  worksFor: {
    '@type': 'Organization',
    name: 'Rare Monster'
  }
}
