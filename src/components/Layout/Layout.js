import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { LayoutContainer } from './Layout.styled';
import { AppBar } from 'components/AppBar/AppBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <LayoutContainer>
      <AppBar />
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </LayoutContainer>
  );
};
