import { styled } from "styled-components";
import { InitialSideBar } from "../styledComponents/SideBar";
import { SideClose, SideOpen } from "../components/UsingIcons";

export default function SideBar({ toggleSidebar, sidebarOpen }: any) {
  return (
    <aside>
      <InitialSideBar>
        <h1>
          모두 있는 모임 공간 <br />
          <span>모잉</span>에 어서오세요!
        </h1>
      </InitialSideBar>
      <SideBarButton onClick={toggleSidebar}>
        {sidebarOpen ? <SideClose /> : <SideOpen />}
      </SideBarButton>
    </aside>
  );
}

const SideBarButton = styled.button`
  position: absolute;
  top: 44px;
  right: -12px;
  z-index: 1;
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
