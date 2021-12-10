import React from 'react';
import styled from 'styled-components';
import { Button, ButtonContainer } from '../common/Ui';

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

export const Header = () => (
  <header>
    <Logo
      src="https://ucarecdn.com/c41f4ab9-8e44-40dd-8549-8f3d01f14982/nartefactsb.svg"
      alt="nartefacts logo"
    />

    <ButtonContainer>
      <Button>YOUR LIKES</Button>
    </ButtonContainer>
  </header>
);

export default Header;
