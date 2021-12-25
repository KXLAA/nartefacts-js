import React from 'react';
import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import { MainLayout, HomePageGrid } from '../components/common/Layout';
import { Header } from '../components/albums/Header';
import Albums from '../components/albums/Albums';
import Loading from '../components/common/Loading';
import Error from '../components/common/Error';
import Footer from '../components/common/Footer';

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
  if (error) return <Error message={error.message} />;

  return (
    <MainLayout>
      <Head>
        <title>nartefacts</title>
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

      <main>
        <HomePageGrid className="item-animation">
          {data?.albumListForHome?.map((album) => (
            <Albums key={album.id} album={album} />
          ))}
        </HomePageGrid>
      </main>
      <Footer />
    </MainLayout>
  );
}
