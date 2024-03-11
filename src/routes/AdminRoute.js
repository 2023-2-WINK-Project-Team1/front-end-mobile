// AdminRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isAdminState } from '../recoil/recoil';

const AdminRoute = ({ children }) => {
  const isAdmin = useRecoilValue(isAdminState);
  const location = useLocation();

  if (!isAdmin) {
    // 사용자가 관리자가 아니라면 /main으로 리다이렉트합니다.
    return <Navigate to="/main" state={{ from: location }} replace />;
  }

  // 관리자일 경우 자식 컴포넌트를 렌더링합니다.
  return children;
};
export default AdminRoute;
