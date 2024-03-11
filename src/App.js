// App.js
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Main from './pages/Main';
import MainPage from './pages/MainPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Setting from './pages/Setting';
import NotificationPage from './pages/Notification';
import UserRental from './pages/UserRental';
import MyPage from './pages/MyPage';
import APITest from './pages/APITest';
import GoodsRegistration from './pages/GoodsRegistration';
import AppInfo from './pages/AppInfo';
import { RecoilRoot } from 'recoil';
import RentalGoods from './pages/RentalGoods';
import ReturnGoods from './pages/ReturnGoods';
import AdminMain from './pages/AdminMain';
import GoodsManagement from './pages/GoodsManagement';
import GoodsModify from './pages/GoodsModify';

function App() {
  return (
    <RecoilRoot>
      <div id="App">
        <CookiesProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/main" element={<MainPage />}></Route>
              <Route path="/setting" element={<Setting />}></Route>
              <Route path="/user-rental" element={<UserRental />}></Route>
              <Route path="/mypage" element={<MyPage />}></Route>
              <Route
                path="/notification"
                element={<NotificationPage />}
              ></Route>
              <Route path="/sign-in" element={<SignIn />}></Route>
              <Route path="/sign-up" element={<SignUp />}></Route>
              <Route
                path="/goods-registration"
                element={<GoodsRegistration />}
              ></Route>
              <Route path="/app-info" element={<AppInfo />}></Route>
              <Route path="/rental-goods" element={<RentalGoods />}></Route>
              <Route path="/return-goods" element={<ReturnGoods />}></Route>
              <Route path="/admin-main" element={<AdminMain />}></Route>
              <Route
                path="/goods-management"
                element={<GoodsManagement />}
              ></Route>
              <Route path="/goods-modify" element={<GoodsModify />}></Route>
              <Route path="/api-test" element={<APITest />}></Route>
            </Routes>
          </BrowserRouter>
        </CookiesProvider>
      </div>
    </RecoilRoot>
  );
}

export default App;
