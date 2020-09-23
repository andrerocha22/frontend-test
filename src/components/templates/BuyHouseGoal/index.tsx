import React, { useState } from 'react';
import CalculatorInputs from '../../organisms/CalculatorInputs';
import GoalHero from '../../organisms/GoalHero';
import Card from '../../../components/atoms/card';
import { ButtonPrimary } from '../../atoms/button';

import {
  Container,
  SpaceDiv31px,
  SpaceDiv40px,
  ConfirmeButtonContainer,
} from './styles';

import houseIcon from '../../../assets/icons/house.svg';

const BuyHouseGoal: React.FC = () => {
  const [months, setMonths] = useState<number>(0);
  const [depositValue, setDepositValue] = useState<string>('');
  const [month, setMonth] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  const handleInputs = (
    months: number,
    depositValue: string,
    amount: string,
    month: string,
    year: string
  ) => {
    setMonths(months);
    setDepositValue(depositValue);
    setAmount(amount);
    setMonth(month);
    setYear(year);
  };

  const handleConfirmButton = () => {
    alert('Confirmed');
  };

  const SecondaryInfo = (
    <>
      You are plaining{' '}
      <strong>
        {months} monthly {months > 1 ? 'deposits' : 'deposit'}
      </strong>{' '}
      to reach your <strong>${amount} </strong>goal by{' '}
      <strong>
        {month} {year}
      </strong>
      .
    </>
  );

  return (
    <Container>
      <GoalHero
        title="Buy a house"
        description="Saving goal"
        iconSrc={houseIcon}
      />
      <SpaceDiv40px />
      <CalculatorInputs callback={handleInputs} />
      <SpaceDiv31px />
      <Card
        primaryInfo="Monthly Amount"
        amount={`$${Number(depositValue).toFixed(0)}`}
        secondaryInfo={SecondaryInfo}
      />
      <SpaceDiv31px />
      <ConfirmeButtonContainer>
        <ButtonPrimary
          handleClick={handleConfirmButton}
          color="#FFFFFF"
          backgroundColor="#1B31A8"
          borderRadius="2rem"
          disabled={depositValue === '0.00' ? true : false}
        >
          Confirm
        </ButtonPrimary>
      </ConfirmeButtonContainer>
    </Container>
  );
};

export default BuyHouseGoal;
