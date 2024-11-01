import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export default function AppLayout() {
  return (
    <div>
      AppLayout
      <Outlet />
    </div>
  )
}
