/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    title: "Swipe Pay",
    titleDescription: "Checkout process of an online store",
    APP_API_URL: "http://localhost:4000"
  }
}

module.exports = nextConfig
