import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderWrapper, Nav, List } from './styles';

// import { Container } from './styles';

const Header: React.FC = () => {
  return(
    <HeaderWrapper>
      <Nav>
        <List>
          <li><NavLink to="/" title="Home">Home</NavLink></li>
          <li><NavLink to="/posts" title="Posts">Posts</NavLink></li>
          <li><NavLink to="/albums" title="Albuns">Albuns</NavLink></li>
          <li><NavLink to="/todos" title="To Do">To Do</NavLink></li>
        </List>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;