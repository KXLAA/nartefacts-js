import React from 'react';
import styled from 'styled-components';

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

const ColorBox = styled.div`
  width: 100%;
  background-color: ${(props) => props.bg};
`;

const DetailsContainer = styled.div`
  display: flex;
  padding: 16px;
  gap: 16px;
`;

const Detail = styled.div``;

const Album = ({ album }) => {
  return (
    <Container>
      <AlbumContainer>
        <Image src={album.albumArt} alt="Picture of the author" />
        <ColorPalette>
          {album?.colors?.map((color) => (
            <ColorBox key={color} bg={color} />
          ))}
        </ColorPalette>
      </AlbumContainer>
      <DetailsContainer>
        <Detail>
          <h1>Heloo</h1>
          <h1>Heloo</h1>
        </Detail>
      </DetailsContainer>
    </Container>
  );
};

export default Album;
