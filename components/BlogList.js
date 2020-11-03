import React from "react";
import styled from "styled-components";
import { getMdxContent } from "utils";
import Link from "next/link";

const BlogTitle = styled.h3`
  margin-left: 20px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const Group = styled.div``;

const BlogList = ({ featuredOnly = false, limit = null }) => {
  const mdxContent = getMdxContent();

  // only display posts with audio in their meta tag
  let blogPosts = mdxContent.filter((c) => c?.meta?.type === "blog");

  // if featured is set
  if (featuredOnly) {
    blogPosts = blogPosts.filter((c) => c?.meta?.featured);
  }

  // if limit is set
  if (limit) {
    blogPosts = blogPosts.slice(0, limit);
  }

  blogPosts.sort((a, b) => {
    const aDate = new Date(a?.meta?.date);
    const bDate = new Date(b?.meta?.date);
    return bDate - aDate;
  });

  return (
    <div>
      {blogPosts.map((p, i) => {
        const date = new Date(p?.meta?.date);
        const year = date ? date.getFullYear() + "" : "";
        return (
          <div
            className={year}
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "5px",
              borderTop: "1px solid #E5C69F",
            }}
          >
            <Group style={{ display: "flex", alignItems: "center" }}>
              <Link href={p?.slug}>
                <BlogTitle>
                  {p?.meta?.title}{" "}
                  {p?.meta?.title_cn ? `- ${p?.meta?.title_cn}` : ""}
                </BlogTitle>
              </Link>
            </Group>
            <Group style={{ display: "flex" }}>
              {/* <details className="dropdown-animate">
                    <summary className="dropdown-animate">See Lyrics</summary>
                    <Lyrics lyrics={p.meta.lyrics_cn} />
                  </details> */}
              <p>{p?.meta?.date}</p>
            </Group>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
