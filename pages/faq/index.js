// pages/faq/index.js
import Head from "next/head";
import FAQAccordion from "../../src/components/app/LandingPage/Faq";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>FAQ - Frequently Asked Questions | SSYouTube</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://ss-youtube.cc/faq/"
        />
        <meta property="og:type" content="website" />
        <meta
          name="description"
          content="Frequently asked questions about SSYouTube video downloader. Learn how to use our free YouTube downloader, MP3 converter, and more."
        />
        <meta
          name="keywords"
          content="ssyoutube faq, youtube downloader faq, video downloader help, youtube converter questions, ssyoutube help"
        />
        <meta name="author" content="SSYouTube" />
        <meta
          property="og:title"
          content="FAQ - Frequently Asked Questions | SSYouTube"
        />
        <meta
          property="og:description"
          content="Frequently asked questions about SSYouTube video downloader. Learn how to use our free YouTube downloader, MP3 converter, and more."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="FAQ - Frequently Asked Questions | SSYouTube"
        />
        <meta
          name="twitter:description"
          content="Frequently asked questions about SSYouTube video downloader. Learn how to use our free YouTube downloader, MP3 converter, and more."
        />
      </Head>
      <FAQAccordion />
    </>
  );
}
