import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useSEO } from '../lib/seo';
import { siteConfig } from '../config/siteConfig';

type GoogleReview = {
  image: string;
  alt: string;
};

const googleReviews: GoogleReview[] = [
  {
    image: '/images/avis-google/avis-google-01.jpg',
    alt: 'Avis Google publié pour Fée Maison',
  },
  {
    image: '/images/avis-google/avis-google-02.jpg',
    alt: 'Avis Google concernant les prestations de Fée Maison',
  },
  {
    image: '/images/avis-google/avis-google-03.jpg',
    alt: 'Témoignage client publié sur la fiche Google de Fée Maison',
  },
  {
    image: '/images/avis-google/avis-google-04.jpg',
    alt: 'Avis client publié sur Google pour Fée Maison',
  },
  {
    image: '/images/avis-google/avis-google-05.jpg',
    alt: 'Avis Google sur les services de Fée Maison',
  },
  {
    image: '/images/avis-google/avis-google-06.jpg',
    alt: 'Retour client publié sur la fiche Google de Fée Maison',
  },
];

const googleBusinessUrl =
  'https://maps.app.goo.gl/NaApVfbf6Ldjt5b68';

function GoogleReviewCard({
  review,
  priority = false,
}: {
  review: GoogleReview;
  priority?: boolean;
}) {
  return (
    <article
      className="
        flex-none
        w-[65vw]
        max-w-[300px]
        sm:w-[300px]
        lg:w-[320px]
      "
    >
      <div
        className="
          h-full
          overflow-hidden
          rounded-2xl
          border
          border-beige-100
          bg-cream-50
          p-3
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-md
        "
      >
        <img
          src={review.image}
          alt={review.alt}
          className="block h-auto w-full rounded-xl object-contain"
          loading={priority ? 'eager' : 'lazy'}
        />
      </div>
    </article>
  );
}

export function TestimonialCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const [hasOverflow, setHasOverflow] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useSEO({
    title:
      'Avis clients – Fée Maison | Cuisinière à domicile à Lannion',
    description:
      'Découvrez les avis Google des clients de Fée Maison, cuisinière à domicile à Lannion.',
  });

  /**
   * Vérifie si le contenu dépasse réellement la largeur disponible.
   * Le défilement et les flèches sont désactivés lorsqu’il n’y a
   * pas suffisamment d’avis pour remplir la largeur.
   */
  const updateOverflowState = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const contentOverflows =
      carousel.scrollWidth > carousel.clientWidth + 2;

    setHasOverflow(contentOverflows);

    if (!contentOverflows) {
      carousel.scrollTo({
        left: 0,
        behavior: 'auto',
      });
    }
  }, []);

  useEffect(() => {
    updateOverflowState();

    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      updateOverflowState();
    });

    resizeObserver.observe(carousel);

    window.addEventListener('resize', updateOverflowState);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener(
        'resize',
        updateOverflowState
      );
    };
  }, [updateOverflowState]);

  /**
   * Calcule la largeur d’une carte ainsi que l’espace entre deux cartes.
   */
  const getScrollAmount = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return 350;
    }

    const firstCard =
      carousel.querySelector<HTMLElement>('article');

    if (!firstCard) {
      return carousel.clientWidth * 0.8;
    }

    const carouselStyle = window.getComputedStyle(carousel);
    const gap = Number.parseFloat(carouselStyle.columnGap) || 20;

    return firstCard.offsetWidth + gap;
  }, []);

  const scrollToNext = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel || !hasOverflow) {
      return;
    }

    const maximumScroll =
      carousel.scrollWidth - carousel.clientWidth;

    const isNearEnd =
      carousel.scrollLeft >= maximumScroll - 10;

    if (isNearEnd) {
      carousel.scrollTo({
        left: 0,
        behavior: 'smooth',
      });

      return;
    }

    carousel.scrollBy({
      left: getScrollAmount(),
      behavior: 'smooth',
    });
  }, [getScrollAmount, hasOverflow]);

  const scrollToPrevious = useCallback(() => {
    const carousel = carouselRef.current;

    if (!carousel || !hasOverflow) {
      return;
    }

    const isAtBeginning = carousel.scrollLeft <= 10;

    if (isAtBeginning) {
      carousel.scrollTo({
        left: carousel.scrollWidth,
        behavior: 'smooth',
      });

      return;
    }

    carousel.scrollBy({
      left: -getScrollAmount(),
      behavior: 'smooth',
    });
  }, [getScrollAmount, hasOverflow]);

  /**
   * Défilement automatique uniquement lorsque les avis dépassent
   * la largeur visible. Il s’arrête au survol de la souris.
   */
  useEffect(() => {
    if (!hasOverflow || isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      scrollToNext();
    }, siteConfig.testimonialCarouselSpeed);

    return () => {
      window.clearInterval(timer);
    };
  }, [
    hasOverflow,
    isPaused,
    scrollToNext,
  ]);

  return (
    <section className="overflow-hidden bg-cream-100 py-20 md:py-28">
      <div className="mx-auto mb-12 max-w-3xl px-4 text-center">
        <p
          className="
            mb-3
            text-sm
            font-semibold
            uppercase
            tracking-[0.18em]
            text-terracotta-600
          "
        >
          Avis Google
        </p>

        <h2 className="section-title mb-4">
          Ce que disent les clients
        </h2>

        <div className="divider" />

        <p className="section-subtitle mx-auto mt-5 max-w-2xl">
          Découvrez quelques avis authentiques publiés par les
          clients de Fée Maison sur Google.
        </p>
      </div>

      <div
        className="relative mx-auto max-w-[1500px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {hasOverflow && (
          <>
            <button
              type="button"
              onClick={scrollToPrevious}
              className="
                absolute
                left-2
                top-1/2
                z-20
                flex
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-beige-200
                bg-white/95
                p-3
                text-terracotta-700
                shadow-md
                transition
                hover:bg-sage-50
                md:flex
              "
              aria-label="Afficher les avis précédents"
            >
              <ChevronLeft size={24} aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={scrollToNext}
              className="
                absolute
                right-2
                top-1/2
                z-20
                flex
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-beige-200
                bg-white/95
                p-3
                text-terracotta-700
                shadow-md
                transition
                hover:bg-sage-50
                md:flex
              "
              aria-label="Afficher les avis suivants"
            >
              <ChevronRight size={24} aria-hidden="true" />
            </button>
          </>
        )}

        <div
          ref={carouselRef}
          className="
            flex
            gap-8
            overflow-x-auto
            scroll-smooth
            px-4
            pb-5
            md:px-16
          "
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {googleReviews.map((review, index) => (
            <GoogleReviewCard
              key={review.image}
              review={review}
              priority={index === 0}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 px-4 text-center">
        <a
          href={googleBusinessUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-full
            bg-sage-600
            px-7
            py-3.5
            font-semibold
            text-white
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-sage-700
            hover:shadow-md
            focus:outline-none
            focus:ring-2
            focus:ring-terracotta-500
            focus:ring-offset-2
          "
          aria-label="Voir tous les avis de Fée Maison sur Google"
        >
          Voir tous les avis sur Google
          <ExternalLink size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export { TestimonialCarousel as TestimonialsPage };