import React from 'react';
import { loading } from 'assets';
import styled from 'styled-components';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
  img{
    max-width: 100px;
    width: 100%;
  }
`;

const Loading: React.FC = () => {
  return(
    <Container>
      <img src={loading} alt="Carregando..."/>
    </Container>
  );
}

export default Loading;