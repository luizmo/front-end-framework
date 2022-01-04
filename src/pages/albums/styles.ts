import styled from "styled-components";
import { px2rem } from "styles";

const Container = styled.section`
  margin: ${px2rem(20)} auto;
  max-width: 1424px;
  padding: 0 20px 50px;
`;

const ListTitle = styled.h1`
  color: var(--dark-title);
  font-size: ${px2rem(24)};
  margin-bottom: ${px2rem(30)};
`;


const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(${px2rem(260)}, 1fr));
  justify-items: center;
  >a{
    width: 100%;
  }
`;

export{
  Container,
  ListTitle,
  Grid
}