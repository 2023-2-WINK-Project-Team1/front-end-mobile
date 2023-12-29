import React from 'react';
import State from './components/State';

const App = () => {
  return (
    <div>
      <State status={1}>대여중</State>
      <State status={2}>대여 신청</State>
      <State status={3}>반납 완료</State>
    </div>
  );
};

export default App;
