// Node dependencies
import { getMdxContent } from "../utils";
import Navbar from "../components/Navbar";

const Home = () => {
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

      {JSON.stringify(mdxContent)}
    </div>
  );
};

export default Home;
