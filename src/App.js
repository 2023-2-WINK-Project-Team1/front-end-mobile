import './App.css';
import { ThemeProvider } from 'styled-components'; // 1. Global color를 사용하기 위한 import
import theme from './Theme.js'; // 2. Global color를 사용하기 위한 import
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Setting from './pages/Setting';
import TestPage from './pages/componentTest/TestPage';

function App() {
  return (
    // 3. styled-component의 ThemeProvider와 theme를 가져온 후, 컴포넌트의 최상단에 감싸준다.
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            {/*<Route path="/alarm" element={<NewAlarm />}></Route>*/}
            {/*localhost/alarm에 NewAlarm을 불러오겠다 이거임*/}
            <Route path="/setting" element={<Setting />}></Route>
            <Route path="/test-page" element={<TestPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
