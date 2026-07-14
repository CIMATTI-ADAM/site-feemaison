import { Star, Quote } from 'lucide-react';
import { useSEO } from '../lib/seo';
import { siteConfig } from '../config/siteConfig';

type Testimonial = {
  initials: string;
  name: string;
  type: string;
  text: string;
  rating: number;
  isExample: boolean;
};

// IMPORTANT : Ces témoignages sont des EXEMPLES identifiés comme tels.
// Remplacez-les par de vrais témoignages avant la mise en ligne.
const testimonials: Testimonial[] = [
  {
    initials: 'M.D.',
    name: 'Marie D.',
    type: 'Batchcooking à domicile',
    text: 'Exemple de témoignage — Catherine a transformé notre quotidien. Les repas de la semaine sont prêts, variés et délicieux. Un vrai soulagement.',
    rating: 5,
    isExample: true,
  },
  {
    initials: 'T.L.',
    name: 'Thomas L.',
    type: 'Évènement privé — Anniversaire',
    text: 'Exemple de témoignage — Le buffet préparé par Catherine pour notre anniversaire a ravi tous nos invités. Cuisine généreuse et conviviale.',
    rating: 5,
    isExample: true,
  },
  {
    initials: 'S.K.',
    name: 'Sophie K.',
    type: 'Séjour bien-être',
    text: 'Exemple de témoignage — Lors de notre retraite yoga, Catherine a préparé des repas équilibrés et savoureux, parfaitement adaptés au programme.',
    rating: 5,
    isExample: true,
  },
  {
    initials: 'J.P.',
    name: 'Julien P.',
    type: 'Batchcooking à domicile',
    text: "Exemple de témoignage — Un gain de temps précieux et des plats faits maison de qualité. Catherine écoute et s'adapte à nos préférences.",
    rating: 5,
    isExample: true,
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-[340px] md:w-[400px] bg-white rounded-2xl shadow-sm p-6 mx-3">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-terracotta-100 text-terracotta-600 flex items-center justify-center font-serif text-lg font-semibold">
            {t.initials}
          </div>
          <div>
            <p className="font-semibold text-brown-800 text-sm">{t.name}</p>
            <p className="text-xs text-brown-500">{t.type}</p>
          </div>
        </div>
        <Quote size={24} className="text-beige-300" />
      </div>
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={14} className="fill-terracotta-500 text-terracotta-500" />
        ))}
      </div>
      <p className="text-sm text-brown-600 leading-relaxed">{t.text}</p>
      {t.isExample && (
        <p className="mt-3 text-xs italic text-beige-500">— Témoignage exemple à remplacer</p>
      )}
    </div>
  );
}

export function TestimonialCarousel() {
  useSEO({
    title: 'Témoignages — Fée Maison | Cuisinière à domicile Lannion',
    description: 'Découvrez les retours des clients de Fée Maison sur le batchcooking à domicile et la cuisine évènementielle.',
  });

  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-20 md:py-28 bg-cream-100 overflow-hidden">
      <div className="text-center mb-12 px-4">
        <h2 className="section-title mb-4">Ce que disent les clients</h2>
        <div className="divider" />
        <p className="section-subtitle max-w-2xl mx-auto">
          Les témoignages ci-dessous sont des exemples en attente de retours clients réels.
        </p>
      </div>

      <div className="relative">
        <div className="carousel-track flex w-max">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>

      <div className="text-center mt-10 px-4">
        <p className="text-sm text-brown-500">
          Les avis réels laissés sur la page Google de Fée Maison pourront être affichés ici sous
          forme de captures d'écran, en défilement automatique.
        </p>
        <p className="text-xs text-beige-500 mt-1">
          Vitesse du carrousel : {siteConfig.testimonialCarouselSpeed / 1000}s (configurable dans
          siteConfig.ts)
        </p>
      </div>
    </section>
  );
}

export { TestimonialCarousel as TestimonialsPage };
