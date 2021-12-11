import styled from 'styled-components';

import React, { useState, useEffect } from 'react';

const Box = styled.div`
  width: 100%;
  background-color: ${(props) => props.bg};
  cursor: pointer;

  p {
    color: white;
    background-color: black;
    padding: 8px;
    text-align: center;
    font-size: 24px;
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
