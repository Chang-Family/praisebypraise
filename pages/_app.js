import "../global.css";
import "normalize.css";
import { GlobalStateProvider } from "hooks/useGlobalState";
import Sidebar from "components/Sidebar";
import NowPlaying from "components/NowPlaying";

const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalStateProvider>
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar>
          <NowPlaying />
        </Sidebar>
        <div style={{ height: "100%", width: "100%", overflow: "scroll" }}>
          <Component {...pageProps} />
        </div>
      </div>
    </GlobalStateProvider>
  );
};

export default MyApp;
