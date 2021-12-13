import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Button, ButtonContainer, Toggle } from '../common/Ui';
import { useAppContext } from '../../context/state';
import device from '../common/MediaQueries';

const Logo = styled.img`
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 8px solid black;
  margin-bottom: 16px;
  cursor: pointer;

  @media ${device.mobile} {
    border-width: 6px;
    margin-bottom: 32px;
  }
`;

const Description = styled.h1`
  font-size: 40px;
  line-height: 56px;
  width: 40%;
  max-width: 560px;
  font-weight: 900;

  @media ${device.tablet} {
    width: 100%;
    max-width: 100%;
    text-align: center;
    font-size: 36px;
    padding-bottom: 24px;
  }

  @media ${device.mobile} {
    display: none;
  }
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

  @media ${device.tablet} {
    display: none;
  }

  p {
    color: white;
    font-size: 32px;
  }
`;

const Container = styled(ButtonContainer)`
  @media ${device.tablet} {
    justify-content: center;
  }
`;

export const Header = () => {
  const { likedAlbums } = useAppContext();

  return (
    <header>
      <Link href="/">
        <Logo
          src="https://ucarecdn.com/c41f4ab9-8e44-40dd-8549-8f3d01f14982/nartefactsb.svg"
          alt="nartefacts logo"
        />
      </Link>

      <Description>A COLLECTION OF COLOR PALLETTES INSPIRED BY AFRICAN MUSIC</Description>

      <Container>
        {likedAlbums?.length >= 1 && (
          <Counter>
            <p>{likedAlbums?.length}</p>
          </Counter>
        )}
        <Link href="/likes">
          <Button>YOUR LIKES</Button>
        </Link>
      </Container>
    </header>
  );
};

export default Header;
