import { useSEO } from '../lib/seo';
import { TestimonialCarousel } from '../components/TestimonialCarousel';

export function TestimonialsPage() {
  useSEO({
    title: 'Témoignages — Fée Maison | Cuisinière à domicile Lannion',
    description: 'Découvrez les retours des clients de Fée Maison sur le batchcooking à domicile et la cuisine évènementielle.',
  });

  return (
    <div className="pt-20 md:pt-24">
      <TestimonialCarousel />
    </div>
  );
}
