import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  padding: 2.8rem 3.7rem 1.9rem;
  z-index: 10001;

  @media all and (max-width: 768px) {
    padding: 2.1rem 1.6rem 1.4rem;
  }
`;

export const Logo = styled.img`
  @media all and (max-width: 768px) {
    width: 6.5rem;
  }
`;
