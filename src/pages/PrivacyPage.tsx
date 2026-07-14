import { useSEO } from '../lib/seo';
import { siteConfig } from '../config/siteConfig';
import { LegalLayout } from '../components/LegalLayout';
import { Link } from '../lib/router';

export function PrivacyPage() {
  useSEO({
    title: 'Politique de confidentialité — Fée Maison',
    description: 'Politique de confidentialité de Fée Maison : données collectées, finalité, base légale, durée de conservation, droits RGPD.',
  });

  const { businessName, professionalName, contact, rgpd } = siteConfig;

  return (
    <LegalLayout title="Politique de confidentialité">
      <section>
        <h2>Identité du responsable du traitement</h2>
        <p>
          Le responsable du traitement des données personnelles est {businessName}, représenté par{' '}
          {professionalName}. Pour toute question relative à la protection de vos données, vous
          pouvez contacter : {rgpd.droitsContact}.
        </p>
      </section>

      <section>
        <h2>Coordonnées de contact</h2>
        <p>
          {businessName}<br />
          {contact.address}<br />
          E-mail : {contact.email}<br />
          Téléphone : {contact.phone}
        </p>
      </section>

      <section>
        <h2>Données collectées</h2>
        <p>
          Le site collecte les données suivantes via le formulaire de contact :
        </p>
        <ul>
          <li>Nom et prénom</li>
          <li>Numéro de téléphone</li>
          <li>Adresse e-mail</li>
          <li>Type de demande (batchcooking ou évènementiel)</li>
          <li>Date souhaitée, nombre de personnes, lieu</li>
          <li>Message libre</li>
        </ul>
        <p>
          Aucune donnée n'est collectée sans votre consentement explicite, hormis les cookies
          strictement nécessaires au fonctionnement du site.
        </p>
      </section>

      <section>
        <h2>Finalité de la collecte</h2>
        <p>
          Les données collectées via le formulaire de contact sont utilisées uniquement pour
          répondre à votre demande, vous adresser un devis et organiser la prestation demandée.
        </p>
      </section>

      <section>
        <h2>Base légale du traitement</h2>
        <p>
          Le traitement est fondé sur votre consentement, exprimé par la case obligatoire du
          formulaire de contact. Le consentement peut être retiré à tout moment.
        </p>
      </section>

      <section>
        <h2>Durée de conservation</h2>
        <p>
          Les données issues du formulaire de contact sont conservées pendant{' '}
          <strong>{rgpd.dureeConservationDonnees}</strong>. Au-delà de cette durée, elles sont
          supprimées ou anonymisées.
        </p>
      </section>

      <section>
        <h2>Destinataires des données</h2>
        <p>
          Les données sont destinées exclusivement à {businessName} ({professionalName}) pour le
          traitement de votre demande. Elles ne sont jamais vendues ni cédées à des tiers à des fins
          commerciales.
        </p>
      </section>

      <section>
        <h2>Vos droits</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des
          droits suivants :
        </p>
        <ul>
          <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles.</li>
          <li><strong>Droit de rectification :</strong> corriger des données inexactes ou incomplètes.</li>
          <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données.</li>
          <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données.</li>
          <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données.</li>
          <li><strong>Droit d'introduire une réclamation :</strong> auprès de la CNIL (voir ci-dessous).</li>
        </ul>
      </section>

      <section>
        <h2>Procédure pour exercer vos droits</h2>
        <p>
          Pour exercer vos droits, vous pouvez contacter {businessName} par e-mail à l'adresse{' '}
          {rgpd.droitsContact} en précisant votre demande et en joignant une pièce d'identité si
          nécessaire pour vérifier votre identité.
        </p>
        <p>
          Vous pouvez également introduire une réclamation auprès de la Commission Nationale de
          l'Informatique et des Libertés (CNIL) :
        </p>
        <ul>
          <li>Site internet : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a></li>
          <li>Adresse postale : 3 place de Fontenoy — TSA 80715 — 75334 PARIS CEDEX 07</li>
        </ul>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          Le site utilise un bandeau de gestion des cookies. Les cookies strictement nécessaires au
          fonctionnement du site sont activés par défaut. Les cookies d'analyse et de marketing ne
          sont activés qu'après votre consentement. Vous pouvez modifier vos préférences à tout
          moment via le lien « Gérer mes cookies » dans le{' '}
          <Link to="cookies">pied de page</Link>.
        </p>
      </section>
    </LegalLayout>
  );
}
