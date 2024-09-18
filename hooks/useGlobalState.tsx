import { createContext, useContext, useState } from "react";

const GlobalState = createContext({
  playlist: [],
  setPlaylist: (val: any[]) => {},

  playlistPosition: 0,
  setPlaylistPosition: (val: number) => {},

  isPlaying: false,
  setIsPlaying: (val: boolean) => {},
});

export const GlobalStateProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const [playlistPosition, setPlaylistPosition] = useState(0);

  return (
    <GlobalState.Provider
      value={{
        isPlaying,
        setIsPlaying,

        playlist,
        setPlaylist,

        playlistPosition,
        setPlaylistPosition,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalState);
  return {
    ...context,
  };
};

export default useGlobalState;
