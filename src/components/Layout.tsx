import { useState, useCallback } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useEffect } from 'react'

const Layout: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const handleMenuToggle = useCallback((isOpen: boolean) => {
    setMenuOpen(isOpen)
  }, [])

  const handleOverlayClick = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <Header onMenuToggle={handleMenuToggle} menuOpen={menuOpen} />
      <div className="page">
        <Outlet />
        <Footer />
      </div>
      <div
        className={`nav-touch-close${menuOpen ? ' nav-touch-close-open' : ''}`}
        id="nav-tc-js"
        onClick={handleOverlayClick}
      ></div>
    </>
  )
}

export default Layout
