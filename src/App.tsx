import { Routes, Route } from 'react-router-dom';
import './App.css';
import Workspace from './page/Workspace';
import Kanban from './page/Kanban';
import Issue from './page/issue/Issue';
import IssueDetail from './page/issue/IssueDetail';
import NotFound from './page/NotFound';
import HeaderWithToken from './layout/HeaderWithToken';
import SideBar from './layout/SideBar';
import WorkspaceLayout from './layout/WorkspaceLayout';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const location = window.location;
  // const isMoingSpace = location.hostname.startsWith("moingspace");

  const hasToken = localStorage.getItem('Authorization') !== null;

  // "moingspace" 서브도메인에 접속하면 다른 URL로 리다이렉트
  // if (isMoingSpace) {
  return (
    <>
      <Routes>
        <Route element={<WorkspaceLayout />}>
          <Route index element={<Workspace />} />
          <Route path="/Kanban" element={<Kanban />} />
          <Route path="issue" element={<Issue />}>
            <Route path="detail/:issueId" element={<IssueDetail />} />
          </Route>
          {/* 상단에 위치하는 라우트들의 규칙 중 일치하는 라우트가 없다면 아래가 화면에 나타남 */}
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
  // } else return null;
}

export default App;
