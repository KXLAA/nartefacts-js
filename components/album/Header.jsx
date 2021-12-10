import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Button, ButtonContainer, Toggle } from '../common/Ui';

const Logo = styled.img`
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 8px solid black;
  margin-bottom: 48px;
`;

const BtnContainer = styled(ButtonContainer)`
  display: flex;
  justify-content: space-between;
  padding-bottom: 48px;
  align-items: center;
`;

export const Header = () => (
  <header>
    <Logo
      src="https://ucarecdn.com/c41f4ab9-8e44-40dd-8549-8f3d01f14982/nartefactsb.svg"
      alt="nartefacts logo"
    />

    <BtnContainer>
      <Link href="/">
        <Button>BACK HOME</Button>
      </Link>

      <Toggle />

      <Button>RANDOM</Button>
    </BtnContainer>
  </header>
);

export default Header;
