import React, { useState } from "react";
import styled from "styled-components";
import HeaderWithToken from "./HeaderWithToken";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import IssueModal from "../page/modals/IssueModal";

export default function WorkspaceLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const [isIssueModalOpen, setIsIssueModalOpen] = useState<boolean>(false);

  const handleSetIsIssueModalOpen = () => setIsIssueModalOpen(true);
  const handleSetIsIssueModalClose = () => setIsIssueModalOpen(false);

  return (
    <>
      <StyledLayout $sidebarOpen={sidebarOpen}>
        <SideBar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
        <section>
          <HeaderWithToken />
          <Outlet /> {/* 여기에 자식 라우트들이 렌더링됩니다 */}
        </section>
        <button onClick={handleSetIsIssueModalOpen}>모달 오픈!</button>
      </StyledLayout>
      <Modal isOpen={isIssueModalOpen} onClose={handleSetIsIssueModalClose}>
        <IssueModal onClose={handleSetIsIssueModalClose} />
      </Modal>
    </>
  );
}

interface StyledSectionProps {
  $sidebarOpen: boolean;
}

const StyledLayout = styled.div<StyledSectionProps>`
  display: flex;
  position: relative;

  & > button {
    position: fixed;
    bottom: 0;
    right: 0;
  }

  & > aside {
    height: 100vh;
    position: sticky;
    top: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    /* padding: 10vh 0; */
    flex: ${({ $sidebarOpen }) => ($sidebarOpen ? "1" : "0")};
    background: var(--keyColor-02);
    transition: flex 0.3s ease-in-out;
  }

  & > section {
    flex: ${({ $sidebarOpen }) => ($sidebarOpen ? "5" : "6")};
    transition: flex 0.3s ease-in-out;

    & > main {
      overflow-y: scroll;
      height: calc(100vh - 57px); /* 높이 계산을 통해 콘텐츠 영역 제한 */
    }
  }
`;
