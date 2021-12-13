/* eslint-disable import/no-named-as-default */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Button, ButtonContainer } from '../common/Ui';
import device from '../common/MediaQueries';

const Logo = styled.img`
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 8px solid black;
  margin-bottom: 16px;
  cursor: pointer;

  @media ${device.mobile} {
    margin-bottom: 32px;
    border-width: 6px;
  }
`;

const LikesTxt = styled.div`
  font-size: 64px;
  background-color: var(--text);
  color: var(--bg);
  line-height: 88px;
  padding: 14px 48px;
  border: 8px solid black;
  text-align: center;
  transition: all 0.3s ease;
  width: 90%;

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobile} {
    border-width: 6px;
    font-size: 48px;
    line-height: 1.5;
    padding: 8px 16px;
  }
`;

const Container = styled(ButtonContainer)`
  gap: 24px;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const Header = () => (
  <header>
    <Link href="/">
      <Logo
        src="https://ucarecdn.com/c41f4ab9-8e44-40dd-8549-8f3d01f14982/nartefactsb.svg"
        alt="nartefacts logo"
      />
    </Link>

    <Container>
      <Link href="/">
        <Button>BACK</Button>
      </Link>
      <LikesTxt>YOUR LIKES</LikesTxt>
    </Container>
  </header>
);

export default Header;
