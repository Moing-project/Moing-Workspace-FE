import React from 'react';
import styled from 'styled-components';
// import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';

export default function Issue() {
  const headerCellStyle = {
    width: 'auto',
    height: '58px',
    backgroundColor: '#F6F6FE',
    color: '#8788E4',
    // textAlign: 'center' as 'center', // textAlign을 'center'로 설정
  };
  const calculateCellWidth = (text: string) => {
    return text.length * 10; // 텍스트 길이에 10을 곱한 값으로 너비를 계산합니다.
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
        { profileImg: '프로필', nickname: '참여멤버' },
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
      <Table
        style={{
          width: '1000px',
          height: '760px',
          border: ' 1px solid',
          borderColor: '#F6F6FE',
          // borderRadius: '20%',
        }}
        hover
        responsive
      >
        {/* <Box> */}
        {/* <TableHead> */}
        <thead>
          <tr>
            <th style={headerCellStyle}>번호</th>
            <th style={headerCellStyle}>진행상황</th>
            <th style={headerCellStyle}>카테고리</th>
            <th style={headerCellStyle}>제목</th>
            <th style={headerCellStyle}>작성자</th>
            <th style={headerCellStyle}>작성일</th>
            <th style={headerCellStyle}>참여멤버</th>
          </tr>
        </thead>
        {/* </TableHead> */}
        {/* </Box> */}
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
                  <span
                    style={{
                      backgroundColor: ' #8788e4',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      color: 'white', // 텍스트 색상
                    }}
                  >
                    {issue.category}
                  </span>
                ) : (
                  issue.category
                )}
              </td>
              <td style={{ width: '250px' }}>{issue.title}</td>

              {/* 이 부분에서 너비 변경 */}
              <td>{issue.nickname}</td>
              <td>{issue.date}</td>
              <td>
                <h5 className="t-card-title">{issue.members.length}+</h5>
                <div className="container">
                  <div className="row">
                    {issue.members.map((member, index) => (
                      <div className="col-24" key={index}>
                        <img
                          src={member.profileImg} // 여기에서 "profileImg"를 사용
                          alt="..."
                          className="two-card-mg-top"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </IssueLayoutMain>
  );
}

const IssueLayoutMain = styled.main`
  height: 100vh;
  width: auto;
  display: flex;
  justify-content: center;
  /* background: pink; */
  text-align: center;
`;

const StyledButton = styled.button`
  /* 여기에 버튼 스타일을 정의하세요 */
`;
