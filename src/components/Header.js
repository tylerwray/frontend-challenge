import React from 'react';
import styled from 'styled-components/macro';

import IconLogo from 'assets/IconLogo';

const Header = () => (
  <Nav>
    <Logo>
      <IconLogo />
    </Logo>
    <Heading>Reel Cinema</Heading>
  </Nav>
);

const Nav = styled.nav`
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 8px 0px rgba(58, 58, 58, 0.23);
`;

const Logo = styled.div`
  background-color: var(--blue);
  padding: 16px;
`;

const Heading = styled.h1`
  padding-left: 24px;
  margin: unset;
`;

export default Header;
