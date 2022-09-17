import './App.css';
import { Dashboard } from './app/modules/drivers/page/Dashboard';
import { QueryResponseDriversProvider } from './app/modules/drivers/core/QueryResponseProvider';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loading } from './app/modules/drivers/components/loading/loading';
const App = () => {


  return (
      <QueryResponseDriversProvider>
        <Outlet />
      </QueryResponseDriversProvider>
  );
}

export {App};
