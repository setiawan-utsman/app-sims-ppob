import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import TopUpPage from './TopUp/TopUpPage'

export default function indexRouting() {
  return (
    <Routes>
        <Route path='' element={<AppLayout />}>
        <Route path="topup" element={<React.Suspense><TopUpPage /></React.Suspense>} />
        </Route>
    </Routes>
  )
}
