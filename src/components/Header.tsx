import { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { Link, useRouter, type RoutePath } from '../lib/router';
import { siteConfig } from '../config/siteConfig';

const navItems: { label: string; route: RoutePath; highlight?: boolean }[] = [
  { label: 'Accueil', route: 'accueil' },
  { label: 'Batchcooking', route: 'batchcooking', highlight: true },
  { label: 'Évènements et séjours', route: 'evenements', highlight: true },
  { label: 'À propos', route: 'a-propos' },
  { label: 'Galerie', route: 'galerie' },
  { label: 'Témoignages', route: 'temoignages' },
  { label: 'FAQ', route: 'faq' },
  { label: 'Contact', route: 'contact' },
];

export function Header() {
  const { route } = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [route]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream-50/95 backdrop-blur-md shadow-sm' : 'bg-cream-50/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="accueil" className="flex items-center gap-2 group">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-terracotta-600 text-white transition-transform group-hover:scale-105">
              <UtensilsCrossed size={20} />
            </span>
           
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
            {navItems.map((item) => (
              <Link
                key={item.route}
                to={item.route}
                className={`relative px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  route === item.route
                    ? 'text-terracotta-600'
                    : 'text-brown-700 hover:text-terracotta-600'
                } ${item.highlight ? 'after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-terracotta-500' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-brown-800 hover:text-terracotta-600 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          className="lg:hidden bg-cream-50 border-t border-beige-200 animate-fade-in"
          aria-label="Navigation mobile"
        >
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.route}
                to={item.route}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                  route === item.route
                    ? 'bg-terracotta-50 text-terracotta-600'
                    : 'text-brown-700 hover:bg-beige-100'
                } ${item.highlight ? 'border-l-4 border-terracotta-500' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
