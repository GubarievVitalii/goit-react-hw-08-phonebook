import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import s from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={s.wrapper}>
      <p className={s.username}>Welcome, {user.name} ({user.email})</p>
      <button className={s.btnLogOut} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
