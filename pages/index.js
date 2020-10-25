// Node dependencies
import { getMdxContent } from "../utils";
import Navbar from "../components/Navbar";

const Home = ({ posts = [] }) => {
  const mdxContent = getMdxContent();
  return (
    <div style={{ padding: "50px" }}>
      <Navbar />
      <h1>Home</h1>
      <h2>List of posts:</h2>
      <ul>
        {mdxContent.map((p) => (
          <li key={p?.slug}>
            <a href={p?.slug}>{p?.meta?.title}</a>
          </li>
        ))}
      </ul>

      {JSON.stringify(posts)}
    </div>
  );
};

export const getStaticProps = async () => {
  // const MDX_EXT = ".mdx";

  // const getSlug = (p) => {
  //   const containingFolder = PATH.dirname(p);
  //   const basename = PATH.basename(p, MDX_EXT);
  //   // index.mdx needs to return the containing folder
  //   if (basename === "index") {
  //     return PATH.join(containingFolder); // do join to get rid of inconsistencies
  //   }
  //   // otherwise, return path to file without extension
  //   return PATH.join(containingFolder, basename);
  // };

  // const pathToPagesDirectory = PATH.join(process.cwd(), "pages");
  // const allFilePaths = await READDIR(pathToPagesDirectory);
  // const mdxFilePaths = allFilePaths
  //   .filter((p) => PATH.extname(p) === MDX_EXT)
  //   .map((p) => PATH.relative(pathToPagesDirectory, p));
  // console.log(mdxFilePaths);
  // const mdxModules = await Promise.all(
  //   mdxFilePaths.map(async (p) => import(`pages/${p}`))
  // );
  // const mdxContent = mdxModules.map((m, i) => {
  //   const slug = getSlug(mdxFilePaths[i]);
  //   return {
  //     slug,
  //     meta: {
  //       title: PATH.basename(slug),
  //       // override with user-provided meta
  //       ...(m?.meta ?? {}),
  //     },
  //   };
  // });

  // const mdxContent = getMdxContent();

  return {
    props: {
      posts: [],
    },
  };
};

export default Home;
