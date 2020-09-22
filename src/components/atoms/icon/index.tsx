import React from 'react';
import styled from 'styled-components';

interface IconProps {
  handleClick?: (event: React.MouseEvent<HTMLElement>) => void;
  color?: string;
  backgroundColor?: string;
  src: string;
}

const IconImg = styled.img<IconProps>`
  align-self: flex-start;
  justify-self: center;
  width: 4rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
`;

export function Icon(props: IconProps) {
  return (
    <IconImg
      {...props}
      onClick={props.handleClick}
      data-test="component-icon"
    />
  );
}
