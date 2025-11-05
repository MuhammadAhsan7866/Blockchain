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
          name="keywords"
          content="ssyoutube terms of service, youtube downloader terms, video downloader terms and conditions"
        />
        <meta name="author" content="SSYouTube" />
        <meta
          property="og:title"
          content="Terms of Service | SSYouTube"
        />
        <meta
          property="og:description"
          content="Terms of Service for SSYouTube video downloader. Read our terms and conditions for using our free YouTube downloader service."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Terms of Service | SSYouTube"
        />
        <meta
          name="twitter:description"
          content="Terms of Service for SSYouTube video downloader. Read our terms and conditions for using our free YouTube downloader service."
        />
      </Head>
      <TermsOfUse/>
    </>
  )
}

export default Home