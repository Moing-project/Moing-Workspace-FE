import { styled } from "styled-components";
import FlexContainer, { FlexContainerProps } from "./Flexbox";
import { InputWithParagraph } from "./commonStyle";

export const SignInServiceModalLayout = styled(
  FlexContainer
)<FlexContainerProps>`
  align-items: center;
  position: relative;
  background: white;
  z-index: 10;
  width: 550px;
  height: 600px;
  padding: 15px;
  border-radius: 8px;

  header {
    width: 550px;
    height: 40px;
    padding: 15px;
    left: 0;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: scroll;

    p {
      display: flex;
    }

    h1,
    h2 {
      color: var(--main-font);
      font-weight: 600;
    }
  }
`;

export const Closebutton = styled.button`
  position: absolute;
  top: 20px;
  right: 25px;
  border: none;
  background-color: #ffffff;
`;

// 모달 스타일
export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
  position: relative;
  border-radius: 8px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  background: #ffffff;
  max-height: calc(100vh - 16px);
  overflow: hidden;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
`;

export const IssueCreateModal = styled(ModalBody)`
  width: 50vw;
  gap: 0;
  height: 90vh;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--gray-03, #ebebeb);
    padding: 15px 20px;

    h1 {
      color: var(--01, #202020);
      font-family: Pretendard Variable;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px; /* 100% */
    }

    svg {
      cursor: pointer;
    }
  }

  .body {
    display: flex;
    padding: 15px 20px;
    gap: 50px;
    overflow-y: scroll;

    main {
      display: flex;
      flex-direction: column;
      gap: 36px;
      flex: 3;
    }

    aside {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  }

  footer {
    padding: 15px 0;
    display: flex;
    justify-content: center;
  }
`;

export const IssueCreateFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
