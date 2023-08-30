import { PrimaryBtn } from "../components/Buttons";
import { InitialWorkspace } from "../styledComponents/WorkSpace";

export default function Workspace() {
  // 워크스페이스 초기
  return (
    <main>
      <InitialWorkspace>
        <h1>존재하는 프로젝트가 없습니다.</h1>
        <nav>
          <PrimaryBtn
            $shape="filled"
            $status="active"
            $width="long"
            $height="high"
          >
            프로젝트 생성하기
          </PrimaryBtn>
          <PrimaryBtn
            $shape="solid"
            $status="active"
            $width="long"
            $height="high"
          >
            프로젝트 찾기
          </PrimaryBtn>
        </nav>
      </InitialWorkspace>
    </main>
  );
}
