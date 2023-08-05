import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./layoutComponents/Header";
import Workspace from "./pageComponents/Workspace";
import Kanban from "./pageComponents/Kanban";
import Issue from "./pageComponents/issue/Issue";
import IssueDetail from "./pageComponents/issue/IssueDetail";
import NotFound from "./pageComponents/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Workspace />} />
        <Route path="/Kanban" element={<Kanban />} />
        <Route path="issue" element={<Issue />}>
          <Route path="detail/:issueId" element={<IssueDetail />} />
        </Route>
        {/* 상단에 위치하는 라우트들의 규칙 중 일치하는 라우트가 없다면 아래가 화면에 나타남 */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
