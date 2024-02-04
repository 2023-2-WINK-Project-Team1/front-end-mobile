import './App.css';
import { ThemeProvider } from 'styled-components'; // 1. Global color를 사용하기 위한 import
import theme from './Theme.js'; // 2. Global color를 사용하기 위한 import.
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import MainPage from './pages/MainPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Setting from './pages/Setting';
import Notification from './pages/Notification';
import UserRental from './pages/UserRental';
import MyPage from './pages/MyPage';
import AppInfo from './pages/AppInfo';
import { RecoilRoot } from 'recoil';
import RentalGoods from "./pages/RentalGoods";
import ReturnGoods from "./pages/ReturnGoods";

function App() {
  return (
    // 3. styled-component의 ThemeProvider와 theme를 가져온 후, 컴포넌트의 최상단에 감싸준다.
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <div id="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/main" element={<MainPage />}></Route>
              <Route path="/setting" element={<Setting />}></Route>
              <Route path="/user-rental" element={<UserRental />}></Route>
              <Route path="/mypage" element={<MyPage />}></Route>
              <Route path="/notification" element={<Notification />}></Route>
              <Route path="/sign-in" element={<SignIn />}></Route>
              <Route path="/sign-up" element={<SignUp />}></Route>
              <Route path="/app-info" element={<AppInfo />}></Route>
              <Route path="/rental-goods" element={<RentalGoods />}></Route>
              <Route path="/return-goods" element={<ReturnGoods />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default App;
