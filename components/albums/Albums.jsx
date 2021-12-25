/* eslint-disable import/no-named-as-default */
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { BsSuitHeartFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { gql, useMutation } from '@apollo/client';
import ColorBox from './ColorBox';
import { useAppContext } from '../../context/state';
import device from '../common/MediaQueries';

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

const Card = styled.div`
  border-right: 8px solid;
  padding: 24px;
  padding-bottom: 32px;
  padding-top: 32px;
  border-bottom: 8px solid;

  @media ${device.tablet} {
    padding: 12px;
    border-width: 6px;
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
    font-size: 18px;
    @media ${device.laptop} {
      font-size: 18px;
    }

    @media ${device.desktop} {
      font-size: 24px;
    }

    @media ${device.tabletL} {
      font-size: 24px;
    }

    @media ${device.mobile} {
      font-size: 18px;
    }

    @media ${device.mobileXS} {
      font-size: 15px;
    }
  }

  h4 {
    font-size: 20px;
    font-weight: 900;

    @media ${device.desktop} {
      font-size: 32px;
    }

    @media ${device.tabletL} {
      font-size: 32px;
    }

    @media ${device.mobile} {
      font-size: 24px;
    }

    @media ${device.mobileXS} {
      font-size: 18px;
    }
  }
`;

const Heart = styled(BsSuitHeartFill)`
  width: 24px;
  height: 24px;
`;

const Likes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  font-size: 24px;

  @media ${device.mobileS} {
    font-size: 18px;
  }

  p {
    font-size: 24px;

    @media ${device.mobileS} {
      font-size: 18px;
    }
  }

  @media ${device.mobileS} {
    flex-direction: column;
    gap: 8px;
  }
`;

const ColorPalette = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

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

const Albums = ({ album }) => {
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
    <>
      <Card>
        <>
          <Image
            className="nextImg"
            width={1500}
            height={1500}
            alt={album.title}
            src={album.albumArt}
            layout="responsive"
            placeholder="blur"
            blurDataURL
          />
        </>
        <AlbumDescContainer>
          <div>
            <h4>{album.title}</h4>
            <p>{album.artist.name}</p>
          </div>

          <Likes>
            <Heart onClick={handleLike} style={{ color: liked }} />
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
