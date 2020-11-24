import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  padding-top: 10vh;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #363f5f;
`;

export const ContainerButton = styled.div`
  margin-top: 30px;
`;

export const ButtonAdd = styled.button`
    width: 220px;
    height: 70px;
    border: 0;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    background: #04d361;
    transition: background-color 0.2s;
    margin-right: 15px;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
`;

export const ButtonRem = styled.button`
    width: 220px;
    height: 70px;
    border: 0;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    background: #b53030;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#b53030')};
    }
`;

