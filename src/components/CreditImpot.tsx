import { useState } from 'react';
import { Info, ChevronDown, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export function CreditImpot() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-16 bg-cream-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sage-50 border border-sage-200 rounded-2xl p-6 md:p-8">
          <div className="flex items-start gap-4">
            <span className="flex-shrink-0 w-12 h-12 rounded-full bg-sage-200 text-sage-700 flex items-center justify-center">
              <Info size={24} />
            </span>
            <div className="flex-1">
              <h3 className="font-serif text-xl text-brown-800 mb-3">Crédit d'impôt — Services à la personne</h3>
              <p className="text-brown-600 leading-relaxed mb-4 text-sm md:text-base">
                {siteConfig.creditImpot.texte}
              </p>
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center gap-2 text-sage-700 font-semibold text-sm hover:text-sage-800 transition-colors"
                aria-expanded={open}
              >
                En savoir plus sur les modalités
                <ChevronDown size={16} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
              </button>

              {open && (
                <div className="mt-4 pt-4 border-t border-sage-200 animate-fade-in">
                  <p className="text-sm text-brown-600 leading-relaxed mb-3">
                    Le crédit d'impôt pour services à la personne permet de déduire une partie des
                    dépenses engagées pour des prestations réalisées à votre domicile. L'éligibilité
                    dépend de plusieurs conditions, notamment le statut de l'intervenant, la nature
                    de la prestation et le respect des obligations déclaratives.
                  </p>
                  <p className="text-sm text-brown-600 leading-relaxed mb-4">
                    Pour vérifier si votre situation remplit les conditions requises, consultez les
                    informations officielles ou contactez Fée Maison.
                  </p>
                  <a
                    href={siteConfig.creditImpot.lienInfos}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sage-700 font-semibold text-sm hover:text-sage-800 transition-colors"
                  >
                    Consulter les informations officielles <ExternalLink size={14} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
