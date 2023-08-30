import React, { useState } from "react";
import styled from "styled-components";
import HeaderWithToken from "./HeaderWithToken";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { SideClose, SideOpen } from "../components/UsingIcons";

export default function WorkspaceLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <Wrapper>
      <StyledSection $sidebarOpen={sidebarOpen}>
        <SideBar />
        <main>
          <SideBarButton onClick={toggleSidebar}>
            {sidebarOpen ? <SideClose /> : <SideOpen />}
          </SideBarButton>
          <HeaderWithToken />
          <Outlet /> {/* 여기에 자식 라우트들이 렌더링됩니다 */}
        </main>
      </StyledSection>
    </Wrapper>
  );
}

interface StyledSectionProps {
  $sidebarOpen: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden; /* 스크롤 막기 */
`;

const StyledSection = styled.section<StyledSectionProps>`
  display: flex;
  height: 100vh;

  aside {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 10vh 0;
    flex: ${({ $sidebarOpen }) => ($sidebarOpen ? "1" : "0")};
    /* flex: 1; */
    background: var(--keyColor-02);
    transition: flex 0.3s ease-in-out;
  }

  & > main {
    position: relative;
    flex: ${({ $sidebarOpen }) => ($sidebarOpen ? "5" : "6")};
    /* flex: 4; */
    transition: flex 0.3s ease-in-out;

    /* main {
      height: 100vh;
      display: flex;
      justify-content: center;
      padding-top: 20vh;
    } */
  }
`;

const SideBarButton = styled.button`
  position: absolute;
  top: 50px;
  left: -15px;
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
  box-shadow: 0px 0px 18px -4px rgba(0, 0, 0, 0.3);

  svg {
    width: 20px;
  }
`;
