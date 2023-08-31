import { PrimaryBtn } from "../components/Buttons";
import {
  ActiveWorkspace,
  InitialWorkspace,
} from "../styledComponents/WorkSpace";
import SwipeWorkspace from "./SwipeWorkspace";

export default function Workspace() {
  // 워크스페이스 -> 없을때/있을때 리스트/들어가있을때 메인 탭
  return (
    <main>
      {/* 여기서 조건부 */}
      {/* <InitialWorkspace>
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
      </InitialWorkspace> */}
      <SwipeWorkspace />
    </main>
  );
}
