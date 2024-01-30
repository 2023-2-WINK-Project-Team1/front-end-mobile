import React from 'react';
import StringAlarmRender from './StringAlarmRender';

function App() {
  // 임의의 데이터 선언 (프론트엔드에서는 실제 API 등을 통해 데이터를 받아와야 함)
  const notificationData = [
    { type: 'Request' },
    { type: 'RequestApprove' },
    { type: 'InfoFix' },
    { type: 'RequestDenial' },
  ];

  return (
    <div>
      {/* 임의의 데이터를 사용하여 StringAlarmRender를 여러 번 렌더링 */}
      {notificationData.map((notification, index) => (
        <StringAlarmRender key={index} type={notification.type} />
      ))}
    </div>
  );
}

export default App;
