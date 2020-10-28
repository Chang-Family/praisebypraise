import React, { useState, useContext, createContext } from "react";

const GlobalState = createContext({
  currentlyPlayingSong: {},
  setCurrentlyPlayingSong: () => {},

  nextSongs: [],
  setNextSongs: () => {},

  isPlaying: false,
  setIsPlaying: () => {},
});

export const GlobalStateProvider = ({ children }) => {
  const [currentlyPlayingSong, setCurrentlyPlayingSong] = useState({});
  const [nextSongs, setNextSongs] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <GlobalState.Provider
      value={{
        currentlyPlayingSong,
        setCurrentlyPlayingSong,

        nextSongs,
        setNextSongs,

        isPlaying,
        setIsPlaying,
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
