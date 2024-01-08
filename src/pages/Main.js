import React from 'react';

function Main() {
  const imageMarginLeft = '12px';

  return (
    <div className="main-container">
      <div
        className="box"
        style={{
          top: '121px',
          left: '45px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row', 
        }}
      >
        <img
          src="/images/bell.png"
          alt="알림"
          style={{
            marginRight: '10px',
            marginLeft: imageMarginLeft,
            lineHeight: '2',
          }}
        />
        <p className="text" style={{ fontSize: '14px', lineHeight: '2' }}>
          알림
        </p>
      </div>

      {/* 두 번째 박스 */}
      <div
        className="box"
        style={{
          top: '205px',
          left: '45px',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <img
          src="/images/questionmark.png"
          alt="정보"
          style={{
            marginRight: '10px',
            marginLeft: imageMarginLeft,
            lineHeight: '1',
          }}
        />
        <p className="text" style={{ fontSize: '14px', lineHeight: '1' }}>
          정보
        </p>
      </div>

      {/* 세 번째 박스 */}
      <div
        className="box"
        style={{
          top: '289px',
          left: '45px',
          display: 'flex', 
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <img
          src="/images/people.png"
          alt="사람"
          style={{
            marginRight: '10px',
            marginLeft: imageMarginLeft,
            lineHeight: '1',
          }}
        />
        <p className="text" style={{ fontSize: '14px', lineHeight: '1' }}>
          사용자 모드
        </p>
      </div>

      {/* 네 번째 박스 */}
      <div
        className="box"
        style={{
          top: '677px',
          left: '43px',
        }}
      >
        <p
          className="text"
          style={{ fontSize: '16px', marginLeft: '20px', lineHeight: '1' }}
        >
          로그아웃
        </p>
      </div>
    </div>
  );
}

export default Main;
