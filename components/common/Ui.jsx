/* eslint-disable import/no-named-as-default */
import styled from 'styled-components';
import device from './MediaQueries';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 16px;
  position: relative;
`;

export const Button = styled.a`
  font-size: 64px;
  line-height: 88px;
  display: inline-block;
  cursor: pointer;
  padding: 14px 48px;
  border: 8px solid;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: black;
    background-color: var(--text);
    color: var(--bg);
    border-color: var(--text);
    transform: translateX(0rem) translateY(-0.3125rem);
  }

  &:active {
    transform: translateX(0rem) translateY(0.125rem);
  }

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobile} {
    border-width: 6px;
    font-size: 24px;
    line-height: 1.5;
    padding: 8px 16px;
  }
`;
