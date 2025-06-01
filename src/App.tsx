import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router';
import { Home } from './component/pages/home-page/home';
import Fallback from './component/fallback/fallback';
import { SignUp } from './component/pages/auth-page/sign-up';
import { Login } from './component/pages/auth-page/login';
import { Toaster } from 'react-hot-toast';
import { Cities } from './component/pages/cities/cities';
import { DetailDestination } from './component/pages/detail-dest/detail-destination';
import { Calculation } from './component/pages/calculation/calculation';
import { Table } from './component/pages/table/table';
import { PrivateLayout } from './component/private-layout/private-layout';
import { TableDetail } from './component/pages/table/table-detail';

function App() {
  const router = createBrowserRouter([
    
    {
      path: '',
      element: <PrivateLayout />,
      children: [
        {
          path: '/',
          Component: Home,
          HydrateFallback: Fallback
        },
        {
          path: '/cities',
          Component: Cities,
          HydrateFallback: Fallback
        },
        {
          path: '/detail-destinations',
          Component: DetailDestination,
          HydrateFallback: Fallback
        },
        {
          path: '/calculation/:city',
          Component: Calculation,
          HydrateFallback: Fallback
        },
        {
          path: '/table/:city',
          Component: Table,
          HydrateFallback: Fallback
        },
        {
          path: '/table-detail/:city',
          Component: TableDetail,
          HydrateFallback: Fallback
        },
      ]
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
      <Toaster />
    </div>
  );
}

export default App
