import Head from "next/head";
import { FiInstagram } from "react-icons/fi";
export default function Home() {
  return (
    <>
      <Head>
        <title>Web Disco | Digital Agency</title>
        <meta
          name="description"
          content="We are a digital agency based in Toronto, with expertise in JAMstack website design and development. Modern web solutins for the modern business."
        />
        <meta
          name="keywords"
          content="strategy, website design, website development, web application, ecommerce, seo, jamstack, javascript, react, gatsby, nextjs, netlify, vercel, hosting, maintenance,"
        />
      </Head>
      <main className="grid place-content-center h-screen text-center">
        <a href="https://www.instagram.com/webdisco/?hl=en" target="_blank">
          <h1 className="font-main font-black text-2xl mb-2">webdisco 🥳</h1>
        </a>
        <p>
          <a href="mailto:hello@webdisco.digital?Subject=Hello!">
            hello@webdisco.digital
          </a>
        </p>
      </main>
    </>
  );
}
