import { styled } from "styled-components";
import { useLocation } from "react-router-dom";
import * as I from "../components/UsingIcons";
import InitialSideBar from "./InitialSideBar";
import ActiveSideBar from "./ActiveSideBar";

export default function SideBar({ toggleSidebar, sidebarOpen }: any) {
  const location = useLocation();

  const currentPath = location.pathname;

  const isWorkspaceMain = currentPath === "/";

  return (
    <aside>
      {isWorkspaceMain ? <InitialSideBar /> : <ActiveSideBar />}
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
