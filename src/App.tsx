import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Home } from './component/pages/home-page/home';
import Fallback from './component/fallback/fallback';
import { SignUp } from './component/pages/auth-page/sign-up';
import { Login } from './component/pages/auth-page/login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: Home,
      HydrateFallback: Fallback
    },
    {
      path: '/sign-up',
      Component: SignUp,
      HydrateFallback: Fallback
    },
    {
      path: '/login',
      Component: Login,
      HydrateFallback: Fallback
    },
  ])

  return (
    <div>
      <RouterProvider router={router} />
      {/* <Toaster /> */}
    </div>
  );
}

export default App
