/* eslint-disable import/no-named-as-default */
import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Button, ButtonContainer, Toggle } from '../common/Ui';
import { useAppContext } from '../../context/state';
import device from '../common/MediaQueries';

const Logo = styled.img`
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 8px solid;
  margin-bottom: 16px;
  cursor: pointer;

  @media ${device.mobile} {
    border-width: 6px;
    margin-bottom: 32px;
  }
`;

const Description = styled.div`
  background: linear-gradient(
    147deg,
    #f098b9,
    #eedd67,
    #d82259,
    #161616,
    #0485e5,
    #065b2c,
    #b7281f,
    #943d3f,
    #0e118c,
    #1dc395,
    #0e7790
  );
  background-size: 540% 540%;
  color: #f6f3f3;
  padding: 24px;
  font-size: 32px;
  line-height: 56px;
  width: 100%;
  max-width: 560px;

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

      <Description className="gradient-background">
        <h1>COLORS INSPIRED BY AFRICAN MUSIC.</h1>
      </Description>

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
