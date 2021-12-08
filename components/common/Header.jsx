import React from 'react';
import styled from 'styled-components';

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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 16px;
`;

const Button = styled.a`
  font-size: 64px;
  line-height: 88px;
  display: inline-block;
  cursor: pointer;
  padding: 32px 48px;
  border: 8px solid black;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: black;
    color: white;
    transform: translateX(0rem) translateY(-0.3125rem);
  }

  &:active {
    transform: translateX(0rem) translateY(0.125rem);
  }
`;

export const Header = () => (
  <header>
    <Logo
      src="https://ucarecdn.com/c41f4ab9-8e44-40dd-8549-8f3d01f14982/nartefactsb.svg"
      alt="nartefacts logo"
    />
    <Description>A COLLECTION OF COLOR PALLETTES INSPIRED BY AFRICAN MUSIC</Description>

    <ButtonContainer>
      <Button>YOUR LIKES</Button>
    </ButtonContainer>
  </header>
);

export default Header;
