import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/user/UserNavbar'

export const UserLayout = () => {
  return (
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}
