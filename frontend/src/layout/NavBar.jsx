import { NavLink } from 'react-router-dom';
import argBankLogo from '../assets/img/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '../service/user/userApi';

const Navbar = () => {
  const dispatch = useDispatch();
  // Get the isAuthenticated and user state from the store
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.user.user);

  // Handle the sign in and sign out functionality
  const handleAuth = () => {
    if (isAuthenticated) {
      localStorage.removeItem('token'); // Remove the token from local storage
      dispatch(authenticate.rejected()); // Dispatch the authSlice action
    }
  };

  return (
    <nav className='main-nav'>
      <NavLink className='main-nav-logo' to='/'>
        <img
          className='main-nav-logo-image'
          src={argBankLogo}
          alt='Argent Bank Logo'
        />
        <h1 className='sr-only'>Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink className='main-nav-item' to='/'>
          <i className='fa fa-user-circle'></i>
          {user && isAuthenticated ? `${user.body.firstName}` : null}
        </NavLink>
        <NavLink
          className='main-nav-item'
          to={isAuthenticated ? '/' : '/login'}
          onClick={handleAuth}
        >
          {isAuthenticated ? (
            <>
              <i className='fa fa-sign-out'></i>
              Sign Out
            </>
          ) : (
            'Sign In'
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
