import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button, ButtonContainer } from '../common/Ui';

const Logo = styled.img`
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 8px solid black;
  margin-bottom: 16px;
`;

const LikesTxt = styled.div`
  font-size: 64px;
  line-height: 88px;
  padding: 14px 48px;
  border: 8px solid black;
  text-align: center;
  transition: all 0.3s ease;
  width: 90%;
`;

const Container = styled(ButtonContainer)`
  gap: 24px;
`;

const Header = () => (
  <header>
    <Logo
      src="https://ucarecdn.com/c41f4ab9-8e44-40dd-8549-8f3d01f14982/nartefactsb.svg"
      alt="nartefacts logo"
    />

    <Container>
      <Link href="/">
        <Button>BACK</Button>
      </Link>
      <LikesTxt>YOUR LIKES</LikesTxt>
    </Container>
  </header>
);

export default Header;
