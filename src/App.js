import './App.css';
import { ThemeProvider } from 'styled-components'; // 1. Global color를 사용하기 위한 import
import theme from './Theme.js'; // 2. Global color를 사용하기 위한 import
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
// import NewAlarm from './pages/NewAlarm';
import NewSetting from './pages/NewSetting';
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
            {/*alarm 에서 newalarm을 불러온다*/}
            <Route path="/setting" element={<NewSetting />}></Route>
            <Route path="/testPage" element={<TestPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
