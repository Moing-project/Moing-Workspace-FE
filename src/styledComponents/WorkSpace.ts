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

export const ActiveWorkspace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const WorkspaceUl = styled.ul`
  box-sizing: border-box;
  width: 100%;
  padding: 32px;
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 172px;
`;

export const WorkspaceLi = styled.li`
  cursor: pointer;
  transition: transform 0.3s;
  display: flex;
  padding: 16px;
  flex-direction: column;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 0px 18px -4px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.03);
  }

  .profile {
    display: flex;
    gap: 12px;
    margin-top: 12px;

    figure {
      width: 48px;
      height: 48px;
      border-radius: 10px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
