import { NavLink } from 'react-router-dom';
import argBankLogo from '../assets/img/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { authenticate } from '../service/user/userApi';

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

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
        <NavLink
          className='main-nav-item'
          to={isAuthenticated ? '/' : '/login'}
          onClick={handleAuth}
        >
          <i className='fa fa-user-circle'></i>
          {isAuthenticated ? 'Sign Out' : 'Sign In'}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
