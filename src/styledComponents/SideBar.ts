import { styled } from "styled-components";

export const StyledInitialSideBar = styled.div`
  padding: 10vh 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

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

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    figure {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      overflow: hidden;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    figcaption {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;

      h2 {
        color: var(--01, #202020);
        text-align: center;
        font-family: Pretendard Variable;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 17px; /* 121.429% */
      }

      p {
        color: #9495a8;
        text-align: center;

        /* body/04 */
        font-family: Pretendard Variable;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 12px; /* 120% */
      }
    }
  }

  nav {
    display: flex;
    gap: 32px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      cursor: pointer;
    }

    p {
      color: var(--02, #9495a8);
      text-align: center;
      font-family: Pretendard Variable;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 12px; /* 120% */
    }
  }
`;

export const StyledActiveSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3vh 1vw;

  gap: 50px;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 24px;

    .projectInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;

      .progress {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: cadetblue;

        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: white;
        }
      }
    }

    nav {
      display: flex;
      gap: 32px;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        cursor: pointer;
      }

      p {
        color: var(--02, #9495a8);
        text-align: center;
        font-family: Pretendard Variable;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 12px; /* 120% */
      }
    }
  }

  & > nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    button {
      display: flex;
      align-items: center;
      width: 90%;
      padding: 11px 16px;
      border-radius: 10px;
      border: none;
      background: none;
      cursor: pointer;

      /* body/02 */
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 16px; /* 133.333% */

      svg {
        margin-right: 16px;
        fill: #9495a8;
      }
    }

    .active {
      background: #3f40e9;
      color: white;

      svg {
        fill: white;
      }
    }
  }
`;
