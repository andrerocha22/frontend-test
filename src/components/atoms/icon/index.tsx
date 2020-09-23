import React from 'react';
import { IconImg } from './styles';

export interface IconProps {
  clickCallback?: (event: React.MouseEvent<HTMLElement>) => void;
  src: string;
}

export const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <IconImg
      {...props}
      onClick={props.clickCallback}
      data-test="component-icon"
    />
  );
};
