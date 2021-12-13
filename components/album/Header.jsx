import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Button, ButtonContainer } from '../common/Ui';
import device from '../common/MediaQueries';

const Logo = styled.img`
  width: 100%;
  padding-bottom: 16px;
  border-bottom: 8px solid;
  margin-bottom: 48px;
  cursor: pointer;

  @media ${device.mobile} {
    border-width: 6px;
    margin-bottom: 32px;
  }
`;

const BtnContainer = styled(ButtonContainer)`
  display: flex;
  justify-content: space-between;
  padding-bottom: 48px;
  align-items: center;

  @media ${device.mobile} {
    padding-bottom: 32px;
  }
`;

export const Header = () => (
  <header>
    <Link href="/">
      <Logo
        src="https://ucarecdn.com/c41f4ab9-8e44-40dd-8549-8f3d01f14982/nartefactsb.svg"
        alt="nartefacts logo"
      />
    </Link>

    <BtnContainer>
      <Link href="/">
        <Button>BACK HOME</Button>
      </Link>
    </BtnContainer>
  </header>
);

export default Header;
