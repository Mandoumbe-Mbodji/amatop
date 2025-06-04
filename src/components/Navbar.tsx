import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import { categories } from '../data/categories';
import SearchBar from './SearchBar';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-200 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
            <ShoppingCart className="w-8 h-8 text-primary-600" />
            <span className="text-xl font-bold text-primary-800">AmaTop</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-6">
              {categories.slice(0, 5).map((category) => (
                <NavLink
                  key={category.id}
                  to={`/categories/${category.id}`}
                  className={({ isActive }) =>
                    isActive 
                      ? 'text-primary-600 font-medium' 
                      : 'text-gray-600 hover:text-primary-600 transition-colors'
                  }
                >
                  {category.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Toggle Button */}
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-500 hover:text-primary-600 focus:outline-none"
              aria-label="Rechercher"
            >
              {isSearchOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Search className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-500 md:hidden focus:outline-none"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>

        {/* Search Bar Expanded */}
        {isSearchOpen && (
          <div className="py-3 border-t border-gray-100 animate-fade-in">
            <SearchBar onClose={() => setIsSearchOpen(false)} />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 animate-fade-in">
            <div className="py-3 space-y-3">
              {categories.map((category) => (
                <NavLink
                  key={category.id}
                  to={`/categories/${category.id}`}
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? 'text-primary-600 font-medium' : 'text-gray-600'}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </NavLink>
              ))}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 ${isActive ? 'text-primary-600 font-medium' : 'text-gray-600'}`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;