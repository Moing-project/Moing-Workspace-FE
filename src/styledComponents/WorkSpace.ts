import { styled } from "styled-components";

export const InitialWorkspace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;

  h1 {
    color: var(--gray-05, #a6a6a6);

    /* display/02 섭제목 */
    font-family: Pretendard Variable;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 116.667% */
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }
`;
