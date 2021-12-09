/* eslint-disable react/prop-types */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';

export const AlbumQuery = gql`
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
  albumForPageId = JSON.stringify(id);

  const { loading, error, data } = useQuery(AlbumQuery, {
    variables: { albumForPageId },
  });

  console.log(data);

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
}
