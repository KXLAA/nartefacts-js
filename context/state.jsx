import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [likedAlbums, updateLikedAlbums] = useState([]);
  const [isLiked, updateLike] = useState(false);
  const [likeColor, setLikeColor] = useState('black');

  const sharedState = {
    likedAlbums: likedAlbums,
    updateLikedAlbums: updateLikedAlbums,
    isLiked: isLiked,
    updateLike: updateLike,
    likeColor: likeColor,
    setLikeColor: setLikeColor,
  };

  console.log(likedAlbums);

  return <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  return useContext(AppContext);
}

AppWrapper.propTypes = {
  children: PropTypes.object.isRequired,
};
