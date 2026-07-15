import { ArrowRight, Clock, Heart, Leaf, Users, Sparkles, CookingPot, ChefHat } from 'lucide-react';
import { Link } from '../lib/router';
import { useSEO } from '../lib/seo';
import { siteConfig } from '../config/siteConfig';
import { heroImages, serviceCardImages } from '../lib/images';
import { TestimonialCarousel } from '../components/TestimonialCarousel';

const values = [
  { icon: Leaf, title: 'Produits frais et de saison', text: 'Des ingrédients choisis avec soin, privilégiant les producteurs locaux et le circuit court.' },
  { icon: Heart, title: 'Cuisine faite avec soin', text: 'Chaque plat est préparé avec attention, dans le respect des produits et des goûts de chacun.' },
  { icon: Users, title: 'Convivialité et partage', text: 'La cuisine comme moment de rencontre, de warmth et de plaisir partagé.' },
  { icon: Clock, title: 'Simplicité du quotidien', text: 'Vous gagner du temps et alléger votre organisation, sans compromis sur la qualité.' },
];

export function HomePage() {
  useSEO({
    title: `${siteConfig.businessName} — Cuisinière à domicile | Batchcooking & Évènements | Lannion, Trégor`,
    description: siteConfig.seo.defaultDescription,
  });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImages[0].src}
            alt={heroImages[0].alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown-900/75 via-brown-900/50 to-brown-900/20" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <p className="text-terracotta-300 font-sans font-semibold tracking-wide text-sm md:text-base mb-4 animate-fade-in-up">
              {siteConfig.businessName} — Cuisinière à domicile à {siteConfig.contact.city}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-50 leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {siteConfig.tagline}
            </h1>
            <p className="text-lg md:text-xl text-cream-100 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {siteConfig.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link to="batchcooking" className="btn-primary">
                Découvrir le batchcooking <ArrowRight size={18} />
              </Link>
              <Link to="evenements" className="btn-outline-cream">
                Organiser un évènement ou un séjour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Présentation Catherine */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-sage-100 text-sage-700 rounded-full text-sm font-semibold">
              <Sparkles size={16} /> À votre service
            </span>
          </div>
          <h2 className="section-title mb-6">Derrière Fée Maison, il y a Catherine...</h2>
          <div className="divider" />
          <p className="text-lg text-brown-600 leading-relaxed max-w-3xl mx-auto">
            Catherine imagine et prépare une cuisine familiale, gourmande et
            adaptée à chaque besoin. Menus du quotidien, anniversaires, séjours bien-être ou
            séminaires : chaque prestation est pensée sur mesure.
          </p>
          <div className="mt-8">
            <Link to="a-propos" className="inline-flex items-center gap-2 text-terracotta-600 font-semibold hover:text-terracotta-700 transition-colors">
              En savoir plus <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Deux façons de vous accompagner */}
      <section className="py-20 md:py-28 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Deux façons de vous accompagner</h2>
            <div className="divider" />
            <p className="section-subtitle max-w-2xl mx-auto">
              Que ce soit pour votre quotidien ou pour vos moments d'exception, Fée Maison s'adapte à
              vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Carte Batchcooking */}
            <Link to="batchcooking" className="group card overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={serviceCardImages.batchcooking.src}
                  alt={serviceCardImages.batchcooking.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-cream-50">
                  <CookingPot
                    size={36}
                    className="text-white/90"
                    />
                  
                  <span className="font-serif text-lg">Batchcooking à domicile</span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-brown-600 leading-relaxed mb-5">
                  Des repas préparés directement chez vous pour gagner du temps, alléger votre
                  quotidien et profiter d'une cuisine maison toute la semaine.
                </p>
                <span className="inline-flex items-center gap-2 text-terracotta-600 font-semibold group-hover:gap-3 transition-all">
                  Découvrir le batchcooking <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Carte Évènements */}
            <Link to="evenements" className="group card overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={serviceCardImages.evenements.src}
                  alt={serviceCardImages.evenements.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-cream-50">
                  <Users size={20} />
                  <span className="font-serif text-lg">Évènements et séjours</span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-brown-600 leading-relaxed mb-5">
                  Des menus sur mesure pour vos anniversaires, fêtes amicales et familiales, mais aussi séjours bien-être, retraites
                  yoga, séminaires et stages.
                </p>
                <span className="inline-flex items-center gap-2 text-terracotta-600 font-semibold group-hover:gap-3 transition-all">
                  Découvrir les prestations <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Les valeurs de Fée Maison</h2>
            <div className="divider" />
            <p className="section-subtitle max-w-2xl mx-auto">
              Une cuisine guidée par l'écoute, le respect des produits et le plaisir de partager.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sage-100 text-sage-600 mb-4">
                  <value.icon size={24} />
                </div>
                <h3 className="font-serif text-lg text-brown-800 mb-2">{value.title}</h3>
                <p className="text-sm text-brown-600 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <TestimonialCarousel />

      {/* Photos en aperçu */}
      <section className="py-20 md:py-28 bg-beige-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Un aperçu de l'univers de Fée Maison</h2>
            <div className="divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { src: '/images/photosCC/Chef-assiette_01.jpeg', alt: 'Assiette raffinée et généreuse, cuisine maison' },
              { src: '/images/photosCC/batch-preparations_05.jpeg', alt: 'Préparation culinaire à domicile avec des produits frais' },
              { src: '/images/photosCC/Event-buffet_02.jpeg', alt: 'Buffet convivial pour un évènement' },
              { src: '/images/photosCC/Event-repas_groupe_02.jpeg', alt: 'Repas de groupe chaleureux' },
            ].map((img) => (
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
          <div className="text-center mt-8">
            <Link to="galerie" className="btn-secondary">
              Voir la galerie complète <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="py-20 md:py-28 bg-terracotta-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Parlons de votre projet</h2>
          <p className="text-lg text-cream-100 mb-8 max-w-2xl mx-auto">
            Que vous souhaitiez alléger votre quotidien ou organiser un moment de partage, Catherine
            vous répond avec plaisir.
          </p>
          <Link to="contact" className="inline-flex items-center gap-2 bg-white text-terracotta-600 px-8 py-4 rounded-full font-semibold text-base hover:bg-cream-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
            Contacter Fée Maison <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
