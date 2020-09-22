import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../atoms/icon';
import { PrimaryText, SecondaryText } from '../../atoms/typography';

interface GoalHero {
  title: string;
  description: string;
  iconSrc: string;
}

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: flex-start;
  justify-content: center;
`;

const GoalHero: React.FC<GoalHero> = ({ title, description, iconSrc }) => {
  return (
    <Hero data-test="component-goal-hero">
      <Icon src={iconSrc} />
      <PrimaryText>{title}</PrimaryText>
      <SecondaryText>{description}</SecondaryText>
    </Hero>
  );
};

export default GoalHero;
