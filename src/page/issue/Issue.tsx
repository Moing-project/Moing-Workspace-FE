import styled from "styled-components";

export default function Issue() {
  return <IssueLayoutMain>이슈</IssueLayoutMain>;
}

const IssueLayoutMain = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  background: pink;
`;
