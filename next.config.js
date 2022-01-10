module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'fastly.4sqi.net'],
  },
  env: {
    NEXT_PUBLIC_FOURSQUARE_API_KEY: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY
  }
}
