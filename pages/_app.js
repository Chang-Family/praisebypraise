import "../global.css";
import "normalize.css";
import { GlobalStateProvider } from "hooks/useGlobalState";
import CurrentlyPlaying from "components/CurrentlyPlaying";

const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalStateProvider>
      <div style={{ display: "flex", height: "100%" }}>
        <div
          style={{
            backgroundColor: "red",
            height: "100vh",
            width: "100%",
            maxWidth: "100px",
            position: "fixed",
          }}
        >
          <CurrentlyPlaying />
        </div>
        <div style={{ height: "100%", width: "100%" }}>
          <Component {...pageProps} />
        </div>
      </div>
    </GlobalStateProvider>
  );
};

export default MyApp;
