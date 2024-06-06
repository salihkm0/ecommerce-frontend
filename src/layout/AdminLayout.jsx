import { Outlet } from 'react-router-dom'
import {AdminNavbar} from '../components/admin/AdminNavbar'
import { Footer } from '../components/Footer'


export const AdminLayout = () => {
  return (
    <>
        <AdminNavbar/>
        <Outlet/>
        <Footer/>
    </>
  )
}
