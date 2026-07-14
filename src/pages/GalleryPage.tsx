import { useState } from 'react';
import { useSEO } from '../lib/seo';
import { galleryImages, type Photo } from '../lib/images';
import { Lightbox } from '../components/Lightbox';

const categoryLabels: Record<Photo['category'], string> = {
  portrait: 'Portrait',
  plats: 'Batchcooking',
  buffet: 'Buffets pour évènements',
  groupe: 'Repas de groupe',
  preparation: 'Les coulisses',
  courses: 'Courses',
  frigo: 'Conservation',
  service: 'Service',
  cheffe_privee: 'Cheffe privée',
};

const categories = ['all', ...Array.from(new Set(galleryImages.map((p) => p.category)))];

export function GalleryPage() {
  useSEO({
    title: 'Galerie — Fée Maison | Cuisinière à domicile | Lannion, Trégor',
    description: "Découvrez l'univers de Fée Maison à travers une galerie de photos : plats préparés, buffets, tables dressées, préparations, évènements et coulisses.",
  });

  const [filter, setFilter] = useState<'all' | Photo['category']>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = filter === 'all' ? galleryImages : galleryImages.filter((p) => p.category === filter);

  const openLightbox = (index: number) => setLightboxIndex(index);

  return (
    <div className="pt-20 md:pt-24">
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl md:text-5xl text-brown-800 mb-4">Galerie</h1>
            <div className="divider" />
            <p className="section-subtitle max-w-2xl mx-auto">
              Un portfolio des préparations, plats, buffets et moments de cuisine de Fée Maison.
            </p>
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-terracotta-600 text-white shadow-md'
                  : 'bg-white text-brown-700 border border-beige-200 hover:shadow-sm'
              }`}
            >
              Tout
            </button>
            {categories.slice(1).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as Photo['category'])}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === cat
                    ? 'bg-terracotta-600 text-white shadow-md'
                    : 'bg-white text-brown-700 border border-beige-200 hover:shadow-sm'
                }`}
              >
                {categoryLabels[cat as Photo['category']]}
              </button>
            ))}
          </div>

          {/* Grille */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img, i) => (
              <button
                key={img.src}
                onClick={() => openLightbox(i)}
                className="overflow-hidden rounded-xl aspect-[4/3] group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-terracotta-500 focus:ring-offset-2"
                aria-label={`Ouvrir la photo : ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        images={filtered}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
