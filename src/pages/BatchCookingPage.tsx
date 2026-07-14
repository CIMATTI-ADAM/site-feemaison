import { Clock, Heart, UtensilsCrossed, CalendarDays, Recycle, Smile, ShieldCheck, Coffee, Sparkles } from 'lucide-react';
import { Link } from '../lib/router';
import { useSEO } from '../lib/seo';
import { siteConfig } from '../config/siteConfig';
import { batchcookingImages } from '../lib/images';
import { CreditImpot } from '../components/CreditImpot';

const benefits = [
  { icon: Clock, text: 'Gagner du temps' },
  { icon: Heart, text: 'Réduire la charge mentale' },
  { icon: UtensilsCrossed, text: 'Manger des repas faits maison' },
  { icon: CalendarDays, text: 'Varier les menus' },
  { icon: Sparkles, text: 'Mieux organiser la semaine' },
  { icon: Recycle, text: 'Limiter le gaspillage' },
  { icon: Smile, text: 'Adapter les recettes aux goûts de la famille' },
  { icon: ShieldCheck, text: 'Prendre en compte allergies, intolérances ou préférences' },
  { icon: Coffee, text: 'Disposer de repas prêts à réchauffer ou à finaliser' },
];

const steps = [
  'Échange sur vos besoins, vos habitudes et vos préférences.',
  'Proposition ou validation des menus.',
  'Organisation des courses selon la formule retenue.',
  'Préparation des plats directement à votre domicile.',
  'Rangement, étiquetage et conseils de conservation.',
];

const targetAudience = [
  'Familles', 'Parents', 'Jeunes parents', 'Actifs ayant peu de temps',
  'Seniors', 'Personnes souhaitant retrouver une alimentation plus régulière',
  'Personnes en convalescence', 'Personnes souhaitant alléger leur organisation quotidienne',
];

export function BatchCookingPage() {
  useSEO({
    title: 'Batchcooking à domicile — Fée Maison | Préparation de repas à Lannion, Trégor',
    description: "Catherine se déplace à votre domicile pour préparer plusieurs repas à l'avance. Batchcooking personnalisé à Lannion, dans le Trégor et les Côtes d'Armor.",
  });

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <img
          src={batchcookingImages[0].src}
          alt={batchcookingImages[0].alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brown-900/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-cream-50 mb-4 animate-fade-in-up">
            Vos repas de la semaine préparés chez vous
          </h1>
          <p className="text-lg text-cream-100 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Catherine se déplace à votre domicile pour préparer plusieurs repas à l'avance, selon vos
            goûts, votre rythme de vie et vos besoins alimentaires.
          </p>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Les bénéfices du batchcooking à domicile</h2>
            <div className="divider" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.text} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center">
                  <b.icon size={20} />
                </span>
                <span className="text-brown-700 font-medium text-sm md:text-base">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment se déroule une prestation */}
      <section className="py-20 md:py-28 bg-beige-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Comment se déroule une prestation ?</h2>
            <div className="divider" />
          </div>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm"
              >
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-terracotta-600 text-white flex items-center justify-center font-serif font-bold">
                  {i + 1}
                </span>
                <p className="text-brown-700 text-base md:text-lg pt-1.5">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie batchcooking */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {batchcookingImages.slice(1).map((img) => (
              <div key={img.src} className="overflow-hidden rounded-xl aspect-[4/3] group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pour qui ? */}
      <section className="py-20 md:py-28 bg-sage-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Pour qui ?</h2>
            <div className="divider" />
            <p className="section-subtitle">Le batchcooking à domicile s'adresse à toutes les personnes qui souhaitent profiter d'une cuisine maison sans en porter la charge.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {targetAudience.map((target) => (
              <div key={target} className="bg-white p-4 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                <Baby size={24} className="mx-auto text-sage-500 mb-2" />
                <span className="text-brown-700 text-sm font-medium">{target}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Crédit d'impôt */}
      {siteConfig.creditImpot.enabled && <CreditImpot />}

      {/* CTA */}
      <section className="py-20 bg-terracotta-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Demandez une prestation de batchcooking</h2>
          <p className="text-cream-100 mb-8 max-w-2xl mx-auto">
            Échangeons sur vos besoins et vos habitudes pour construire un menu qui vous ressemble.
          </p>
          <Link to="contact" className="inline-flex items-center gap-2 bg-white text-terracotta-600 px-8 py-4 rounded-full font-semibold hover:bg-cream-100 hover:shadow-lg transition-all hover:-translate-y-0.5">
            Échanger sur mon besoin
          </Link>
        </div>
      </section>
    </div>
  );
}
