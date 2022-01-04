import React from 'react';
import { Router } from 'shared/components';
import GlobalStyle from 'styles';
import Routes from 'core/routes';
import Header from 'components/header';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header/>
      <Routes />
    </Router>
  );
}

export default App;
