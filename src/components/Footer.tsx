import { UtensilsCrossed, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Link, type RoutePath } from '../lib/router';
import { siteConfig } from '../config/siteConfig';

const footerLinks: { label: string; route: RoutePath }[] = [
  { label: 'Mentions légales', route: 'mentions-legales' },
  { label: 'CGV', route: 'cgv' },
  { label: 'Politique de confidentialité', route: 'politique-confidentialite' },
  { label: 'Gestion des cookies', route: 'cookies' },
  { label: 'Médiateur de la consommation', route: 'mediateur' },
  { label: 'Contact', route: 'contact' },
];

export function Footer() {
  const year = new Date().getFullYear();
  const { socialMedia } = siteConfig;
  const socials = [
    { icon: Facebook, url: socialMedia.facebook, label: 'Facebook' },
    { icon: Instagram, url: socialMedia.instagram, label: 'Instagram' },
    { icon: Linkedin, url: socialMedia.linkedin, label: 'LinkedIn' },
    { icon: MapPin, url: socialMedia.google, label: 'Google Maps' }
  ].filter((s) => s.url);

  return (
    <footer className="bg-brown-800 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Colonne identité */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-terracotta-600 text-white">
                <UtensilsCrossed size={20} />
              </span>
              <span className="font-serif text-xl text-cream-50 font-semibold">
                {siteConfig.businessName}
              </span>
            </div>
            <p className="text-sm text-cream-200 leading-relaxed">
              Catherine, cuisinière à domicile. Batchcooking à domicile et cuisine sur mesure pour vos
              évènements et séjours.
            </p>
            {socials.length > 0 && (
              <div className="flex gap-3 pt-2">
                {socials.map(({ icon: Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-brown-700 text-cream-200 transition-all hover:bg-terracotta-600 hover:text-white"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Colonne coordonnées */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg text-cream-50 font-semibold">Coordonnées</h3>
            <ul className="space-y-2 text-sm text-cream-200">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-terracotta-400" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-terracotta-400" />
                <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="hover:text-cream-50 transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-terracotta-400" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-cream-50 transition-colors break-all">
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne zone d'intervention */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg text-cream-50 font-semibold">Zone d'intervention</h3>
            <p className="text-sm text-cream-200 leading-relaxed">{siteConfig.interventionZone}</p>
            <Link to="contact" className="inline-flex items-center gap-1 text-sm text-terracotta-400 hover:text-terracotta-300 transition-colors font-semibold">
              Demander un devis <ArrowRight size={14} />
            </Link>
          </div>

          {/* Colonne liens */}
          <div className="space-y-3">
            <h3 className="font-serif text-lg text-cream-50 font-semibold">Informations</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.route}>
                  <Link to={link.route} className="text-cream-200 hover:text-terracotta-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-brown-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-300 text-center md:text-left">
            © {year} {siteConfig.businessName} — SIRET {siteConfig.legal.siret}. Tous droits réservés.
          </p>
          <p className="text-xs text-cream-300">
            Cuisinière à domicile — {siteConfig.contact.city}, {siteConfig.contact.department}
          </p>
        </div>
      </div>
    </footer>
  );
}
