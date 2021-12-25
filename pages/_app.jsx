/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.scss';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
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
    <>
      <Head>
        {/* HTML Meta Tags */}
        <title>nartefacts</title>
        <meta name="description" content="Colors inspired by African music" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://www.nartefacts.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="nartefacts" />
        <meta property="og:description" content="Colors inspired by African music." />
        <meta
          property="og:image"
          content="https://ucarecdn.com/14a84e98-e262-417a-8498-47793c0ceedd/nartefacts.jpg"
        />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://www.nartefacts.com/" />
        <meta property="twitter:url" content="https://www.nartefacts.com/" />
        <meta name="twitter:title" content="nartefacts" />
        <meta name="twitter:description" content="Colors inspired by African music." />
        <meta
          name="twitter:image"
          content="https://ucarecdn.com/14a84e98-e262-417a-8498-47793c0ceedd/nartefacts.jpg"
        />
      </Head>

      <AppWrapper>
        <ApolloProvider client={apolloClient}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ApolloProvider>
      </AppWrapper>
    </>
  );
}
