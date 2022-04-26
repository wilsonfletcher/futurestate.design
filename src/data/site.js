const name = 'Futurestate Design'

const description =
  'How to step out of the past to create a business fit for the future'

const url = import.meta.env.PUBLIC_BASE_URL ?? '' // No trailing slash!
const googleTagManager = import.meta.env.PUBLIC_GTM
const googleSiteVerification = import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION

export const image = {
  url: `${url}/images/book-1.jpg`,
  width: 1200,
  height: 640,
  alt: 'Photo of the Futurestate design book'
}

export default {
  title: `${name} - ${description}`,
  name,
  description,
  url,
  image,
  instagramURL: `https://instagram.com/futurestatedesign`,
  lang: 'en',
  googleTagManager,
  googleSiteVerification
}
