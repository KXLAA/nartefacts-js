import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 16px;
`;

export const Button = styled.a`
  font-size: 64px;
  line-height: 88px;
  display: inline-block;
  cursor: pointer;
  padding: 14px 48px;
  border: 8px solid black;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: black;
    color: white;
    transform: translateX(0rem) translateY(-0.3125rem);
  }

  &:active {
    transform: translateX(0rem) translateY(0.125rem);
  }
`;

export const Toggle = styled.div`
  border: 8px solid #000000;
  border-radius: 100%;
  width: 150px;
  height: 150px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: black;
    color: white;
    transform: translateX(0rem) translateY(-0.3125rem);
  }

  &:active {
    transform: translateX(0rem) translateY(0.125rem);
  }
`;
