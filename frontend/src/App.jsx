import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import './assets/css/main.css';
import Footer from './layout/Footer';
import Navbar from './layout/NavBar';
import Home from './pages/Home';

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
      // { path: '/profile', element: <Profile /> },
      // { path: '/transfer', element: <Transfer /> },
      // { path: '/deposit', element: <Deposit /> },
      // { path: '/withdraw', element: <Withdraw /> },
      // { path: '/transactions', element: <Transactions /> },
    ],
  },
  // { path: '/*', element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
