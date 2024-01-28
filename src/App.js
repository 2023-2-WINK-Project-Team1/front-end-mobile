import './App.css';
import { ThemeProvider } from 'styled-components'; // 1. Global color를 사용하기 위한 import
import theme from './Theme.js'; // 2. Global color를 사용하기 위한 import
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Setting from './pages/Setting';
import TestPage from './pages/componentTest/TestPage';
import UserRental from './pages/UserRental';
import MyPage from './pages/MyPage';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    // 3. styled-component의 ThemeProvider와 theme를 가져온 후, 컴포넌트의 최상단에 감싸준다.
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <div id="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/setting" element={<Setting />}></Route>
              <Route path="/user-rental" element={<UserRental />}></Route>
              <Route path="/mypage" element={<MyPage />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
