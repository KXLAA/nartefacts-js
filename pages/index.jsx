import React, { useState } from 'react';
import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import { MainLayout, HomePageGrid } from '../components/common/Layout';
import { Header } from '../components/albums/Header';
import { Albums } from '../components/albums/Albums';
import { useAppContext } from '../context/state';

const AllAlbumQuery = gql`
  query AlbumForPage {
    albumListForHome {
      id
      type
      title
      artist {
        name
        photoURL
      }
      albumArt
      urls {
        spotify
        apple
      }
      colors
      likeCount
    }
  }
`;

export default function Home() {
  const [likedAlbums, updateLikedAlbums] = useState([]);
  const { data, error, loading } = useQuery(AllAlbumQuery);
  if (loading) return <p>Loading....</p>;
  if (error) return <p>Ooops, something went wrong {error.message}</p>;

  return (
    <MainLayout>
      <Head>
        <title>nartefacts</title>
        <meta
          name="description"
          content="A collection of color palettes inspired by african music"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <HomePageGrid>
          {data?.albumListForHome?.map((album) => (
            <Albums
              key={album.id}
              album={album}
              likedAlbums={likedAlbums}
              updateLikedAlbums={updateLikedAlbums}
            />
          ))}
        </HomePageGrid>
      </main>
    </MainLayout>
  );
}
