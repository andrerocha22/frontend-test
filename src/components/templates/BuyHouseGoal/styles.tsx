import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: 4rem;
  width: 100%;
  max-width: 56rem;
  background: #ffffff;
  border: 1px solid #e1e8ed;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  border-radius: 8px;

  @media all and (max-width: 768px) {
    padding: 2.4rem;
  }
`;

export const SpaceDiv40px = styled.div`
  display: flex;
  width: 100%;
  margin-top: 4rem;
`;

export const SpaceDiv31px = styled.div`
  display: flex;
  width: 100%;
  margin-top: 3.1rem;
`;

export const ConfirmeButtonContainer = styled.div`
  display: flex;
  width: 100%;
  align-content: center;
  justify-content: center;
`;
