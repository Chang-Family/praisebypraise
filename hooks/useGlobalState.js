import React, { useState, useContext, createContext } from "react";

const GlobalState = createContext({
  playlist: [],
  setPlaylist: () => {},

  playlistPosition: 0,
  setPlaylistPosition: () => {},

  isPlaying: false,
  setIsPlaying: () => {},
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
