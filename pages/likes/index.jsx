import React from 'react';
import Head from 'next/head';
import { useAppContext } from '../../context/state';
import { MainLayout, HomePageGrid } from '../../components/common/Layout';
import Albums from '../../components/likes/Albums';
import Header from '../../components/likes/Header';
import Empty from '../../components/likes/Empty';

const Favorites = () => {
  const { likedAlbums } = useAppContext();

  return (
    <MainLayout>
      <Head>
        <title>Your Likes</title>
        <meta
          name="description"
          content="A collection of color palettes inspired by african music"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />
      </Head>
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
