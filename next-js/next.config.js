/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FETCH_LOCAL_URL: 'http://localhost:3000',
    FETCH_STRAPI_URL: 'http://127.0.0.1:1337',
  }
}

module.exports = nextConfig
