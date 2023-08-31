import { styled } from "styled-components";
import * as S from "../styledComponents/SideBar";
import * as I from "../components/UsingIcons";
import { useLocation, useNavigate } from "react-router-dom";

export default function SideBar({ toggleSidebar, sidebarOpen }: any) {
  const navigate = useNavigate();
  const location = useLocation();

  // 현재 경로를 추출합니다.
  const currentPath = location.pathname;

  // 내비게이션 메뉴 항목과 경로를 매칭하고, 현재 경로와 일치하는지 확인합니다.
  const isMainActive = currentPath === "/";
  const isKanbanActive = currentPath === "/kanban";
  const isIssueActive = currentPath === "/issue";

  return (
    <aside>
      {/* <S.InitialSideBar>
        <h1>
          모두 있는 모임 공간 <br />
          <span>모잉</span>에 어서오세요!
        </h1>
      </S.InitialSideBar> */}
      <S.ActiveSideBar>
        <header>
          <div className="projectInfo">
            <button>즐겨찾기</button>
            <div className="progress">
              <img
                src="data:image/jpeg;base64,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"
                alt="프로젝트 썸네일"
              />
            </div>
            <h1>프로젝트 이름</h1>
          </div>
          <nav>
            <div>
              <I.Swipe />
              <p>
                프로젝트
                <br />
                전환
              </p>
            </div>
            <div>
              <I.Members />
              <p>
                참여멤버
                <br />
                관리
              </p>
            </div>
            <div>
              <I.Setup />
              <p>
                프로젝트
                <br />
                설정
              </p>
            </div>
          </nav>
        </header>
        <nav className="menus">
          <button
            onClick={() => navigate("/")}
            className={isMainActive ? "active" : ""}
          >
            <I.Main />
            메인
          </button>
          <button
            onClick={() => navigate("/kanban")}
            className={isKanbanActive ? "active" : ""}
          >
            <I.KanbanIcon />
            칸반
          </button>
          <button
            onClick={() => navigate("/issue")}
            className={isIssueActive ? "active" : ""}
          >
            <I.IssueIcon />
            이슈
          </button>
        </nav>
      </S.ActiveSideBar>
      <SideBarButton onClick={toggleSidebar}>
        {sidebarOpen ? <I.SideClose /> : <I.SideOpen />}
      </SideBarButton>
    </aside>
  );
}

const SideBarButton = styled.button`
  position: absolute;
  top: 44px;
  right: -12px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: #fff;
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 50%;
  border: 1px solid #ebebeb;
  box-shadow: 0px 0px 18px -4px rgba(0, 0, 0, 0.1);

  svg {
    width: 20px;
  }
`;
