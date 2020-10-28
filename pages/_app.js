import "../global.css";
import "normalize.css";
import { GlobalStateProvider } from "hooks/useGlobalState";

const MyApp = ({ Component, pageProps }) => {
  return (
    <GlobalStateProvider>
      <Component {...pageProps} />
    </GlobalStateProvider>
  );
};

export default MyApp;
