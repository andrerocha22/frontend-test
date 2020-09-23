import React from 'react';
import logo from '../../../assets/images/logoPrimary.png';
import { HeaderContainer, Logo } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer data-test="component-header">
      <a href="/">
        <Logo className="logoIMG" src={logo} alt="Logo-Origin" />
      </a>
    </HeaderContainer>
  );
};

export default Header;
