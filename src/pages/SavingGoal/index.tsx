import React from 'react';
import { TitleText, BoldText } from '../../components/atoms/typography';
import BuyHouseGoal from '../../components/templates/BuyHouseGoal';
import { Container } from './styles';

const SavingGoal: React.FunctionComponent = () => {
  return (
    <Container data-test="component-saving-goal">
      <TitleText>
        Let&apos;s plan your <BoldText>saving goal</BoldText>.
      </TitleText>
      <BuyHouseGoal />
    </Container>
  );
};

export default SavingGoal;
