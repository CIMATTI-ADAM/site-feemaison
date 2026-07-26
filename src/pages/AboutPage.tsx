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
                Avec Fée Maison, Catherine cuisine pour votre quotidien ou les moments importants. 
                Son approche repose sur l'écoute, l'adaptation
                et le plaisir de préparer des plats simples, généreux et adaptés à chaque occasion.
              </p>
              <p className="text-brown-600 leading-relaxed mb-4">
                Chaque prestation est pensée comme un accompagnement personnalisé : Catherine prend
                le temps d'échanger avec vous pour comprendre vos habitudes, vos préférences et vos
                contraintes, afin de vous proposer une cuisine qui vous ressemble.
              </p>
              <p className="text-brown-600 leading-relaxed">
                I
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
              <h3 className="font-serif text-lg text-brown-800 mb-3">Un parcours atypique, guidé par la passion</h3>
              <p className="text-brown-600 text-sm leading-relaxed">
                Rien ne me destinait à devenir cuisinière !
                Des études en informatique, 20 ans dans les télécoms... Cela m'a apporté le sens de l'organisation, de la rigueur, de l'écoute et de l'anticipation.
                Mais cuisiner a toujours été ma façon de prendre soin des autres, de créer du lien et de partager.
                Et comme une passion ne disparaît jamais vraiment, j'ai ouvert mon propre salon de thé et tarterie. 
                De la création des recettes à la fabrication, de l'accueil des clients à la gestion de l'entreprise, j'y ai appris qu'un repas peut laisser un souvenir durable lorsqu'il est préparé avec sincérité.
                Aujourd'hui, j'ai décidé de continuer à cuisiner, et ce au plus près des gens. 
                J'ai créé Fée Maison pour être au service de vos repas du quotidien comme de vos moments de fête.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
              <h3 className="font-serif text-lg text-brown-800 mb-3">Une cuisine qui commence bien avant les fourneaux</h3>
              <p className="text-brown-600 text-sm leading-relaxed">
                Pour moi, cuisiner ne consiste pas seulement à assembler des ingrédients.
                Chaque plat commence par le choix des produits. 
                Je privilégie autant que possible des producteurs locaux, des produits de saison et des ingrédients issus d'une agriculture respectueuse des hommes, des animaux et de la nature. 
                J'aime connaître les personnes qui cultivent, élèvent ou fabriquent ce que je cuisine. 
                
                Mon rôle est de prolonger leur travail dans votre assiette, en respectant les produits et en les sublimant avec une cuisine généreuse, simple et pleine de saveurs.
                Que ce soit pour du batch cooking, un anniversaire ou une réunion de famille, je conçois chaque prestation sur mesure, en tenant compte de vos envies, de vos habitudes et des personnes qui partageront ce repas.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
              <h3 className="font-serif text-lg text-brown-800 mb-3">Une philosophie : cuisiner avec le cœur</h3>
              <p className="text-brown-600 text-sm leading-relaxed">
                Je suis convaincue que la cuisine est l'une des plus belles façons de transmettre de l'attention.
                Un repas peut rassembler une famille, créer des souvenirs entre amis, célébrer un événement ou simplement alléger le quotidien. 
                Derrière chaque plat que je prépare, il y a le désir de faire plaisir, de prendre soin et de créer un moment de partage.
                Et au delà d'un bon repas, je souhaite transmettre une émotion : celle d'une cuisine sincère, généreuse et profondément humaine.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm">
              <h3 className="font-serif text-lg text-brown-800 mb-3">Territoire d'intervention</h3>
              <p className="text-brown-600 text-sm leading-relaxed flex items-start gap-2">
                Installée à Lannion, j'interviens dans le Trégor pour vous soulager du quotidien.
                Pour les évènements et séminaires, je peux me déplacer dans les Côtes d'Armor et plus
                largement en France selon les demandes.
                
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* à la place de "Installée..."
                <MapPin size={18} className="text-terracotta-500 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.interventionZone}.</span> */
      }

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
