import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type RoutePath =
  | 'accueil'
  | 'batchcooking'
  | 'evenements'
  | 'a-propos'
  | 'galerie'
  | 'temoignages'
  | 'faq'
  | 'contact'
  | 'mentions-legales'
  | 'politique-confidentialite'
  | 'cgv'
  | 'mediateur'
  | 'cookies';

type RouterContextValue = {
  route: RoutePath;
  navigate: (to: RoutePath) => void;
};

const RouterContext = createContext<RouterContextValue | null>(null);

const PATH_TO_ROUTE: Record<string, RoutePath> = {
  '': 'accueil',
  'batchcooking': 'batchcooking',
  'evenements': 'evenements',
  'a-propos': 'a-propos',
  'galerie': 'galerie',
  'temoignages': 'temoignages',
  'faq': 'faq',
  'contact': 'contact',
  'mentions-legales': 'mentions-legales',
  'politique-confidentialite': 'politique-confidentialite',
  'cgv': 'cgv',
  'mediateur': 'mediateur',
  'cookies': 'cookies',
};

const ROUTE_TO_PATH: Record<RoutePath, string> = Object.entries(PATH_TO_ROUTE).reduce(
  (acc, [path, route]) => ({ ...acc, [route]: path }),
  {} as Record<RoutePath, string>,
);

export function parseHash(hash: string): RoutePath {
  const clean = hash.replace(/^#\/?/, '').trim();
  if (PATH_TO_ROUTE[clean]) return PATH_TO_ROUTE[clean];
  return 'accueil';
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<RoutePath>(() => parseHash(window.location.hash));

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHash(window.location.hash));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (to: RoutePath) => {
    const path = ROUTE_TO_PATH[to];
    window.location.hash = `/${path}`;
  };

  return (
    <RouterContext.Provider value={{ route, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const ctx = useContext(RouterContext);
  if (!ctx) throw new Error('useRouter must be used within RouterProvider');
  return ctx;
}

type LinkProps = {
  to: RoutePath;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function Link({ to, children, className, onClick }: LinkProps) {
  const { navigate } = useRouter();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
    onClick?.();
  };
  return (
    <a
      href={`#/${ROUTE_TO_PATH[to]}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
