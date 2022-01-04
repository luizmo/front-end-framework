import styled from 'styled-components';
import { px2rem } from 'styles';

export const BreadCrumbContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${px2rem(30)};
  & > :not(:first-child) {
    &::before {
      content: '>';
      margin: 0 ${px2rem(10)};
      color: var(--blue-medium);
      font-size: ${px2rem(18)};
      font-weight: 500;
    }
  }
  a {
    font-size: ${px2rem(16)}
    color: var(--blue-medium);
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 900;
  }
  span {
    display: flex;
    font-size: ${px2rem(16)};
    color: #362c2c;
    text-decoration: none;
    div {
      max-width: 221px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  strong {
    display: flex;
    font-size: ${px2rem(16)};
    color: #362c2c;
    text-decoration: none;
    div {
      max-width: ${px2rem(221)};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    @media only screen and (max-width: 500px) {
      display: none;
    }
  }
  @media only screen and (max-width: 500px) {
    span,
    a {
      font-size: ${px2rem(15)};
      align-items: center;
    }
  }
`;