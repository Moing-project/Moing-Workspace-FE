import { Outlet } from "react-router-dom";

export default function Issue() {
  return (
    <>
      <p>이슈 페이지</p>
      <Outlet />
    </>
  );
}
