import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSuitHeartFill } from 'react-icons/bs';
import Link from 'next/link';
import PropTypes from 'prop-types';
import ColorBox from './ColorBox';
import { useAppContext } from '../../context/state';

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
  const [isLiked, updateLike] = useState(false);
  const [likeColor, setLikeColor] = useState('black');
  const { likedAlbums, updateLikedAlbums } = useAppContext();

  const handleLike = () => {
    // const currentLikedAlbums = likedAlbums;

    if (!isLiked) {
      updateLike(true);
      setLikeColor('red');
      if (!likedAlbums.includes(album)) updateLikedAlbums([...likedAlbums, album]);
    } else {
      updateLike(false);
      setLikeColor('black');
      if (likedAlbums.includes(album)) updateLikedAlbums(likedAlbums.filter((al) => al !== album));
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
          <Likes>
            <BsSuitHeartFill onClick={handleLike} style={{ fontSize: '32px', color: likeColor }} />
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
