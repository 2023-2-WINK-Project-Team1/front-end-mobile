import React from 'react';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      <Button status={1}>대여중</Button>
      <Button status={2}>대여 가능</Button>
      <Button status={3}>반납 완료</Button>
    </div>
  );
};

export default App;
