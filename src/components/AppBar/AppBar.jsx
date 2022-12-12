import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import s from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={s.header}>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};