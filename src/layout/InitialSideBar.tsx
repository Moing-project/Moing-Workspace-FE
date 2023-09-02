import React from "react";
import { StyledInitialSideBar } from "../styledComponents/SideBar";
import * as I from "../components/UsingIcons";

export default function InitialSideBar() {
  return (
    <StyledInitialSideBar>
      <h1>
        모두 있는 모임 공간 <br />
        <span>모잉</span>에 어서오세요!
      </h1>
      <div className="profile">
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW1CTqQyRTjmQkFYYgDqXp-SJEQ-DxW0XVvw&usqp=CAU"
            alt=""
          />
        </figure>
        <figcaption>
          <h2>사용자님</h2>
          <p>example@google.com</p>
        </figcaption>
      </div>
      <nav>
        <div>
          <I.User />
          <p>마이페이지</p>
        </div>
        <div>
          <I.Logout />
          <p>로그아웃</p>
        </div>
      </nav>
    </StyledInitialSideBar>
  );
}
