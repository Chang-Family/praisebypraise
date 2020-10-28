import React from "react";
import Navbar from "./Navbar";
import Head from "next/head";

// You don't have to use this, but it can be a nice way to wrap your MDX content
// You also get SEO stuff e.g. tab title for free
// You can also import Navbar etc. here so you don't have to do it for every MDX page
const MDXWrapper = ({ children, meta }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="Description" content={meta?.description}></meta>
        <title>{meta?.title}</title>
      </Head>
      <main>
        {/* header */}
        <Navbar />
        {/* content */}
        <div style={{ padding: "50px" }}>
          {/* meta */}
          <h1>{meta?.title}</h1>
          <p>
            {isNaN(new Date(meta?.date))
              ? ""
              : new Date(meta?.date).toDateString()}
          </p>
          {/* content */}
          <article className="mdx-content">{children}</article>
        </div>
        {/* footer */}
      </main>
    </>
  );
};

export default MDXWrapper;
