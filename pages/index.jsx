import React from 'react';
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
