import { Users, Coffee, Leaf, Heart, Briefcase, MapPin, ArrowRight } from 'lucide-react';
import { Link } from '../lib/router';
import { useSEO } from '../lib/seo';
import { eventImages, sejourImages } from '../lib/images';

const allEventTypes = [
  'Anniversaire', 'Fête familiale', 'Fête entre amis', 'Repas privé', 'Brunch',
  'Séjour bien-être', 'Retraite ou séjour yoga', "Séminaire d'entreprise",
  "Journée d'équipe", 'Stage photo', 'Stage créatif', 'Séjour thématique',
];

const adaptationCriteria = [
  'Le nombre de personnes', "La durée de l'évènement", 'Le lieu', 'Le budget',
  'Le thème', 'Le type de service', 'Les horaires', 'Les régimes alimentaires',
  'Les allergies ou intolérances signalées', 'Les équipements disponibles sur place',
];

const blocks = [
  {
    icon: Heart,
    title: 'Évènements privés',
    items: ['Anniversaires', 'Réunions familiales', 'Fêtes entre amis', 'Brunchs', 'Repas conviviaux', 'Buffets'],
  },
  {
    icon: Leaf,
    title: 'Séjours bien-être et yoga',
    items: ['Petits-déjeuners', 'Brunchs', 'Déjeuners', 'Dîners', 'Collations', 'Cuisine végétarienne', 'Cuisine équilibrée', 'Cuisine adaptée au programme du séjour'],
  },
  {
    icon: Briefcase,
    title: 'Entreprises, stages et séminaires',
    items: ['Pauses gourmandes', 'Buffets', "Repas d'équipe", 'Menus sur plusieurs jours', 'Repas pour stages photo', 'Repas pour ateliers ou formations', 'Cuisine adaptée au rythme du groupe'],
  },
];

const exampleFormats = [
  'Buffet maison', 'Brunch', 'Repas servi à table', 'Plats à partager',
  'Menu végétarien', 'Menu de saison', 'Pauses sucrées ou salées', 'Repas complets sur plusieurs jours',
];

export function EventsPage() {
  useSEO({
    title: 'Évènements et séjours — Fée Maison | Cuisine sur mesure | Lannion, Trégor',
    description: 'Cuisine sur mesure pour vos anniversaires, fêtes, séjours bien-être, retraites yoga, séminaires et stages. Cuisinière à domicile dans le Trégor et toute la France.',
  });

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <img
          src={eventImages[0].src}
          alt={eventImages[0].alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brown-900/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-cream-50 mb-4 animate-fade-in-up">
            Une cuisine sur mesure pour vos moments de partage
          </h1>
          <p className="text-lg text-cream-100 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Anniversaires, fêtes, séjours bien-être, séminaires, stages : chaque prestation est
            pensée sur mesure, selon vos besoins et le rythme de votre groupe.
          </p>
        </div>
      </section>

      {/* Types de prestations */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Des prestations pour chaque occasion</h2>
            <div className="divider" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {allEventTypes.map((type) => (
              <span
                key={type}
                className="px-4 py-2 bg-white border border-beige-200 rounded-full text-sm font-medium text-brown-700 shadow-sm hover:shadow-md transition-shadow"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trois blocs de prestations */}
      <section className="py-20 md:py-28 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Trois univers de prestations</h2>
            <div className="divider" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blocks.map((block) => (
              <div key={block.title} className="bg-white rounded-2xl shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-terracotta-100 text-terracotta-600 mb-4">
                  <block.icon size={24} />
                </div>
                <h3 className="font-serif text-xl text-brown-800 mb-4">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-brown-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Adaptation */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Chaque offre est adaptée à votre projet</h2>
            <div className="divider" />
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {adaptationCriteria.map((criterion) => (
              <div key={criterion} className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm">
                <MapPin size={16} className="text-sage-500 flex-shrink-0" />
                <span className="text-sm text-brown-700">{criterion}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exemples de formats */}
      <section className="py-20 bg-beige-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Exemples de formats</h2>
            <div className="divider" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {exampleFormats.map((format) => (
              <span
                key={format}
                className="px-5 py-3 bg-white border border-sage-200 rounded-xl text-sm font-medium text-brown-700 shadow-sm"
              >
                {format}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie évènements */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-8">Aperçu des prestations évènementielles</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eventImages.map((img) => (
              <div key={img.src} className="overflow-hidden rounded-xl aspect-[4/3] group">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
            {sejourImages.map((img) => (
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

      {/* CTA */}
      <section className="py-20 bg-terracotta-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Demandez un devis personnalisé</h2>
          <p className="text-cream-100 mb-8 max-w-2xl mx-auto">
            Décrivez votre projet : Catherine vous proposera un menu adapté à vos besoins, votre
            budget et votre lieu.
          </p>
          <Link to="contact" className="inline-flex items-center gap-2 bg-white text-terracotta-600 px-8 py-4 rounded-full font-semibold hover:bg-cream-100 hover:shadow-lg transition-all hover:-translate-y-0.5">
            Demander un devis <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
