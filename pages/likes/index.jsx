import React from 'react';
import { useAppContext } from '../../context/state';
import { MainLayout, HomePageGrid } from '../../components/common/Layout';
import Albums from '../../components/albums/Albums';
import Header from '../../components/likes/Header';

const Favorites = () => {
  const { likedAlbums } = useAppContext();

  return (
    <MainLayout>
      <Header />
      {likedAlbums.length >= 1 && (
        <HomePageGrid>
          {likedAlbums?.map((album) => (
            <Albums key={album.id} album={album} />
          ))}
        </HomePageGrid>
      )}
    </MainLayout>
  );
};

export default Favorites;
