/* eslint-disable import/no-named-as-default */
/* eslint-disable no-undef */
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import device from '../common/MediaQueries';

const Box = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  background-color: ${(props) => props.bg};
  cursor: pointer;
  transition: all 0.3s ease;

  @media ${device.mobile} {
    aspect-ratio: 3/1;
  }

  p {
    color: var(--bg);
    background-color: var(--text);
    padding: 4px;
    text-align: center;
  }
`;

const ColorBox = ({ color }) => {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <Box
      bg={color}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(color);
      }}
    >
      <p>{alert ? 'COPIED' : color.toUpperCase()}</p>
    </Box>
  );
};

export default ColorBox;

ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
};
