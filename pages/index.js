// Node dependencies
import { getMdxContent } from "../utils";
import Navbar from "../components/Navbar";
import Lyrics from "components/Lyrics";
import Playlist from "components/Playlist";

const Home = () => {
  const mdxContent = getMdxContent();
  return (
    <div style={{ padding: "50px" }}>
      <Navbar />
      <h1>Home</h1>
      <h2>List of posts:</h2>

      {mdxContent.map((p) => {
        return (
          // container
          <div
            key={p?.slug}
            style={{
              backgroundColor: "lightgrey",
              padding: "10px",
              margin: "10px",
              borderRadius: "10px",
              color: "white",
              textDecoration: "none",
            }}
          >
            {/* top stuff */}
            <div style={{ display: "flex" }}>
              <h2>{p?.meta?.title}</h2>
              <audio controls src={p?.meta?.audio} />
            </div>
            {/* bottom stuff */}
            {/* link */}
            <a href={p?.slug}>{p?.meta?.title}</a>
            {/* show/hide lyrics */}
            <details>
              <summary>Show Lyrics</summary>
              <Lyrics lyrics={p.meta.lyrics_cn} />
            </details>
          </div>
        );
      })}

      <h2>Playlist</h2>
      <Playlist />
    </div>
  );
};

export default Home;
