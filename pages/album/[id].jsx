/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import React from 'react';
import Head from 'next/head';
import { Header } from '../../components/album/Header';
import { MainLayout } from '../../components/common/Layout';
import Album from '../../components/album/Album';

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

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Ooops, something went wrong {error.message}</p>;

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

      <main>
        <Album album={data?.albumForPage} />
      </main>
    </MainLayout>
  );
}
