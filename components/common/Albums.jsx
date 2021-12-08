import React from "react";
import styled from "styled-components";
import { BsSuitHeartFill } from "react-icons/bs";

const Card = styled.div`
  border-right: 8px solid black;
  padding: 24px;
  padding-bottom: 32px;
  padding-top: 32px;
  border-bottom: 8px solid black;
`;

const AlbumArt = styled.img`
  width: 100%;
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

export const Albums = ({ album }) => {
  return (
    <>
      <Card>
        <AlbumArt src={album.albumArt} />
        <AlbumDescContainer>
          <div>
            <p>{album.artist.name}</p>
            <p>{album.title}</p>
          </div>
          <Likes>
            <BsSuitHeartFill style={{ fontSize: "32px" }} />
            <p>{album.likeCount}</p>
          </Likes>
        </AlbumDescContainer>

        <ColorPalette>
          {album.colors.map((color) => (
            <ColorBox key={color} bg={color}></ColorBox>
          ))}
        </ColorPalette>
      </Card>
    </>
  );
};
