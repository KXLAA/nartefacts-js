import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Button, ButtonContainer } from '../common/Ui';
import { useAppContext } from '../../context/state';

const Logo = styled.img`
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 8px solid black;
  margin-bottom: 16px;
`;

const Description = styled.h1`
  font-size: 40px;
  line-height: 56px;
  width: 40%;
  max-width: 560px;
  font-weight: 900;
`;

const Counter = styled.div`
  background-color: red;
  width: 70px;
  aspect-ratio: 1/1;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  right: 450px;
  bottom: 90px;
  z-index: 2;

  p {
    color: white;
    font-size: 32px;
  }
`;

export const Header = () => {
  const { likedAlbums, updateLikedAlbums } = useAppContext();

  return (
    <header>
      <Logo
        src="https://ucarecdn.com/c41f4ab9-8e44-40dd-8549-8f3d01f14982/nartefactsb.svg"
        alt="nartefacts logo"
      />
      <Description>A COLLECTION OF COLOR PALLETTES INSPIRED BY AFRICAN MUSIC</Description>

      <ButtonContainer>
        {likedAlbums.length >= 1 && (
          <Counter>
            <p>{likedAlbums.length}</p>
          </Counter>
        )}
        <Link href="/likes">
          <Button>YOUR LIKES</Button>
        </Link>
      </ButtonContainer>
    </header>
  );
};

export default Header;
