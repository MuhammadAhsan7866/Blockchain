import React from 'react'
import Head from 'next/head'
import TermsOfUse from '../../src/components/app/LandingPage/Terms'

const Home = () => {
  return (
    <>
      <Head>
        <title>Terms of Service | SSYouTube</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://ss-youtube.cc/terms-of-service/"
        />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Terms of Service for SSYouTube video downloader. Read our terms and conditions for using our free YouTube downloader service."
        />
        <meta
          property="og:title"
          content="Terms of Service | SSYouTube"
        />
      </Head>
      <TermsOfUse/>
    </>
  )
}

export default Home