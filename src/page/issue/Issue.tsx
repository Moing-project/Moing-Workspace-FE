import React from 'react';
import styled from 'styled-components';
import Table from 'react-bootstrap/Table';

export default function Issue() {
  const headerCellStyle = {
    width: 'auto',
    height: '55px',
    backgroundColor: '#F6F6FE',
    color: '#8788E4',
    paddingTop: '26px',
  };

  const dummyIssues = [
    {
      status: '보류',
      category: '버그',
      title: '서버 접속 오류 ',
      nickname: '김개똥',
      date: '2023-08-01',
      members: [
        { profileImg: '프로필', nickname: '참여멤버' },
        // { profileImg: '프로필', nickname: '참여멤버' },
      ],
    },
    {
      status: '완료',
      category: '기타',
      title: '정원님 고사리 손으로 한땀 한땀 완성',
      nickname: 'FE 전설',
      date: '2023-08-30',
      members: [
        { profileImg: '프로필', nickname: '참여멤버' },
        { profileImg: '프로필', nickname: '참여멤버' },
      ],
    },
    {
      status: '진행',
      category: '아이디어',
      title: '서버 접속 오류 머시기',
      nickname: '작성자',
      date: '2023-08-31',
      members: [
        { profileImg: '프로필', nickname: '참여멤버' },
        { profileImg: '프로필', nickname: '참여멤버' },
        { profileImg: '프로필', nickname: '참여멤버' },
      ],
    },
    {
      status: '대기',
      category: '핫픽스',
      title: '서버 접속 오류 머시기',
      nickname: '작성자',
      date: '2023-08-31',
      members: [
        { profileImg: '프로필', nickname: '참여멤버' },
        { profileImg: '프로필', nickname: '참여멤버' },
      ],
    },
    {
      status: '대기',
      category: '핫픽스',
      title: '서버 접속 오류 머시기',
      nickname: '작성자',
      date: '2023-08-31',
      members: [
        { profileImg: '프로필', nickname: '참여멤버' },
        { profileImg: '프로필', nickname: '참여멤버' },
      ],
    },
    {
      status: '대기',
      category: '핫픽스',
      title: '서버 접속 오류 머시기',
      nickname: '작성자',
      date: '2023-08-31',
      members: [
        { profileImg: '프로필', nickname: '참여멤버' },
        { profileImg: '프로필', nickname: '참여멤버' },
      ],
    },
    {
      status: '대기',
      category: '핫픽스',
      title: '서버 접속 오류 머시기',
      nickname: '작성자',
      date: '2023-08-31',
      members: [
        { profileImg: '프로필', nickname: '참여멤버' },
        { profileImg: '프로필', nickname: '참여멤버' },
      ],
    },
    {
      status: '대기',
      category: '핫픽스',
      title: '서버 접속 오류 머시기',
      nickname: '작성자',
      date: '2023-08-31',
      members: [
        { profileImg: '프로필', nickname: '참여멤버' },
        { profileImg: '프로필', nickname: '참여멤버' },
      ],
    },
    {
      status: '대기',
      category: '핫픽스',
      title: '서버 접속 오류 머시기',
      nickname: '작성자',
      date: '2023-08-31',
      members: [
        { profileImg: '프로필', nickname: '참여멤버' },
        { profileImg: '프로필', nickname: '참여멤버' },
      ],
    },
    {
      status: '대기',
      category: '핫픽스',
      title: '서버 접속 오류 머시기',
      nickname: '작성자',
      date: '2023-08-31',
      members: [
        { profileImg: '프로필', nickname: '참여멤버' },
        { profileImg: '프로필', nickname: '참여멤버' },
      ],
    },
    {
      status: '대기',
      category: '핫픽스',
      title: '서버 접속 오류 머시기',
      nickname: '작성자',
      date: '2023-08-31',
      members: [
        { profileImg: '프로필', nickname: '참여멤버' },
        { profileImg: '프로필', nickname: '참여멤버' },
      ],
    },
    {
      status: '대기',
      category: '핫픽스',
      title: '서버 접속 오류 머시기',
      nickname: '작성자',
      date: '2023-08-31',
      members: [
        { profileImg: '프로필', nickname: '참여멤버' },
        { profileImg: '프로필', nickname: '참여멤버' },
      ],
    },
  ];

  // 상태와 버튼 정보를 매핑하는 맵
  const statusToButtonMap: {
    [key: string]: { text: string; color: string };
  } = {
    보류: { text: '보류', color: '#FC3B3B' },
    완료: { text: '완료', color: '#7100E1' },
    진행: { text: '진행', color: '#1F93FF' },
    대기: { text: '대기', color: '#13C53B' },
  };

  return (
    <IssueLayoutMain>
      <div>
        <BtnGroup>
          <div className="btn-group">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuClickableOutside"
              data-bs-toggle="dropdown"
              data-bs-auto-close="inside"
              aria-expanded="false"
              style={{
                backgroundColor: 'white',
                border: ' 1px solid gray/05',
                color: 'black',
              }} // 배경색 변경
            >
              작성기간
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuClickableOutside"
            >
              <li>
                <a
                  className="dropdown-item"
                  href="http://localhost:3000/1/issue"
                >
                  1개월
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="http://localhost:3000/1/issue"
                >
                  3개월
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="http://localhost:3000/1/issue"
                >
                  6개월
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="http://localhost:3000/1/issue"
                >
                  1년
                </a>
              </li>
            </ul>
          </div>

          <div className="btn-group">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuClickableOutside"
              data-bs-toggle="dropdown"
              data-bs-auto-close="inside"
              aria-expanded="false"
              style={{
                backgroundColor: 'white',
                border: ' 1px solid gray/05',
                color: 'black',
              }} // 배경색 변경
            >
              전체 진행상황
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuClickableOutside"
            >
              <li>
                <a className="dropdown-item" href="#">
                  대기
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  진행
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  완료
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  보류
                </a>
              </li>
            </ul>
          </div>

          <div className="btn-group">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuClickableOutside"
              data-bs-toggle="dropdown"
              data-bs-auto-close="inside"
              aria-expanded="false"
              style={{
                backgroundColor: 'white',
                border: ' 1px solid gray/05',
                color: 'black',
              }} // 배경색 변경
            >
              전체 카테고리
            </button>
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuClickableOutside"
            >
              <li>
                <a className="dropdown-item" href="#">
                  버그
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  아이디어
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  핫픽스
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  기타
                </a>
              </li>
            </ul>
          </div>
        </BtnGroup>
      </div>
      <CustomTable>
        <Table
          style={{
            width: '1000px',
            height: '760px',
            // border: ' 1px solid',
            // borderColor: '#F6F6FE',
            // borderRadius: '15px',
            // overflow: 'hidden',
            // borderRadius 해줬는데도 적용은 됐지만 안에가 넘쳐서 안 될 수 있음 그럴때 이 방법 ; overflow: 'hidden'
          }}
          hover
          responsive
        >
          <tr>
            <th style={headerCellStyle}>번호</th>
            <th style={headerCellStyle}>진행상황</th>
            <th style={headerCellStyle}>카테고리</th>
            <th style={headerCellStyle}>제목</th>
            <th style={headerCellStyle}>작성자</th>
            <th style={headerCellStyle}>작성일</th>
            <th style={headerCellStyle}>참여멤버</th>
          </tr>

          <tbody>
            {dummyIssues.map((issue, index) => (
              <tr key={index}>
                <td>{dummyIssues.length - 0 - index}</td>
                <td>
                  <span
                    style={{
                      backgroundColor: statusToButtonMap[issue.status].color,
                      padding: '4px 8px',
                      borderRadius: '4px',
                      color: 'white', // 텍스트 색상
                    }}
                  >
                    {statusToButtonMap[issue.status].text}
                  </span>
                </td>
                <td>
                  {['버그', '기타', '아이디어', '핫픽스'].includes(
                    issue.category
                  ) ? (
                    <StyledCategorySpan>{issue.category}</StyledCategorySpan>
                  ) : (
                    issue.category
                  )}
                </td>
                <td style={{ width: '250px' }}>{issue.title}</td>
                {/* 이 부분에서 너비 변경 */}
                <td>{issue.nickname}</td>
                <td>{issue.date}</td>
                <td>
                  <TableCell>
                    <ProfileImageWrapper>
                      {issue.members.map((member, index) => (
                        <ProfileImage
                          src="https://ca.slack-edge.com/T03GJEFQ63V-U053YCQCREY-ge656e49aef8-512"
                          alt="프로필 이미지"
                          key={index}
                          className="two-card-mg-top"
                        />
                      ))}
                      <Badge>+{issue.members.length}</Badge>
                    </ProfileImageWrapper>
                  </TableCell>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CustomTable>
    </IssueLayoutMain>
  );
}

const BtnGroup = styled.div`
  /* margin-bottom: 20px; */
  /* display: grid; */
  display: flex;
  gap: 30px;
  /* color: white; */
  /* align-items: center; */
  /* justify-content: center; */
  margin-top: 20px; /* 원하는 간격으로 조정 */
`;

const CustomTable = styled.div`
  margin-top: 100px;
  width: 1000px;
  height: 760px;
  border-radius: 15px;
  border: 1px solid #f6f6fe;
  overflow: hidden;
`;

const IssueLayoutMain = styled.main`
  height: 100vh;
  width: auto;
  display: flex;
  flex-direction: column; /* 자식 요소를 수직으로 정렬 */
  align-items: center; /* 수직 가운데 정렬 */
  overflow: hidden;
  text-align: center;
  /* background: pink; */
  /* border-radius: 35px;
  border: 1px solid #8788e4; */
`;

// 프로필 이미지 스타일 컴포넌트
const ProfileImage = styled.img`
  width: 24px;
  height: 24px;
  border: 1px solid;
  border-color: white;
  border-radius: 50%;
  margin-right: -10px; /* 이미지 간격 조정 (원하는 간격으로 설정) */

  /* overflow: hidden; */
`;
// 스타일 컴포넌트를 사용하여 이미지 스타일을 지정합니다.
const ProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const TableCell = styled.td`
  display: flex;
  align-items: center;
  justify-content: center; /* 수평 가운데 정렬 */
`;

const StyledCategorySpan = styled.span`
  height: 28px;
  background-color: #8788e4;
  padding: 7px 8px;
  border-radius: 4px;
  color: white;
  width: 80px;
  display: inline-block;
`;
const Badge = styled.span`
  width: 24px;
  height: 24px;
  background-color: #ebebeb;
  padding: 4px 8px;
  border-radius: 50%;
  color: black;
  font-size: 14px; // 원하는 폰트 크기 조정
  display: inline-flex; /* 가운데 정렬을 위한 스타일 */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
  border: 1px solid;
  border-color: white;
`;

// const Row = styled.div`
//   gap: 3.8%;
//   display: flex;
//   justify-content: flex-start; /* 이미지들을 가로로 가운데 정렬 */
// `;