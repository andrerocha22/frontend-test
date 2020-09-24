import React from 'react';
import {
  CardContainer,
  PrimaryContainer,
  PrimaryInfo,
  Amount,
  SecondaryInfo,
} from './styles';

interface CardProps {
  primaryInfo: React.ReactNode;
  amount: string;
  secondaryInfo: React.ReactNode;
}

const Card: React.FunctionComponent<CardProps> = ({
  primaryInfo,
  amount,
  secondaryInfo,
}) => {
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
