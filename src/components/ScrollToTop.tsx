import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Retour en haut de page"
      className="fixed bottom-6 right-6 z-40 w-11 h-11 flex items-center justify-center bg-terracotta-600 text-white rounded-full shadow-lg transition-all hover:bg-terracotta-700 hover:shadow-xl hover:-translate-y-1 animate-fade-in"
    >
      <ArrowUp size={20} />
    </button>
  );
}
