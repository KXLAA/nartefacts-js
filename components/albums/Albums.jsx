/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import { BsSuitHeartFill } from 'react-icons/bs';
import Link from 'next/link';

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
`;

const ColorPalette = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;

const ColorBox = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  background-color: ${(props) => props.bg};
`;

export const Albums = ({ album, likedAlbums, updateLikedAlbums }) => {
  const [isLiked, updateLike] = useState(false);

  const handleLike = () => {
    const currentLikedAlbums = likedAlbums;
    if (!isLiked) {
      updateLike(true);
      if (!currentLikedAlbums.includes(album)) updateLikedAlbums([...currentLikedAlbums, album]);
    } else {
      updateLike(false);
      if (currentLikedAlbums.includes(album))
        updateLikedAlbums(currentLikedAlbums.filter((al) => al !== album));
    }
    console.log(isLiked);
    console.log(likedAlbums);
  };

  const likeColor = isLiked ? 'red' : 'black';

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
            <ColorBox key={color} bg={color} />
          ))}
        </ColorPalette>
      </Card>
    </>
  );
};

export default Albums;
