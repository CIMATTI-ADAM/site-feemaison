import { useState, useEffect } from 'react';
import { Cookie, Check, Settings } from 'lucide-react';
import { useSEO } from '../lib/seo';
import { LegalLayout } from '../components/LegalLayout';

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = 'feemaison_cookie_consent';

export function CookiesPage() {
  useSEO({
    title: 'Gestion des cookies — Fée Maison',
    description: 'Gérez vos préférences en matière de cookies sur le site Fée Maison.',
  });

  const [prefs, setPrefs] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setPrefs(JSON.parse(stored));
      } catch {
        // ignore
      }
    }
  }, []);

  const save = (preferences: CookiePreferences) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    setPrefs(preferences);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <LegalLayout title="Gestion des cookies">
      <section>
        <h2>Présentation</h2>
        <p>
          Ce site utilise des cookies pour assurer son bon fonctionnement et, sous réserve de votre
          consentement, pour mesurer son audience. Vous pouvez à tout moment modifier vos
          préférences à l'aide des réglages ci-dessous.
        </p>
      </section>

      <section>
        <h2>Types de cookies</h2>
        <div className="space-y-4 mt-4">
          <div className="bg-beige-50 border border-beige-200 rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg text-brown-800">Cookies strictement nécessaires</h3>
                <p className="text-sm text-brown-600 mt-1">
                  Indispensables au fonctionnement du site (préférences de cookies, navigation).
                </p>
              </div>
              <span className="text-xs font-semibold text-sage-700 bg-sage-100 px-3 py-1 rounded-full">Toujours actifs</span>
            </div>
          </div>

          <div className="bg-beige-50 border border-beige-200 rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg text-brown-800">Cookies d'analyse</h3>
                <p className="text-sm text-brown-600 mt-1">
                  Statistiques de visite anonymisées pour améliorer le site.
                </p>
              </div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={prefs.analytics}
                  onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })}
                  className="w-5 h-5 accent-terracotta-500"
                />
              </label>
            </div>
          </div>

          <div className="bg-beige-50 border border-beige-200 rounded-xl p-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg text-brown-800">Cookies marketing</h3>
                <p className="text-sm text-brown-600 mt-1">
                  Partage et boutons de réseaux sociaux.
                </p>
              </div>
              <label className="cursor-pointer">
                <input
                  type="checkbox"
                  checked={prefs.marketing}
                  onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })}
                  className="w-5 h-5 accent-terracotta-500"
                />
              </label>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-wrap gap-3 items-center">
          <button
            onClick={() => save(prefs)}
            className="btn-primary"
          >
            {saved ? <><Check size={18} /> Enregistré</> : <><Settings size={18} /> Enregistrer mes préférences</>}
          </button>
          <button
            onClick={() => save({ necessary: true, analytics: false, marketing: false })}
            className="btn-secondary"
          >
            <Cookie size={16} /> Tout refuser
          </button>
          <button
            onClick={() => save({ necessary: true, analytics: true, marketing: true })}
            className="btn-secondary"
          >
            Tout accepter
          </button>
        </div>
        {saved && (
          <p className="mt-4 text-sm text-sage-700 bg-sage-50 p-3 rounded-lg animate-fade-in">
            Vos préférences ont été enregistrées.
          </p>
        )}
      </section>
    </LegalLayout>
  );
}
