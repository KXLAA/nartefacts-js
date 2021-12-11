import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSuitHeartFill } from 'react-icons/bs';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { gql, useMutation } from '@apollo/client';
import ColorBox from './ColorBox';
import { useAppContext } from '../../context/state';

const ADD_TO_LIKE = gql`
  mutation Mutation($addToLikeId: ID!) {
    addToLike(id: $addToLikeId) {
      likeCount
    }
  }
`;

const REMOVE_FROM_LIKE = gql`
  mutation Mutation($removeFromLikeId: ID!) {
    removeFromLike(id: $removeFromLikeId) {
      likeCount
    }
  }
`;

const Card = styled.div`
  border-right: 8px solid black;
  padding: 24px;
  padding-bottom: 32px;
  padding-top: 32px;
  border-bottom: 8px solid black;
`;

const AlbumArt = styled.img`
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(20%);
  }
`;

const AlbumDescContainer = styled.div`
  padding-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  div {
    padding-top: 16px;
  }

  p {
    font-size: 24px;
    line-height: 24px;
  }
`;

const Likes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  cursor: pointer;
`;

const ColorPalette = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

const Albums = ({ album }) => {
  const { likedAlbums, updateLikedAlbums, isLiked, updateLike } = useAppContext();

  const [addToLike] = useMutation(ADD_TO_LIKE, {
    variables: { addToLikeId: album.id },
  });

  const [removeFromLike, { data }] = useMutation(REMOVE_FROM_LIKE, {
    variables: { removeFromLikeId: album.id },
  });

  const handleLike = () => {
    if (!isLiked) {
      updateLike((prevCheck) => !prevCheck);
      if (!likedAlbums.includes(album)) updateLikedAlbums([...likedAlbums, album]);
      addToLike();
    } else {
      updateLike((prevCheck) => !prevCheck);
      if (likedAlbums.includes(album)) updateLikedAlbums(likedAlbums.filter((al) => al !== album));
      removeFromLike();
      localStorage.removeItem('album');
    }
  };

  return (
    <>
      <Card>
        <Link href={`/album/${album.id}`}>
          <AlbumArt src={album.albumArt} />
        </Link>
        <AlbumDescContainer>
          <div>
            <p>{album.artist.name}</p>
            <p>{album.title}</p>
          </div>
          <Likes onClick={handleLike}>
            <BsSuitHeartFill
              style={{ fontSize: '32px', color: !likedAlbums?.includes(album) ? 'black' : 'red' }}
            />
            <p>{album.likeCount}</p>
          </Likes>
        </AlbumDescContainer>

        <ColorPalette>
          {album.colors.map((color) => (
            <ColorBox color={color} key={color} bg={color} />
          ))}
        </ColorPalette>
      </Card>
    </>
  );
};

export default Albums;

Albums.propTypes = {
  album: PropTypes.shape({
    id: PropTypes.string,
    albumArt: PropTypes.string,
    title: PropTypes.string,
    likeCount: PropTypes.number,
    colors: PropTypes.arrayOf(PropTypes.string),
    artist: PropTypes.shape({
      photoURL: PropTypes.string,
      name: PropTypes.string,
    }),
    urls: PropTypes.shape({
      apple: PropTypes.string,
      spotify: PropTypes.string,
    }),
  }).isRequired,
};
