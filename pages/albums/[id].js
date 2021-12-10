/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';

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

export default function Album({ albumForPageId }) {
  const router = useRouter();
  const { id } = router.query;
  albumForPageId = id;

  const { loading, error, data } = useQuery(GET_ALBUM_FOR_PAGE, {
    variables: { albumForPageId },
    skip: !router.isReady,
  });

  console.log(data);

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}
