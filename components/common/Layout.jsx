import styled from 'styled-components';
import device from './MediaQueries';

export const MainLayout = styled.section`
  width: 100%;
  padding: 16px;
  margin: 0 auto;

  @media ${device.mobile} {
    padding: 8px;
    width: 100%;
  }
`;

export const HomePageGrid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 8px solid black;
  border-right: 0px;
  border-bottom: 0px;
  margin-top: 16px;

  @media ${device.tabletL} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
  }
`;
