import { useSEO } from '../lib/seo';
import { siteConfig } from '../config/siteConfig';
import { LegalLayout } from '../components/LegalLayout';
import { Link } from '../lib/router';

export function MediatorPage() {
  useSEO({
    title: 'Médiateur de la consommation — Fée Maison',
    description: 'Procédure de règlement amiable des litiges et coordonnées du médiateur de la consommation pour Fée Maison.',
  });

  const { businessName, contact, mediateurConsommation } = siteConfig;

  return (
    <LegalLayout title="Médiateur de la consommation">
      <section>
        <h2>Principe de la médiation de la consommation</h2>
        <p>
          Conformément aux dispositions du Code de la consommation, en cas de litige non résolu
          après une réclamation écrite adressée à {businessName}, le consommateur peut recourir
          gratuitement à un médiateur de la consommation. La médiation est un processus amiable
          permettant de trouver une solution équitable sans recours au tribunal.
        </p>
      </section>

      <section>
        <h2>Procédure de règlement amiable des litiges</h2>
        <p>
          Avant de saisir le médiateur, nous vous invitons à :
        </p>
        <ul>
          <li>Adresser une réclamation écrite à {businessName} par e-mail ({contact.email}) ou par courrier.</li>
          <li>Décrire précisément le litige et joindre les éléments justificatifs.</li>
          <li>Accorder un délai raisonnable pour la réponse.</li>
        </ul>
        <p>
          Si la réclamation n'aboutit pas à une résolution satisfaisante, vous pouvez alors saisir
          le médiateur de la consommation.
        </p>
      </section>

      <section>
        <h2>Coordonnées du médiateur</h2>
        <div className="bg-beige-50 border border-beige-200 rounded-xl p-5 space-y-3">
          <div><strong>Nom du médiateur : </strong>{mediateurConsommation.nom}</div>
          <div><strong>Site internet : </strong>{mediateurConsommation.siteInternet}</div>
          <div><strong>Adresse postale : </strong>{mediateurConsommation.adressePostale}</div>
          {mediateurConsommation.adresseEmail && mediateurConsommation.adresseEmail !== "À compléter" && (
            <div><strong>Adresse e-mail : </strong>{mediateurConsommation.adresseEmail}</div>
          )}
          <div><strong>Référence / numéro d'agrément : </strong>{mediateurConsommation.referenceAgrement}</div>
        </div>
      </section>

      <section>
        <h2>Conditions de saisine</h2>
        <p>{mediateurConsommation.conditionsSaisine}</p>
      </section>

      <section>
        <h2>Informations complémentaires</h2>
        <p>
          Les coordonnées du médiateur sont également mentionnées dans les{' '}
          <Link to="cgv">Conditions générales de vente</Link> et dans les{' '}
          <Link to="mentions-legales">Mentions légales</Link>.
        </p>
      </section>
    </LegalLayout>
  );
}
