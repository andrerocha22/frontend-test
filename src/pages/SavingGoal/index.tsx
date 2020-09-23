import React from 'react';
import { TitleText, BoldText } from '../../components/atoms/typography';
import BuyHouseGoal from '../../components/templates/BuyHouseGoal';
import { Container, SpaceDiv40px } from './styles';

const SavingGoal: React.FC = () => {
  return (
    <Container>
      <TitleText>
        Let&apos;s plan your <BoldText>saving goal</BoldText>.
      </TitleText>
      <SpaceDiv40px />
      <BuyHouseGoal />
    </Container>
  );
};

export default SavingGoal;
