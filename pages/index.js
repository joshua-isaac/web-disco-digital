import Head from "next/head";
import { FiInstagram, FiMail } from "react-icons/fi";
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Web Disco Digital | High-quality, blazing-fast websites crafted in
          Toronto.
        </title>
        <meta
          name="description"
          content="creative web agency helping your business grow with modern websites and web apps built on with jamstack architecture."
        />
        <meta
          name="keywords"
          content="strategy, website design, website development, web application, ecommerce, seo, jamstack, javascript, react, gatsby, nextjs, netlify, vercel, hosting, maintenance,"
        />
      </Head>
      <main className="h-screen flex flex-col justify-center px-4 md:px-20">
        <a
          href="https://www.instagram.com/webdisco.digital/?hl=en"
          target="_blank"
        >
          <h1 className="font-main font-semibold text-2xl mb-2 tracking-wide">
            web disco digital
          </h1>
        </a>
        <div className="max-w-lg">
          <p className="mb-8">
            Helping brands have fun on the internet with high-quality,
            blazing-fast websites and web apps.{" "}
          </p>
          <p className="text-sm">
            * While we are still under construction, feel free to reach out via{" "}
            <span className="font-semibold">
              <a href="mailto:hello@webdisco.digital?Subject=Hello!">email</a>
            </span>{" "}
            for any inquiries.
          </p>
        </div>
        {/* <ul className="flex mt-8 text-2xl">
          <li className="mr-4">
            <a
              href="https://www.instagram.com/webdisco.digital/?hl=en"
              target="_blank"
            >
              <FiInstagram />
            </a>
          </li>
          <ul>
            <a href="mailto:hello@webdisco.digital?Subject=Hello!">
              <FiMail />
            </a>
          </ul>
        </ul> */}
      </main>
    </>
  );
}
