import React from 'react';
import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import { MainLayout, HomePageGrid } from '../components/common/Layout';
import { Header } from '../components/common/Header';
import { Albums } from '../components/common/Albums';

const AllAlbumQuery = gql`
  query {
    albumListForHome {
      id
      title
      type
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
            <Albums key={album.id} album={album} />
          ))}
        </HomePageGrid>
      </main>
    </MainLayout>
  );
}
