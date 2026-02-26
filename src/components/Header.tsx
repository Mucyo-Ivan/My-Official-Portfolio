import { useState, useEffect, useCallback } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

interface HeaderProps {
  onMenuToggle: (isOpen: boolean) => void
  menuOpen: boolean
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, menuOpen }) => {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const location = useLocation()

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset

    setScrolled(currentScrollPos > 0)

    if (menuOpen) return

    const prevScrollPos = (window as any).__prevScrollPos || 0
    if (prevScrollPos > currentScrollPos) {
      setHidden(false)
    } else {
      setHidden(true)
    }
    ; (window as any).__prevScrollPos = currentScrollPos
  }, [menuOpen])

  useEffect(() => {
    ; (window as any).__prevScrollPos = window.pageYOffset
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Close menu on route change
  useEffect(() => {
    onMenuToggle(false)
  }, [location, onMenuToggle])

  const toggleMenu = () => {
    onMenuToggle(!menuOpen)
  }

  return (
    <header
      className={`header${scrolled ? ' scrolled' : ''}`}
      id="header"
      style={{ top: hidden ? '-100px' : '0' }}
    >
      <Link to="/" className="logo">
        <span className="main-icon"></span>
        <span>Ivan</span>
      </Link>

      <div className={`navbar${menuOpen ? ' open' : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>Home</NavLink>
        <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''}>Skills</NavLink>
        <NavLink to="/education" className={({ isActive }) => isActive ? 'active' : ''}>Education</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
        <NavLink to="/career" className={({ isActive }) => isActive ? 'active' : ''}>Career</NavLink>
        <NavLink to="/hobbies" className={({ isActive }) => isActive ? 'active' : ''}>Hobbies</NavLink>
        <NavLink to="/testimonials" className={({ isActive }) => isActive ? 'active' : ''}>Testimonials</NavLink>
      </div>

      <div className="main">
        <NavLink to="/contact" className={({ isActive }) => `user main-items${isActive ? ' active' : ''}`}>
          <i className="fas fa-envelope cm-icon"></i>Contact Me
        </NavLink>
        <div className="main-items menu-icon-container" id="menu-icon-js" onClick={toggleMenu}>
          <div className={`bx bx-menu${menuOpen ? ' bx-x' : ''}`} id="menu-icon"></div>
        </div>
      </div>
    </header>
  )
}

export default Header
