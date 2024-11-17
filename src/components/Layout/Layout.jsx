import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

/**
 * Layout component that serves as a wrapper for the application.
 * It includes a Header and an Outlet for rendering nested routes.
 *
 * @returns {JSX.Element} The rendered layout component.
 */
const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>     
    </>
  )
}

export default Layout
