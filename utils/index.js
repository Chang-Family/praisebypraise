import PATH from "path";

const MDX_EXT = ".mdx";

const getSlug = (p) => {
  const containingFolder = PATH.dirname(p);
  const basename = PATH.basename(p, MDX_EXT);
  // index.mdx needs to return the containing folder
  if (basename === "index") {
    return PATH.join(containingFolder); // do join to get rid of inconsistencies
  }
  // otherwise, return path to file without extension
  return PATH.join(containingFolder, basename);
};

export const getMdxContent = () => {
  const mdxContext = require.context("../pages", true, /\.mdx$/);
  const mdxFilePaths = mdxContext.keys();
  const mdxModules = mdxFilePaths.map((p) => {
    return {
      slug: getSlug(p),
      meta: {
        title: PATH.basename(getSlug(p)),
        // override with user-provided meta
        ...(mdxContext(p)?.meta ?? {}),
        // other stuff
        MDXDocument: mdxContext(p)?.default,
      },
    };
  });
  return mdxModules;
};
