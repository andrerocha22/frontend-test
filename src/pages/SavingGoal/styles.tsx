import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-self: center;
  background-color: #f4f8fa;

  min-height: calc(100% - 7.9rem);

  @media all and (max-width: 768px) {
    margin-top: 7.9rem;
  }
`;
