import React from 'react';
import styled from 'styled-components';
import { BsSuitHeartFill } from 'react-icons/bs';
import { Button } from '../common/Ui';
import ColorBox from './ColorBox';

const Container = styled.section`
  border: 8px solid black;
  display: flex;
  flex-direction: column;
`;

const AlbumContainer = styled.section`
  display: flex;
  padding: 16px;
  gap: 16px;
  border-bottom: 8px solid black;
`;

const Image = styled.img`
  width: 50%;
`;

const ColorPalette = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 50%;
`;

const Info = styled.div`
  display: flex;
  padding: 16px;
  gap: 16px;
  padding-top: 24px;
  padding-bottom: 24px;
  align-items: center;
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  h1 {
    font-weight: 900;
    font-size: 96px;
    line-height: 128px;
  }

  h2 {
    font-weight: 900;
    font-size: 48px;
    line-height: 64px;
  }
`;

const AlbumDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Like = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 900;
  font-size: 96px;
  line-height: 128px;
`;

const ArtistImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  border: 8px solid #000000;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Btn = styled(Button)`
  border: 8px solid black;
  border-bottom: none;
  border-left: none;
  border-right: none;
  padding: 24px;
  text-decoration: none;
  color: inherit;

  &:hover {
    background: black;
    color: white;
    transform: translateX(0rem) translateY(0rem);
  }
`;

const Album = ({ album }) => {
  console.log(album);
  return (
    <Container>
      <AlbumContainer>
        <Image src={album?.albumArt} alt="Picture of the author" />
        <ColorPalette>
          {album?.colors?.map((color) => (
            <ColorBox key={color} color={color} />
          ))}
        </ColorPalette>
      </AlbumContainer>

      <Info>
        <ArtistImage src={album?.artist?.photoURL} alt="Picture of the author" />

        <Detail>
          <AlbumDetails>
            <h1>{album?.artist?.name}</h1>
            <h2>{album?.title} </h2>
          </AlbumDetails>

          <Like>
            <BsSuitHeartFill style={{ fontSize: '32px' }} />
            <p>{album?.likeCount}</p>
          </Like>
        </Detail>
      </Info>
      <ButtonContainer>
        <Btn href={album?.urls?.apple} target="_blank">
          APPLE MUSIC
        </Btn>
        <Btn href={album?.urls?.spotify} target="_blank">
          SPOTIFY
        </Btn>
      </ButtonContainer>
    </Container>
  );
};

export default Album;
