/* eslint-disable react/prop-types */
import { BsSuitHeartFill } from 'react-icons/bs';

import styled from 'styled-components';

import React from 'react';
import { useAppContext } from '../../context/state';

const Likes = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  cursor: pointer;
`;

const Like = ({ album, onClick }) => {
  const { isLiked } = useAppContext();
  return (
    <Likes onClick={onClick}>
      <BsSuitHeartFill style={{ fontSize: '32px', color: isLiked ? 'red' : 'black' }} />
      <p>{album.likeCount}</p>
    </Likes>
  );
};

export default Like;
