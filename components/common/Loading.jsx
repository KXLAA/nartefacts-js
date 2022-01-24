import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Container = styled.section`
  min-height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loading = () => (
  <Container>
    <Loader
      type="ThreeDots"
      color="#000000"
      height={300}
      width={300}
      timeout={3000} // 3 secs
    />
  </Container>
);

export default Loading;
