import styled from "styled-components";
import { px2rem } from "styles";

const Card = styled.div`
  border: 1px solid var(--neutral-grey);
  border-radius: ${px2rem(8)};
  height: 100%;
  min-height: ${px2rem(160)};
  padding: ${px2rem(16)};
  position: relative;
  transition: border-color 0.3s ease, transform 0.2s ease-in-out, box-shadow 0.2s ease;
  width: 100%;
  cursor: pointer;
  >div{
    bottom: ${px2rem(16)};
    position: absolute;
  }
  @media screen and (min-width: 998px){
    width: ${px2rem(250)};
  }
`;

const Status = styled.span`
  font-size: ${px2rem(12)};
  font-weight: 600;
  &.completed{
    color: var(--green);
  }
  &.not-completed{
    color: var(--alert);
  }
`;

const Task = styled.p`
  color: var(--dark-title);
  display: -webkit-box;
  font-size: ${px2rem(16)};
  font-weight: 500;
  margin: ${px2rem(10)} 0;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export{
  Card,
  Status,
  Task
} 