import { Link } from 'react-router-dom'
import { Menu, X, ShoppingCart } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface NavbarProps {
  onBuyClick: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ onBuyClick }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Technology', href: '/technology' },
    { label: 'Specs', href: '/specs' },
    { label: 'Compare', href: '/compare' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Press Kit', href: '/press-kit' },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-midnight/95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-full flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-fujin-orange">🪁 Fujin</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.href}
              to={link.href}
              className={`transition-colors ${
                location.pathname === link.href
                  ? 'text-fujin-orange font-semibold'
                  : 'text-slate hover:text-cloud'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="button-primary">
            Contact
          </Link>
          <button onClick={onBuyClick} className="button-secondary">
            <ShoppingCart size={18} className="inline mr-2" />
            Buy Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={onBuyClick} className="text-fujin-orange">
            <ShoppingCart size={24} />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-cloud"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-charcoal"
          >
            <div className="container-full py-4 space-y-2">
              {links.map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 transition-colors ${
                    location.pathname === link.href
                      ? 'text-fujin-orange font-semibold'
                      : 'text-slate hover:text-cloud'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="block py-2 text-fujin-orange">
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
