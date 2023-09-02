import { useParams } from "react-router-dom";
import { PrimaryBtn } from "../components/Buttons";
import { InitialWorkspace } from "../styledComponents/WorkSpace";
import SwipeWorkspace from "./SwipeWorkspace";
import ProjectMain from "./ProjectMain";

export default function Workspace() {
  // 워크스페이스 -> 없을때 파람 없을 때/있을때 리스트 파람 없을 때 /들어가있을때 메인 탭

  const { id } = useParams();

  const hasProjects = true;

  return (
    <main>
      {/* 여기서 조건부 */}
      {id ? (
        <ProjectMain />
      ) : hasProjects ? (
        <SwipeWorkspace />
      ) : (
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
      )}
    </main>
  );
}
