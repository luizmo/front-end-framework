import styled from "styled-components";
import { px2rem } from "styles";
import { Link } from 'shared/components';

const Container = styled.main`
  margin: ${px2rem(45)} auto 0;
  max-width: 1424px;
  padding: 0 20px;
  width: 100%;
`;

const Section = styled.section`
  margin-bottom: ${px2rem(50)};
`;

const SectionTitle = styled.h1`
  color: var(--dark-title);
  font-size: ${px2rem(24)};
  font-weight: 500;
  margin-bottom: ${px2rem(10)};
`;

const List = styled.div`
  display: flex;
  flex-flow: column;
  gap: ${px2rem(16)};
  align-items: center;
  >a{
    width: 100%;
  }
  @media screen and (min-width: 998px){
    flex-flow: row;
    justify-content: space-between;
  }
`;

const SeeMore = styled(Link)`
  align-items: center;
  background-color: var(--primary);
  border: 2px solid var(--primary);
  border-radius: ${px2rem(4)};
  color: var(--white-text);
  display: flex;
  font-weight: 500;
  height: ${px2rem(42)};
  justify-content: center;
  margin: ${px2rem(20)} auto 0;
  max-width: ${px2rem(175)};
  padding: 0 ${px2rem(20)};
  transition: background-color 0.3s ease-in-out, color 0.25s ease;
  @media screen and (min-width: 998px){
    &:hover{
      background-color: var(--white);
      color: var(--primary);
    }
  }
`;

export{
  Container,
  Section,
  SectionTitle,
  List,
  SeeMore
}