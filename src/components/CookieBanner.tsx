import { useState, useEffect } from 'react';
import { Cookie, X, Check, Settings } from 'lucide-react';

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = 'feemaison_cookie_consent';

const defaultPrefs: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>(defaultPrefs);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const save = (preferences: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => save({ necessary: true, analytics: true, marketing: true });
  const refuseAll = () => save(defaultPrefs);
  const customize = () => setShowSettings(true);

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-brown-800 text-cream-100 rounded-2xl shadow-2xl overflow-hidden">
        {!showSettings ? (
          <div className="p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="flex-shrink-0 text-terracotta-400 mt-0.5" size={24} />
              <div>
                <p className="text-sm leading-relaxed text-cream-200">
                  Ce site utilise des cookies strictement nécessaires à son fonctionnement. Les cookies
                  d'analyse ne sont activés qu'avec votre consentement.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 flex-shrink-0">
              <button
                onClick={refuseAll}
                className="px-4 py-2 text-sm font-semibold text-cream-200 border border-brown-600 rounded-lg hover:bg-brown-700 transition-colors"
              >
                Refuser
              </button>
              <button
                onClick={customize}
                className="px-4 py-2 text-sm font-semibold text-cream-200 border border-brown-600 rounded-lg hover:bg-brown-700 transition-colors"
              >
                Personnaliser
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm font-semibold bg-terracotta-600 text-white rounded-lg hover:bg-terracotta-700 transition-colors flex items-center gap-1.5"
              >
                <Check size={16} /> Accepter
              </button>
              <button
                onClick={() => setShowBanner(false)}
                className="md:hidden p-2 text-cream-300 hover:text-cream-50"
                aria-label="Fermer"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        ) : (
          <div className="p-5 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-lg text-cream-50 flex items-center gap-2">
                <Settings size={20} className="text-terracotta-400" /> Préférences cookies
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-cream-300 hover:text-cream-50"
                aria-label="Retour"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <label className="flex items-center justify-between p-3 bg-brown-700/50 rounded-lg">
                <div>
                  <span className="text-sm font-semibold text-cream-100">Cookies strictement nécessaires</span>
                  <p className="text-xs text-cream-300 mt-0.5">Indispensables au fonctionnement du site</p>
                </div>
                <span className="text-xs text-cream-300 font-semibold">Toujours actifs</span>
              </label>

              <label className="flex items-center justify-between p-3 bg-brown-700/50 rounded-lg cursor-pointer">
                <div>
                  <span className="text-sm font-semibold text-cream-100">Cookies d'analyse</span>
                  <p className="text-xs text-cream-300 mt-0.5">Statistiques de visite anonymisées</p>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })}
                  className="w-5 h-5 accent-terracotta-500"
                />
              </label>

              <label className="flex items-center justify-between p-3 bg-brown-700/50 rounded-lg cursor-pointer">
                <div>
                  <span className="text-sm font-semibold text-cream-100">Cookies marketing</span>
                  <p className="text-xs text-cream-300 mt-0.5">Partage sur les réseaux sociaux</p>
                </div>
                <input
                  type="checkbox"
                  checked={prefs.marketing}
                  onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })}
                  className="w-5 h-5 accent-terracotta-500"
                />
              </label>
            </div>

            <button
              onClick={() => save(prefs)}
              className="w-full mt-5 px-4 py-2.5 text-sm font-semibold bg-terracotta-600 text-white rounded-lg hover:bg-terracotta-700 transition-colors"
            >
              Enregistrer mes préférences
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export function openCookieSettings() {
  const banner = document.getElementById('cookie-settings-trigger');
  banner?.click();
}
