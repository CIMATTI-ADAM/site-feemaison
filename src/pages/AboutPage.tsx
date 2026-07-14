import { Heart, Leaf, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { Link } from '../lib/router';
import { useSEO } from '../lib/seo';
import { siteConfig } from '../config/siteConfig';
import { aboutImages } from '../lib/images';

const engagements = [
  { icon: Heart, title: 'Écoute et adaptation', text: 'Chaque menu est construit en fonction de vos goûts, de vos besoins et de votre rythme.' },
  { icon: Leaf, title: 'Produits frais et de saison', text: "Une cuisine qui suit les saisons et privilégie les produits frais et locaux quand c'est possible." },
  { icon: Sparkles, title: 'Soin du détail', text: 'De la sélection des ingrédients à la présentation des plats, chaque étape est pensée avec attention.' },
];

export function AboutPage() {
  useSEO({
    title: 'À propos — Catherine, cuisinière à domicile | Fée Maison | Lannion',
    description: 'Découvrez Catherine, cuisinière à domicile à Lannion. Son parcours, son approche de la cuisine maison et ses engagements au service de votre quotidien et de vos évènements.',
  });

  return (
    <div className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center overflow-hidden">
        <img
          src={aboutImages[0].src}
          alt={aboutImages[0].alt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brown-900/65" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-cream-50 animate-fade-in-up">
            Catherine, cuisinière à domicile
          </h1>
        </div>
      </section>

      {/* Présentation */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="section-title mb-6">L'histoire de Fée Maison</h2>
              <div className="divider-left" />
              <p className="text-brown-600 leading-relaxed mb-4 text-base md:text-lg">
                Avec Fée Maison, Catherine met la cuisine maison à votre service, pour votre
                quotidien ou les moments importants. Son approche repose sur l'écoute, l'adaptation
                et le plaisir de préparer des plats simples, généreux et adaptés à chaque occasion.
              </p>
              <p className="text-brown-600 leading-relaxed mb-4">
                Chaque prestation est pensée comme un accompagnement personnalisé : Catherine prend
                le temps d'échanger avec vous pour comprendre vos habitudes, vos préférences et vos
                contraintes, afin de vous proposer une cuisine qui vous ressemble.
              </p>
              <p className="text-brown-600 leading-relaxed">
                Installée à Lannion, Catherine intervient dans le Trégor, les Côtes d'Armor et plus
                largement en France selon les demandes.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="overflow-hidden rounded-2xl shadow-lg aspect-[4/5]">
                <img
                  src={aboutImages[1].src}
                  alt={aboutImages[1].alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours et approche */}
      <section className="py-20 md:py-28 bg-beige-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Parcours et approche</h2>
            <div className="divider" />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
              <h3 className="font-serif text-lg text-brown-800 mb-3">Parcours</h3>
              <p className="text-brown-600 text-sm leading-relaxed">
                Information à compléter — Le parcours professionnel de Catherine sera détaillé ici
                : formation, expériences culinaires, rencontres marquantes et cheminements qui l'ont
                conduite à créer Fée Maison.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
              <h3 className="font-serif text-lg text-brown-800 mb-3">Approche de la cuisine</h3>
              <p className="text-brown-600 text-sm leading-relaxed">
                Information à compléter — L'approche culinaire de Catherine sera présentée ici :
                rapport aux produits, inspiration, cuisine de saison, équilibre entre simplicité et
                gourmandise.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
              <h3 className="font-serif text-lg text-brown-800 mb-3">Philosophie et valeurs</h3>
              <p className="text-brown-600 text-sm leading-relaxed">
                Information à compléter — La philosophie de Fée Maison sera développée ici : le sens
                du service, le plaisir de bien faire, le lien entre cuisine et bien-être, le respect
                des produits et des personnes.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
              <h3 className="font-serif text-lg text-brown-800 mb-3">Territoire d'intervention</h3>
              <p className="text-brown-600 text-sm leading-relaxed flex items-start gap-2">
                <MapPin size={18} className="text-terracotta-500 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.interventionZone}.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagements */}
      <section className="py-20 md:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Les engagements de Fée Maison</h2>
            <div className="divider" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {engagements.map((e) => (
              <div key={e.title} className="bg-white p-6 rounded-2xl shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sage-100 text-sage-600 mb-4">
                  <e.icon size={24} />
                </div>
                <h3 className="font-serif text-lg text-brown-800 mb-2">{e.title}</h3>
                <p className="text-sm text-brown-600 leading-relaxed">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-terracotta-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Envie d'échanger avec Catherine ?</h2>
          <p className="text-cream-100 mb-8">
            Contactez Fée Maison pour discuter de votre projet ou de vos besoins.
          </p>
          <Link to="contact" className="inline-flex items-center gap-2 bg-white text-terracotta-600 px-8 py-4 rounded-full font-semibold hover:bg-cream-100 hover:shadow-lg transition-all hover:-translate-y-0.5">
            Contacter Fée Maison <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
