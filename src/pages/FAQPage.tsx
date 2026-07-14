import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useSEO } from '../lib/seo';
import { Link } from '../lib/router';

const faqItems = [
  {
    q: 'Comment fonctionne une prestation de batchcooking ?',
    a: "Catherine se déplace à votre domicile pour préparer plusieurs repas à l'avance. Après un échange sur vos besoins et préférences, elle propose ou valide un menu, organise les courses, prépare les plats chez vous, puis range, étiquette et vous donne des conseils de conservation.",
  },
  {
    q: 'Combien de repas peuvent être préparés ?',
    a: "Le nombre de repas dépend de vos besoins, de la taille de votre foyer et de la durée de la prestation. Catherine adapte les quantités pour couvrir plusieurs jours, selon ce qui vous convient le mieux.",
  },
  {
    q: 'Qui achète les ingrédients ?',
    a: "L'organisation des courses est définie selon la formule retenue. Vous pouvez confier les courses à Catherine ou les réaliser vous-même en amont de la prestation. Ce point est clarifié lors de l'échange préalable.",
  },
  {
    q: "Faut-il disposer d'un équipement particulier ?",
    a: "Un équipement de cuisine standard est généralement suffisant. Lors de l'échange préalable, Catherine vérifie avec vous le matériel disponible pour s'assurer que la prestation se déroule dans de bonnes conditions.",
  },
  {
    q: 'Les menus peuvent-ils être personnalisés ?',
    a: "Oui, chaque menu est construit en fonction de vos goûts, de vos habitudes et de vos préférences alimentaires. C'est l'un des principes fondamentaux de Fée Maison.",
  },
  {
    q: 'Prenez-vous en compte les allergies ?',
    a: "Oui. Les allergies et intolérances signalées sont prises en compte dans l'élaboration des menus. Il est important de les communiquer clairement lors de l'échange préalable.",
  },
  {
    q: "Le batchcooking peut-il ouvrir droit au crédit d'impôt ?",
    a: "Les prestations de préparation de repas réalisées au domicile peuvent, sous réserve du respect des conditions légales et administratives applicables, ouvrir droit au crédit d'impôt au titre des services à la personne. Contactez Fée Maison pour vérifier les modalités applicables à votre situation.",
  },
  {
    q: 'Intervenez-vous pour plusieurs jours ?',
    a: "Oui, Catherine peut intervenir sur plusieurs jours, notamment dans le cadre de séjours, de séminaires ou d'évènements sur plusieurs jours. La prestation est adaptée à la durée et au rythme du projet.",
  },
  {
    q: "Pouvez-vous cuisiner lors d'un séjour yoga ou bien-être ?",
    a: "Oui, c'est l'une des prestations proposées. Catherine prépare des repas équilibrés et adaptés au programme du séjour, avec une cuisine végétarienne ou selon vos besoins spécifiques.",
  },
  {
    q: 'Proposez-vous des prestations pour les entreprises ?',
    a: "Oui, Fée Maison propose des prestations pour les séminaires, journées d'équipe, stages et formations : buffets, pauses gourmandes, repas d'équipe et menus sur plusieurs jours.",
  },
  {
    q: 'Comment obtenir un devis ?',
    a: "Vous pouvez faire une demande via le formulaire de contact du site. Indiquez le type de prestation, la date, le nombre de personnes et le lieu. Catherine vous répondra pour préciser votre projet et vous transmettre un devis.",
  },
  {
    q: 'Quel acompte est demandé ?',
    a: "Les modalités d'acompte sont indiquées dans les Conditions générales de vente et confirmées lors de la validation du devis. Le cas échéant, un acompte peut être demandé pour confirmer la réservation.",
  },
  {
    q: "Que se passe-t-il en cas d'annulation ?",
    a: "Les conditions d'annulation et de report sont détaillées dans les Conditions générales de vente. Elles définissent les délais et les éventuels frais selon le moment de l'annulation.",
  },
];

function FAQItem({ item }: { item: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-brown-800 text-base md:text-lg pr-4">{item.q}</span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-terracotta-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 animate-fade-in">
          <p className="text-brown-600 leading-relaxed text-sm md:text-base">{item.a}</p>
        </div>
      )}
    </div>
  );
}

export function FAQPage() {
  useSEO({
    title: 'FAQ — Fée Maison | Questions fréquentes | Cuisinière à domicile Lannion',
    description: "Réponses aux questions fréquentes sur le batchcooking à domicile, les évènements, les allergies, le crédit d'impôt et les modalités de devis.",
  });

  return (
    <div className="pt-20 md:pt-24">
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl text-brown-800 mb-4">Questions fréquentes</h1>
            <div className="divider" />
            <p className="section-subtitle">
              Vous ne trouvez pas votre réponse ? N'hésitez pas à contacter Fée Maison directement.
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item) => (
              <FAQItem key={item.q} item={item} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="contact" className="btn-primary">
              Poser ma question
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
