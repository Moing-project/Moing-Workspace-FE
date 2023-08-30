import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';

export default function Issue() {
  return (
    <IssueLayoutMain>
      <Box>
        <Nav fill variant="tabs" defaultActiveKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>

          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                {Array.from({ length: 7 }).map((_, index) => (
                  <th key={index}>Table heading</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                {Array.from({ length: 7 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>2</td>
                {Array.from({ length: 7 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
              <tr>
                <td>3</td>
                {Array.from({ length: 7 }).map((_, index) => (
                  <td key={index}>Table cell {index}</td>
                ))}
              </tr>
            </tbody>
          </Table>
        </Nav>
      </Box>
    </IssueLayoutMain>
  );
}

const IssueLayoutMain = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  background: pink;
`;
const Box = styled.div`
  display: flex;
  width: auto;
  background: rebeccapurple;
`;

<Nav fill variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home">Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Link</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>;
