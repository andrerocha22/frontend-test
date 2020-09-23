import styled from 'styled-components';

export const CalculatorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.6rem;
  grid-auto-flow: column;
  width: 100%;

  @media all and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
