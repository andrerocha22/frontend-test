import React from 'react';
import { Icon } from '../../atoms/icon';
import { PrimaryText, SecondaryText } from '../../atoms/typography';

import { Hero } from './styles';

interface GoalHeroProps {
  title: string;
  description: string;
  iconSrc: string;
}

const GoalHero: React.FC<GoalHeroProps> = ({ title, description, iconSrc }) => {
  return (
    <Hero data-test="component-goal-hero">
      <Icon src={iconSrc} />
      <PrimaryText>{title}</PrimaryText>
      <SecondaryText>{description}</SecondaryText>
    </Hero>
  );
};

export default GoalHero;
