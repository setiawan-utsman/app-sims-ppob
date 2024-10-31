import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppLayout from './Layout/AppLayout'
import DashboardPage from './Dashboard/DashboardPage'

export default function indexRouting() {
  return (
    <Routes>
        <Route path='' element={<AppLayout />}>
        <Route path="dashboard" element={<React.Suspense><DashboardPage /></React.Suspense>} />
        </Route>
    </Routes>
  )
}
