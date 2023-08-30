import { styled } from "styled-components";

export const InitialSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: var(--01, #202020);
    text-align: center;
    font-family: Pretendard Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 125% */

    span {
      color: var(--unnamed, #3f40e9);
      font-family: Pretendard Variable;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
    }
  }
`;
