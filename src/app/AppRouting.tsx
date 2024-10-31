import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
// import SigninPage from './page/Auth/SigninPage'
const SigninPage = React.lazy(() => import('./page/Auth/SigninPage'));
const SignupPage = React.lazy(() => import('./page/Auth/Register/SignupPage'));
const Index = React.lazy(() => import('./page/indexRouting'));


export default function AppRouting() {
  return (
    <Routes>
        {/* <Route> */}
        <Route path='' element={<Navigate to={'/signin'} />}></Route>
        <Route path='signin' element={ <React.Suspense> <SigninPage /> </React.Suspense> } />
        <Route path='signup' element={ <React.Suspense> <SignupPage /> </React.Suspense> } />
        <Route
          path='*'
          element={
              <React.Suspense >
                <Index />
              </React.Suspense>
          }
        />
        {/* </Route> */}
    </Routes>
  )
}
