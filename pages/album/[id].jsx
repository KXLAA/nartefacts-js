/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import React from 'react';
import Head from 'next/head';
import { Header } from '../../components/album/Header';
import { MainLayout } from '../../components/common/Layout';
import Album from '../../components/album/Album';
import Loading from '../../components/common/Loading';
import Error from '../../components/common/Error';
import Footer from '../../components/common/Footer';

const GET_ALBUM_FOR_PAGE = gql`
  query AlbumForPage($albumForPageId: ID!) {
    albumForPage(id: $albumForPageId) {
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

export default function AlbumDetail({ albumForPageId }) {
  const router = useRouter();
  const { id } = router.query;
  albumForPageId = id;

  const { loading, error, data } = useQuery(GET_ALBUM_FOR_PAGE, {
    variables: { albumForPageId },
    skip: !router.isReady,
  });

  if (loading) return <Loading />;
  if (error) return <Error message={error.message} />;

  return (
    <MainLayout>
      <Head>
        <title>
          {data?.albumForPage.title} BY {data?.albumForPage.artist.name}
        </title>
        <meta
          name="description"
          content="A collection of color palettes inspired by african music"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="item-animation">
        <Album album={data?.albumForPage} />
      </main>
      <Footer />
    </MainLayout>
  );
}
