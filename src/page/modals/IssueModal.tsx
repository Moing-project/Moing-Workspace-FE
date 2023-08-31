import React from "react";
import { Close } from "../../components/UsingIcons";

import * as S from "../../styledComponents/commons/Modals";
import MarkdownEditor from "../../components/MarkdownEditor";
import { SubmitButton } from "../../styledComponents/commons/Buttons";

export default function IssueModal({ onClose }: any) {
  return (
    <S.IssueCreateModal>
      <header>
        <h1>안건 추가</h1>
        <Close onClick={onClose} />
      </header>
      <div className="body">
        <main>
          <S.IssueCreateFormRow>
            <p>제목</p>
            <input type="text" />
          </S.IssueCreateFormRow>
          <S.IssueCreateFormRow>
            <p>진행상황</p>
            <div>
              <button>대기</button>
              <button>진행</button>
              <button>완료</button>
              <button>보류</button>
            </div>
          </S.IssueCreateFormRow>
          <S.IssueCreateFormRow>
            <p>카테고리</p>
            <div>
              <button>버그</button>
              <button>아이디어</button>
              <button>핫픽스</button>
              <button>기타</button>
            </div>
          </S.IssueCreateFormRow>
          <S.IssueCreateFormRow>
            <p>내용</p>
            <MarkdownEditor />
          </S.IssueCreateFormRow>
        </main>
        <aside>gd</aside>
      </div>
      <footer>
        <SubmitButton
          type="submit"
          $shape="filled"
          // $status={status}
          $width="long"
          $height="medium"
          // disabled={!isButtonActive}
          // onClick={onSigninSubmit}
        >
          작성 완료
        </SubmitButton>
      </footer>
    </S.IssueCreateModal>
  );
}
