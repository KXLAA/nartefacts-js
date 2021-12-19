/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.scss';
import { createGlobalStyle } from 'styled-components';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo';
import { AppWrapper } from '../context/state';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: var(--bg);
    color:var(--text);
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }

  :root {
    --text: #000000;
    --bg: #E5E5E5;
}

  ${
    '' /* [data-theme='dark'] {
      --text: #E5E5E5;
      --bg: #303030;
  } */
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <AppWrapper>
      <ApolloProvider client={apolloClient}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ApolloProvider>
    </AppWrapper>
  );
}
