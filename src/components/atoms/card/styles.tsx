import styled from 'styled-components';

export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e1e8ed;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  border-radius: 4px;
`;

export const PrimaryContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 3.2rem;
  justify-content: space-between;
  align-items: center;
`;

export const PrimaryInfo = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.4rem;

  color: #1c1e1f;

  @media all and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const Amount = styled.p`
  font-weight: 500;
  font-size: 4rem;
  line-height: 3.2rem;

  text-align: center;
  letter-spacing: -0.266667px;

  color: #0079ff;

  @media all and (max-width: 768px) {
    font-size: 2.6rem;
    line-height: 3.2rem;
  }
`;

export const SecondaryInfo = styled.p`
  font-size: 1.2rem;
  line-height: 1.6rem;
  padding: 1.6rem 3.2rem;

  background-color: #f4f8fa;
  color: #1c1e1f;
`;
