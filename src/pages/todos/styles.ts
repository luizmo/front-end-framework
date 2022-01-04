import styled from "styled-components";
import { px2rem } from "styles";

const Container = styled.section`
  margin: ${px2rem(20)} auto;
  max-width: 1424px;
  padding: 0 20px 50px;
`;

const Header = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${px2rem(30)};
  width: 100%;
`;

const Select = styled.select`
  border: 1px solid var(--dark-title);
  border-radius: ${px2rem(20)};
  height: ${px2rem(40)};
  padding: 0 ${px2rem(20)};
  option{
    cursor: pointer;
  }
`;

const ListTitle = styled.h1`
  color: var(--dark-title);
  font-size: ${px2rem(24)};
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  >div{
    width: 100%;
  }
  @media screen and (min-width: 998px){
    grid-template-columns: repeat(auto-fit, minmax(${px2rem(250)}, 1fr));
  }
`;

export{
  Container,
  Header,
  Select,
  ListTitle,
  Grid
}