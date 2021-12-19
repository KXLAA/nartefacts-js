import React from 'react';
import { useAppContext } from '../../context/state';
import { MainLayout, HomePageGrid } from '../../components/common/Layout';
import Albums from '../../components/likes/Albums';
import Header from '../../components/likes/Header';
import Empty from '../../components/likes/Empty';

const Favorites = () => {
  const { likedAlbums } = useAppContext();

  return (
    <MainLayout>
      <Header />
      {likedAlbums?.length >= 1 ? (
        <HomePageGrid className="item-animation">
          {likedAlbums?.map((album) => (
            <Albums key={album.id} album={album} />
          ))}
        </HomePageGrid>
      ) : (
        <Empty />
      )}
    </MainLayout>
  );
};

export default Favorites;
