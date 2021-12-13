import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Container = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => (
  <Container>
    <Loader
      type="ThreeDots"
      color="#000000"
      height={500}
      width={500}
      timeout={1000} // 3 secs
    />
  </Container>
);

export default Loading;
