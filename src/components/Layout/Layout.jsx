import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { selectUser } from 'redux/auth/authSelectors';
import { useEffect } from 'react';

export const Layout = () => {
  const { name } = useSelector(selectUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      navigate('/contacts');
      return;
    }
    navigate('/login');
    // eslint-disable-next-line
  }, [name]);

  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
