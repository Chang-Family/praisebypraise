import "../global.css";
import "normalize.css";
import { GlobalStateProvider } from "hooks/useGlobalState";
import Sidebar from "components/Sidebar";
import CurrentlyPlaying from "components/CurrentlyPlaying";

const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalStateProvider>
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar>
          <CurrentlyPlaying />
        </Sidebar>
        <div style={{ height: "100%", width: "100%" }}>
          <Component {...pageProps} />
        </div>
      </div>
    </GlobalStateProvider>
  );
};

export default MyApp;
