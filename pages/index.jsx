import React, { useState } from 'react';
import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import { MainLayout, HomePageGrid } from '../components/common/Layout';
import { Header } from '../components/albums/Header';
import Albums from '../components/albums/Albums';
import Loading from '../components/common/Loading';

const GET_ALBUM_LIST_FOR_HOME = gql`
  query AlbumForPage {
    albumListForHome {
      id
      type
      title
      artist {
        name
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
  const { data, error, loading } = useQuery(GET_ALBUM_LIST_FOR_HOME);
  if (loading) return <Loading />;
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
            <Albums key={album.id} album={album} />
          ))}
        </HomePageGrid>
      </main>
    </MainLayout>
  );
}
