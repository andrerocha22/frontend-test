import React from 'react';
import styled from 'styled-components';

interface CardProps {
  primaryInfo: string;
  amount: string;
  secondaryInfo: React.ReactNode;
}

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  border: 1px solid #e1e8ed;
  box-shadow: 0px 1px 4px rgba(150, 164, 176, 0.1);
  border-radius: 4px;
`;

const PrimaryContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 3.2rem;
  justify-content: space-between;
  align-items: center;
`;

const PrimaryInfo = styled.p`
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.4rem;

  color: #1c1e1f;
`;

const Amount = styled.p`
  font-weight: 500;
  font-size: 4rem;
  line-height: 3.2rem;

  text-align: center;
  letter-spacing: -0.266667px;

  color: #0079ff;
`;

const SecondaryInfo = styled.p`
  font-size: 1.2rem;
  line-height: 1.6rem;
  padding: 3.2rem;

  background-color: #f4f8fa;
  color: #1c1e1f;
`;

const Card = ({ primaryInfo, amount, secondaryInfo }: CardProps) => {
  return (
    <CardContainer data-test="component-card">
      <PrimaryContainer>
        <PrimaryInfo>{primaryInfo}</PrimaryInfo>
        <Amount>{amount}</Amount>
      </PrimaryContainer>
      <SecondaryInfo>{secondaryInfo}</SecondaryInfo>
    </CardContainer>
  );
};

export default Card;
