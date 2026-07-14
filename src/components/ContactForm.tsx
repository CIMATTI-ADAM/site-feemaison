import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck } from 'lucide-react';
import { useSEO } from '../lib/seo';
import { siteConfig } from '../config/siteConfig';
import { Link } from '../lib/router';

type FormData = {
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  typeDemande: string;
  sousType: string;
  dateSouhaitee: string;
  nombrePersonnes: string;
  lieu: string;
  message: string;
  consentement: boolean;
  // Anti-spam : honeypot
  website: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialData: FormData = {
  nom: '',
  prenom: '',
  telephone: '',
  email: '',
  typeDemande: '',
  sousType: '',
  dateSouhaitee: '',
  nombrePersonnes: '',
  lieu: '',
  message: '',
  consentement: false,
  website: '',
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/;

export function ContactForm() {
  useSEO({
    title: 'Contact — Fée Maison | Demande de devis | Cuisinière à domicile Lannion',
    description: 'Contactez Fée Maison pour une demande de batchcooking à domicile ou un devis évènementiel. Catherine vous répond dans les meilleurs délais.',
  });

  const [data, setData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const update = (field: keyof FormData, value: string | boolean) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!data.nom.trim()) e.nom = 'Le nom est obligatoire.';
    if (!data.telephone.trim()) {
      e.telephone = 'Le numéro de téléphone est obligatoire.';
    } else if (!phoneRegex.test(data.telephone.trim())) {
      e.telephone = 'Veuillez saisir un numéro de téléphone valide (ex: 06 84 88 61 11).';
    }
    if (!data.email.trim()) {
      e.email = "L'adresse e-mail est obligatoire.";
    } else if (!emailRegex.test(data.email.trim())) {
      e.email = "Veuillez saisir une adresse e-mail valide.";
    }
    if (!data.typeDemande) e.typeDemande = 'Veuillez sélectionner un type de demande.';
    if (data.typeDemande === 'Évènementiel' && !data.sousType) {
      e.sousType = "Veuillez préciser le type d'évènementiel.";
    }
    if (!data.dateSouhaitee) e.dateSouhaitee = 'La date souhaitée est obligatoire.';
    if (!data.nombrePersonnes.trim()) e.nombrePersonnes = 'Le nombre de personnes est obligatoire.';
    if (!data.lieu.trim()) e.lieu = 'La ville ou le lieu de la prestation est obligatoire.';
    if (!data.consentement) e.consentement = "Vous devez accepter la politique de confidentialité pour envoyer votre message.";
    return e;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Anti-spam honeypot — si le champ caché est rempli, c'est un bot
    if (data.website) return;

    // Protection contre les doubles envois
    if (status === 'submitting') return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstError = document.querySelector('[aria-invalid="true"]');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setStatus('submitting');
    setErrors({});
    setErrorMessage('');

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          nom: data.nom,
          prenom: data.prenom,
          telephone: data.telephone,
          email: data.email,
          typeDemande: data.typeDemande,
          sousType: data.sousType || null,
          dateSouhaitee: data.dateSouhaitee,
          nombrePersonnes: data.nombrePersonnes,
          lieu: data.lieu,
          message: data.message,
        }),
      });

      if (!response.ok) {
        const errBody = await response.json().catch(() => ({}));
        throw new Error(errBody.error || `Erreur ${response.status}`);
      }

      setStatus('success');
      setData(initialData);
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.',
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="pt-20 md:pt-24">
        <section className="py-20 md:py-32 bg-cream-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sage-100 text-sage-600 mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h1 className="font-serif text-3xl md:text-4xl text-brown-800 mb-4">
              Merci pour votre message
            </h1>
            <p className="text-lg text-brown-600 mb-8">
              Merci pour votre message. {siteConfig.businessName} vous répondra dans les meilleurs
              délais.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="btn-secondary"
            >
              Envoyer un autre message
            </button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="pt-20 md:pt-24">
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="font-serif text-4xl md:text-5xl text-brown-800 mb-4">Contactez Fée Maison</h1>
            <div className="divider" />
            <p className="section-subtitle">
              Décrivez votre projet : Catherine vous répond pour en discuter.
            </p>
          </div>

          {/* Coordonnées rapides */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="w-10 h-10 rounded-full bg-terracotta-100 text-terracotta-600 flex items-center justify-center text-sm font-bold">Tél</span>
              <span className="text-brown-700 font-medium">{siteConfig.contact.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="w-10 h-10 rounded-full bg-sage-100 text-sage-600 flex items-center justify-center text-sm font-bold">@</span>
              <span className="text-brown-700 font-medium text-sm break-all">{siteConfig.contact.email}</span>
            </a>
          </div>

          <form onSubmit={handleSubmit} noValidate className="bg-white rounded-2xl shadow-sm p-6 md:p-8 space-y-5">
            {/* Champ honeypot caché — anti-spam */}
            <div className="hidden" aria-hidden="true">
              <label>
                Ne pas remplir ce champ
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={data.website}
                  onChange={(e) => update('website', e.target.value)}
                />
              </label>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="nom" className="label-field">Nom <span className="text-terracotta-500">*</span></label>
                <input
                  id="nom"
                  type="text"
                  value={data.nom}
                  onChange={(e) => update('nom', e.target.value)}
                  className={`input-field ${errors.nom ? 'border-terracotta-500' : ''}`}
                  aria-invalid={!!errors.nom}
                  aria-describedby={errors.nom ? 'error-nom' : undefined}
                />
                {errors.nom && <p id="error-nom" className="mt-1 text-sm text-terracotta-600">{errors.nom}</p>}
              </div>
              <div>
                <label htmlFor="prenom" className="label-field">Prénom</label>
                <input
                  id="prenom"
                  type="text"
                  value={data.prenom}
                  onChange={(e) => update('prenom', e.target.value)}
                  className="input-field"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="telephone" className="label-field">Numéro de téléphone <span className="text-terracotta-500">*</span></label>
                <input
                  id="telephone"
                  type="tel"
                  value={data.telephone}
                  onChange={(e) => update('telephone', e.target.value)}
                  placeholder="06 84 88 61 11"
                  className={`input-field ${errors.telephone ? 'border-terracotta-500' : ''}`}
                  aria-invalid={!!errors.telephone}
                  aria-describedby={errors.telephone ? 'error-telephone' : undefined}
                />
                {errors.telephone && <p id="error-telephone" className="mt-1 text-sm text-terracotta-600">{errors.telephone}</p>}
              </div>
              <div>
                <label htmlFor="email" className="label-field">Adresse e-mail <span className="text-terracotta-500">*</span></label>
                <input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => update('email', e.target.value)}
                  placeholder="vous@exemple.com"
                  className={`input-field ${errors.email ? 'border-terracotta-500' : ''}`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'error-email' : undefined}
                />
                {errors.email && <p id="error-email" className="mt-1 text-sm text-terracotta-600">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="typeDemande" className="label-field">Type de demande <span className="text-terracotta-500">*</span></label>
              <select
                id="typeDemande"
                value={data.typeDemande}
                onChange={(e) => update('typeDemande', e.target.value)}
                className={`input-field ${errors.typeDemande ? 'border-terracotta-500' : ''}`}
                aria-invalid={!!errors.typeDemande}
              >
                <option value="">Sélectionnez un type de demande</option>
                <option value="Batchcooking">Batchcooking</option>
                <option value="Évènementiel">Évènementiel</option>
              </select>
              {errors.typeDemande && <p className="mt-1 text-sm text-terracotta-600">{errors.typeDemande}</p>}
            </div>

            {data.typeDemande === 'Évènementiel' && (
              <div className="animate-fade-in">
                <label htmlFor="sousType" className="label-field">Type d'évènementiel <span className="text-terracotta-500">*</span></label>
                <select
                  id="sousType"
                  value={data.sousType}
                  onChange={(e) => update('sousType', e.target.value)}
                  className={`input-field ${errors.sousType ? 'border-terracotta-500' : ''}`}
                  aria-invalid={!!errors.sousType}
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="Ponctuel">Ponctuel</option>
                  <option value="Sur plusieurs jours">Sur plusieurs jours</option>
                </select>
                {errors.sousType && <p className="mt-1 text-sm text-terracotta-600">{errors.sousType}</p>}
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="dateSouhaitee" className="label-field">Date souhaitée <span className="text-terracotta-500">*</span></label>
                <input
                  id="dateSouhaitee"
                  type="date"
                  value={data.dateSouhaitee}
                  onChange={(e) => update('dateSouhaitee', e.target.value)}
                  className={`input-field ${errors.dateSouhaitee ? 'border-terracotta-500' : ''}`}
                  aria-invalid={!!errors.dateSouhaitee}
                />
                {errors.dateSouhaitee && <p className="mt-1 text-sm text-terracotta-600">{errors.dateSouhaitee}</p>}
              </div>
              <div>
                <label htmlFor="nombrePersonnes" className="label-field">Nombre de personnes <span className="text-terracotta-500">*</span></label>
                <input
                  id="nombrePersonnes"
                  type="number"
                  min="1"
                  value={data.nombrePersonnes}
                  onChange={(e) => update('nombrePersonnes', e.target.value)}
                  placeholder="ex: 4"
                  className={`input-field ${errors.nombrePersonnes ? 'border-terracotta-500' : ''}`}
                  aria-invalid={!!errors.nombrePersonnes}
                />
                {errors.nombrePersonnes && <p className="mt-1 text-sm text-terracotta-600">{errors.nombrePersonnes}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="lieu" className="label-field">Ville ou lieu de la prestation <span className="text-terracotta-500">*</span></label>
              <input
                id="lieu"
                type="text"
                value={data.lieu}
                onChange={(e) => update('lieu', e.target.value)}
                placeholder="ex: Lannion"
                className={`input-field ${errors.lieu ? 'border-terracotta-500' : ''}`}
                aria-invalid={!!errors.lieu}
              />
              {errors.lieu && <p className="mt-1 text-sm text-terracotta-600">{errors.lieu}</p>}
            </div>

            <div>
              <label htmlFor="message" className="label-field">Votre message</label>
              <textarea
                id="message"
                rows={4}
                value={data.message}
                onChange={(e) => update('message', e.target.value)}
                placeholder="Décrivez votre projet, vos besoins, vos préférences alimentaires..."
                className="input-field resize-none"
              />
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={data.consentement}
                  onChange={(e) => update('consentement', e.target.checked)}
                  className="mt-1 w-5 h-5 accent-terracotta-500 flex-shrink-0"
                  aria-invalid={!!errors.consentement}
                />
                <span className="text-sm text-brown-700 leading-relaxed">
                  J'accepte que les informations saisies soient utilisées par {siteConfig.businessName} pour
                  répondre à ma demande. Voir la{' '}
                  <Link to="politique-confidentialite" className="text-terracotta-600 font-semibold underline hover:text-terracotta-700">
                    politique de confidentialité
                  </Link>
                  .
                </span>
              </label>
              {errors.consentement && <p className="mt-1 text-sm text-terracotta-600">{errors.consentement}</p>}
            </div>

            {status === 'error' && (
              <div className="flex items-start gap-3 p-4 bg-terracotta-50 border border-terracotta-200 rounded-xl animate-fade-in">
                <AlertCircle size={20} className="text-terracotta-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-terracotta-700">{errorMessage}</p>
              </div>
            )}

            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="text-xs text-beige-500 flex items-center gap-1.5">
                <ShieldCheck size={14} /> Vos données sont protégées
              </p>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>Envoi en cours... <Loader2 size={18} className="animate-spin" /></>
                ) : (
                  <>Envoyer mon message <Send size={16} /></>
                )}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
