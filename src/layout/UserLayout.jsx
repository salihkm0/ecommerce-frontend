import React from 'react'
import { Outlet } from 'react-router-dom'
import { UserNavbar } from '../components/user/UserNavbar'

export const UserLayout = () => {
  return (
    <>
        <UserNavbar/>
        <Outlet/>
    </>
  )
}
