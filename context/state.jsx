/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

const getLocalStorage = () => {
  let album;
  if (typeof window !== 'undefined') {
    album = localStorage.getItem('album');
    if (album) {
      return (album = JSON.parse(localStorage.getItem('album')));
    }
    return [];
  }
  return album;
};

export function AppWrapper({ children }) {
  const [likedAlbums, updateLikedAlbums] = useState(getLocalStorage());

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('album', JSON.stringify(likedAlbums));
    }
  }, [likedAlbums]);

  const sharedState = {
    likedAlbums: likedAlbums,
    updateLikedAlbums: updateLikedAlbums,
  };
  return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}
