export const name = 'Futurestate Design'

export const description =
  'How to step out of the past to create a business fit for the future'

export const url = import.meta.env.PUBLIC_BASE_URL ?? '' // No trailing slash!

export const image = {
  url: `${url}/images/book-1.jpg`,
  width: 1200,
  height: 640,
  alt: 'Photo of the Futurestate design book'
}

export default {
  name,
  title: name,
  description,
  url,
  image,
  instagramURL: `https://instagram.com/futurestatedesign`,
  lang: 'en'
}
