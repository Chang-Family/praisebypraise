import "../global.css";
import "normalize.css";
import { GlobalStateProvider } from "hooks/useGlobalState";
import CurrentlyPlaying from "components/CurrentlyPlaying";

const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalStateProvider>
      {/* <div> */}
      {/* <CurrentlyPlaying /> */}
      <Component {...pageProps} />
      {/* </div> */}
    </GlobalStateProvider>
  );
};

export default MyApp;
