import { RouterProvider, useRouter } from './lib/router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { BatchCookingPage } from './pages/BatchCookingPage';
import { EventsPage } from './pages/EventsPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { FAQPage } from './pages/FAQPage';
import { ContactForm } from './components/ContactForm';
import { LegalNoticesPage } from './pages/LegalNoticesPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { CGVPage } from './pages/CGVPage';
import { MediatorPage } from './pages/MediatorPage';
import { CookiesPage } from './pages/CookiesPage';

function CurrentPage() {
  const { route } = useRouter();

  switch (route) {
    case 'accueil': return <HomePage />;
    case 'batchcooking': return <BatchCookingPage />;
    case 'evenements': return <EventsPage />;
    case 'a-propos': return <AboutPage />;
    case 'galerie': return <GalleryPage />;
    case 'temoignages': return <TestimonialsPage />;
    case 'faq': return <FAQPage />;
    case 'contact': return <ContactForm />;
    case 'mentions-legales': return <LegalNoticesPage />;
    case 'politique-confidentialite': return <PrivacyPage />;
    case 'cgv': return <CGVPage />;
    case 'mediateur': return <MediatorPage />;
    case 'cookies': return <CookiesPage />;
    default: return <HomePage />;
  }
}

function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen flex flex-col bg-cream-50">
        <Header />
        <main className="flex-1">
          <CurrentPage />
        </main>
        <Footer />
        <CookieBanner />
        <ScrollToTop />
      </div>
    </RouterProvider>
  );
}

export default App;
