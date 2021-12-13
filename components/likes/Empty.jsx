/* eslint-disable import/no-named-as-default */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Button } from '../common/Ui';
import device from '../common/MediaQueries';

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;

  p {
    font-size: 48px;
    font-weight: 900;

    @media ${device.mobile} {
      font-size: 32px;
    }
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 700px;
  border: solid 8px;
  padding: 24px;
  text-align: center;

  @media ${device.mobile} {
    padding: 12px;
  }
`;

const Btn = styled(Button)`
  background-color: var(--text);
  color: var(--bg);
  padding: 16px 48px;
  font-size: 48px;

  @media ${device.mobile} {
    font-size: 32px;
    padding: 16px 0px;
    width: 100%;
  }

  &:hover {
    background-color: var(--bg);
    color: var(--text);
    border-color: var(--text);
    transform: translateX(0rem) translateY(-0.3125rem);
  }
`;

const Empty = () => (
  <Container>
    <Content>
      <p>YOU HAVE NOT LIKED ANY PALETTES YET!</p>
      <Link href="/">
        <Btn>DISCOVER</Btn>
      </Link>
    </Content>
  </Container>
);

export default Empty;
