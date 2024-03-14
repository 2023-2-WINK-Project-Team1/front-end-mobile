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
import { RecoilRoot, useRecoilState } from 'recoil';
import RentalGoods from './pages/RentalGoods';
import ReturnGoods from './pages/ReturnGoods';
import AdminMain from './pages/AdminMain';
import GoodsManagement from './pages/GoodsManagement';
import GoodsModify from './pages/GoodsModify';
import AdminRoute from './routes/AdminRoute';
import ToBeContinued from './pages/ToBeContinued';
function App() {
  return (
    <RecoilRoot>
      <div id="App">
        <CookiesProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/main" element={<MainPage />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/user-rental" element={<UserRental />} />
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/notification" element={<ToBeContinued />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route
                path="/goods-registration"
                element={
                  <AdminRoute>
                    <GoodsRegistration />
                  </AdminRoute>
                }
              />
              <Route path="/app-info" element={<AppInfo />} />
              <Route path="/rental-goods" element={<RentalGoods />} />
              <Route path="/return-goods" element={<ReturnGoods />} />
              <Route
                path="/admin-main"
                element={
                  <AdminRoute>
                    <AdminMain />
                  </AdminRoute>
                }
              />
              <Route
                path="/goods-management"
                element={
                  <AdminRoute>
                    <GoodsManagement />
                  </AdminRoute>
                }
              />
              <Route
                path="/goods-modify"
                element={
                  <AdminRoute>
                    <GoodsModify />
                  </AdminRoute>
                }
              />
              {/*<Route path="/api-test" element={<APITest />} />*/}
            </Routes>
          </BrowserRouter>
        </CookiesProvider>
      </div>
    </RecoilRoot>
  );
}

export default App;
