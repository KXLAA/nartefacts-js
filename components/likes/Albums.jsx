import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSuitHeartFill } from 'react-icons/bs';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { gql, useMutation } from '@apollo/client';
import ColorBox from '../albums/ColorBox';
import { useAppContext } from '../../context/state';
import device from '../common/MediaQueries';

const Card = styled.div`
  border-right: 8px solid black;
  padding: 24px;
  padding-bottom: 32px;
  padding-top: 32px;
  border-bottom: 8px solid black;

  @media ${device.tablet} {
    padding: 12px;
    border-width: 6px;
  }
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

const ColorPalette = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

const Albums = ({ album }) => (
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
      </AlbumDescContainer>

      <ColorPalette>
        {album.colors.map((color) => (
          <ColorBox color={color} key={color} bg={color} />
        ))}
      </ColorPalette>
    </Card>
  </>
);

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
