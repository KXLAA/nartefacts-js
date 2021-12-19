import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  background-color: black;
  color: var(--bg);
  position: sticky;
  bottom: 0;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #d82259;
    }
  }
`;

const Footer = () => (
  <Container className="fade-in">
    <h1>nartefacts.</h1>
    <a target="_blank" href="https://kxlaa.com/" rel="noreferrer">
      KXLAA
    </a>
  </Container>
);

export default Footer;
