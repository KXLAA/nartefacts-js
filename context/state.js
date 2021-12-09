import { createContext, useContext } from 'react';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const sharedState = {
    likeAlbums: [],
  };

  return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
