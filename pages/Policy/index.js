// pages/Policy/index.js
import Head from "next/head";
import PrivacyPolicy from "../../src/components/app/LandingPage/PrivacyPolicy";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy | SSYouTube</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://ss-youtube.cc/Policy/"
        />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Privacy Policy for SSYouTube - Learn how we collect, use, and protect your data when using our video downloader service."
        />
        <meta
          name="keywords"
          content="ssyoutube privacy policy, youtube downloader privacy, video downloader data protection"
        />
        <meta name="author" content="SSYouTube" />
        <meta
          property="og:title"
          content="Privacy Policy | SSYouTube"
        />
        <meta
          property="og:description"
          content="Privacy Policy for SSYouTube - Learn how we collect, use, and protect your data when using our video downloader service."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Privacy Policy | SSYouTube"
        />
        <meta
          name="twitter:description"
          content="Privacy Policy for SSYouTube - Learn how we collect, use, and protect your data when using our video downloader service."
        />
      </Head>
      <PrivacyPolicy />
    </>
  );
}
