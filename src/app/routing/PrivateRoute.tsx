import { lazy, FC, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import TopBarProgress from 'react-topbar-progress-indicator'
// import { DashboardWrapper } from '../pages/dashboard/DashboardWrapper'
import { PropsWithChildrenOnly } from '../../_formula1Page/helpers/react';
import { Dashboard } from '../modules/drivers/page/Dashboard';
const PrivateRoute= () => {


 
  return (
    <Routes>
   
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='/*' element={<Navigate to={'/drivers'}/>} />
        {/* Pages */}
        {/* <Route path='dashboard' element={<DashboardWrapper />} /> */}
        {/* <Route path='builder' element={<BuilderPageWrapper />} /> */}
   
        {/* Lazy Modules */}

        <Route
          path='drivers'
          element={
            <SuspensedView>
              <Dashboard />
            </SuspensedView>
          }
        />


        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
    </Routes>
  )
}

const SuspensedView: FC<PropsWithChildrenOnly> = ({ children }) => {  TopBarProgress.config({
    barColors: {
      '0': "#7337ee",
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export { PrivateRoute }