import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './assets/css/main.css';
import Footer from './layout/Footer';
import Navbar from './layout/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import PrivateRoute from './components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/profile', element: <PrivateRoute component={Profile}/> },
      // { path: '/transactions', element: <Transactions /> },
    ],
  },
  // { path: '/*', element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
