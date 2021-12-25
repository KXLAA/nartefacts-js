/* eslint-disable import/no-named-as-default */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import device from './MediaQueries';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  color: #f6f3f3;
  background-color: #171717;
  font-size: 44px;
  padding: 32px;
  flex-direction: column;
  text-align: center;

  @media ${device.mobile} {
    font-size: 24px;
    padding: 16px;
  }
`;

const ErrorContainer = styled.div`
  border: solid #f6f3f3 8px;
  padding: 24px;
  max-width: 700px;
  width: 100%;
`;

export default function Error({ message }) {
  return (
    <Container>
      <ErrorContainer>
        <h1> SOMETHING WENT WRONG </h1>
      </ErrorContainer>
      <ErrorContainer>
        <h1>ERROR : {message?.toUpperCase()}</h1>
      </ErrorContainer>
    </Container>
  );
}

Error.propTypes = {
  message: PropTypes.string,
};
Error.defaultProps = {
  message: null,
};
