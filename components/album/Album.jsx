/* eslint-disable import/no-named-as-default */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BsSuitHeartFill } from 'react-icons/bs';
import { gql, useMutation } from '@apollo/client';
import { Button } from '../common/Ui';
import ColorBox from './ColorBox';
import device from '../common/MediaQueries';
import { useAppContext } from '../../context/state';

const ADD_TO_LIKE = gql`
  mutation Mutation($addToLikeId: ID!) {
    addToLike(id: $addToLikeId) {
      likeCount
      id
    }
  }
`;

const REMOVE_FROM_LIKE = gql`
  mutation Mutation($removeFromLikeId: ID!) {
    removeFromLike(id: $removeFromLikeId) {
      likeCount
      id
    }
  }
`;

const Container = styled.section`
  border: 8px solid;
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    border-width: 6px;
  }
`;

const AlbumContainer = styled.section`
  display: flex;
  padding: 16px;
  gap: 16px;
  border-bottom: 8px solid;

  @media ${device.tablet} {
    flex-direction: column;
  }

  @media ${device.mobile} {
    padding: 12px;
    gap: 8px;
    border-width: 6px;
  }
`;

const AlbumImage = styled.img`
  width: 50%;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const ColorPalette = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  width: 50%;

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobile} {
    display: flex;
    flex-direction: row;
    gap: 8px;
    overflow-x: auto;
    scroll-snap-type: x;
    -ms-overflow-style: none;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Info = styled.div`
  display: flex;
  padding: 16px;
  gap: 16px;
  padding-top: 24px;
  padding-bottom: 24px;
  align-items: center;

  @media ${device.mobile} {
    padding: 8px;
    gap: 8px;
  }
`;

const Detail = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: column;
    text-align: center;
  }

  h1 {
    font-weight: 900;
    font-size: 96px;
    line-height: 128px;

    @media ${device.tablet} {
      font-size: 73px;
      line-height: 1.5;
    }

    @media ${device.mobile} {
      font-size: 48px;
      line-height: 64px;
    }
  }

  h2 {
    font-weight: 900;
    font-size: 48px;
    line-height: 64px;

    @media ${device.mobile} {
      font-size: 32px;
      line-height: 1.5;
    }
  }
`;

const AlbumDetails = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.mobile} {
    text-align: center;
  }
`;

const Like = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-weight: 900;
  font-size: 96px;
  line-height: 128px;

  @media ${device.tablet} {
    font-size: 54px;
    line-height: 1.5;
  }

  @media ${device.mobile} {
    font-size: 32px;
    line-height: 1.5;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Btn = styled(Button)`
  border: 8px solid;
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

  @media ${device.mobile} {
    border-width: 6px;
    padding: 24px 0;
    font-size: 36px;
  }
`;

const Album = ({ album }) => {
  const { likedAlbums, updateLikedAlbums } = useAppContext();

  const [addToLike] = useMutation(ADD_TO_LIKE, {
    variables: { addToLikeId: album.id },
  });

  const [removeFromLike] = useMutation(REMOVE_FROM_LIKE, {
    variables: { removeFromLikeId: album.id },
  });

  const handleLike = () => {
    if (!likedAlbums?.some((al) => al.id === album.id)) {
      updateLikedAlbums([...likedAlbums, album]);
      addToLike();
    } else {
      if (likedAlbums?.some((al) => al.id === album.id))
        updateLikedAlbums(likedAlbums.filter((al) => al.id !== album.id));
      removeFromLike();
    }
  };

  const liked = likedAlbums.some((al) => al.id === album.id) ? 'red' : 'black';

  return (
    <Container>
      <AlbumContainer>
        <AlbumImage src={album?.albumArt} alt={album?.title} />
        <ColorPalette>
          {album?.colors?.map((color) => (
            <ColorBox key={color} color={color} />
          ))}
        </ColorPalette>
      </AlbumContainer>

      <Info>
        <Detail>
          <AlbumDetails>
            <h1>{album?.title} </h1>
            <h2>{album?.artist?.name}</h2>
          </AlbumDetails>

          <Like>
            <p>{album?.likeCount}</p>
            <BsSuitHeartFill onClick={handleLike} style={{ color: liked }} />
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

Album.propTypes = {
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
