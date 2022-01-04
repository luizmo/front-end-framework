import styled from "styled-components";
import { px2rem } from "styles";

const Card = styled.article`
  background-color: var(--white) ;
  border: 1px solid var(--neutral-grey);
  border-radius: ${px2rem(8)};
  height: 100%;
  min-height: ${px2rem(176)};
  padding: ${px2rem(16)};
  position: relative;
  transition: border-color 0.3s ease, transform 0.2s ease-in-out, box-shadow 0.2s ease;
  >div{
    bottom: ${px2rem(16)};
    position: absolute;
  }
  @media screen and (min-width: 998px){
    width: ${px2rem(344)};
    &:hover{
      border-color: var(--primary);
      box-shadow: 0px ${px2rem(18)} ${px2rem(32)} ${px2rem(14)} rgba(179, 186, 197, 0.3);
      transform: scale(1.02);
    }
  }
`;

const Tag = styled.span`
  color: var(--primary);
  font-size: ${px2rem(14)};
  font-weight: 500;
`;

const CardTitle = styled.h1`
  color: var(--dark-title);
  display: -webkit-box;
  font-size: ${px2rem(20)};
  font-weight: 500;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
 
`;

export{
  Card,
  Tag,
  CardTitle
}