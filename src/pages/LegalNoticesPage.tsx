import { useSEO } from '../lib/seo';
import { siteConfig } from '../config/siteConfig';
import { LegalLayout } from '../components/LegalLayout';

export function LegalNoticesPage() {
  useSEO({
    title: 'Mentions légales — Fée Maison',
    description: 'Mentions légales du site Fée Maison : éditeur, hébergeur, propriété intellectuelle, responsable du traitement des données.',
  });

  const { legal, mediateurConsommation, businessName, professionalName, contact } = siteConfig;

  return (
    <LegalLayout title="Mentions légales" warning={siteConfig.legalWarning}>
      <section>
        <h2>Éditeur du site</h2>
        <dl className="space-y-2 mt-3">
          <div><dt className="font-semibold inline">Nom commercial : </dt><dd className="inline">{businessName}</dd></div>
          <div><dt className="font-semibold inline">Nom de l'entrepreneuse : </dt><dd className="inline">{professionalName}</dd></div>
          <div><dt className="font-semibold inline">Statut juridique : </dt><dd className="inline">{legal.legalStatus}</dd></div>
          <div><dt className="font-semibold inline">Adresse : </dt><dd className="inline">{contact.address}</dd></div>
          <div><dt className="font-semibold inline">Numéro SIRET : </dt><dd className="inline">{legal.siret}</dd></div>
          <div><dt className="font-semibold inline">Numéro de TVA intracommunautaire : </dt><dd className="inline">{legal.vatNumber}</dd></div>
          <div><dt className="font-semibold inline">Adresse e-mail : </dt><dd className="inline">{contact.email}</dd></div>
          <div><dt className="font-semibold inline">Numéro de téléphone : </dt><dd className="inline">{contact.phone}</dd></div>
          <div><dt className="font-semibold inline">Directrice de publication : </dt><dd className="inline">{legal.publicationDirector}</dd></div>
        </dl>
      </section>

      <section>
        <h2>Hébergeur du site</h2>
        <dl className="space-y-2 mt-3">
          <div><dt className="font-semibold inline">Nom de l'hébergeur : </dt><dd className="inline">{legal.host.name}</dd></div>
          <div><dt className="font-semibold inline">Adresse : </dt><dd className="inline">{legal.host.address}</dd></div>
          <div><dt className="font-semibold inline">Ville : </dt><dd className="inline">{legal.host.city}</dd></div>
          <div><dt className="font-semibold inline">Pays : </dt><dd className="inline">{legal.host.country}</dd></div>
          <div><dt className="font-semibold inline">Site internet : </dt><dd className="inline">{legal.host.website}</dd></div>
        </dl>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble des contenus présents sur ce site (textes, photographies, logo, mise en page)
          est la propriété de {businessName}, sauf mention contraire. Toute reproduction, représentation,
          modification, publication ou adaptation, totale ou partielle, des éléments du site, quel
          que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.
        </p>
      </section>

      <section>
        <h2>Responsabilité</h2>
        <p>
          {businessName} s'efforce de fournir sur ce site des informations aussi précises que
          possible. Toutefois, {businessName} ne pourra être tenue responsable des omissions, des
          inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait
          des tiers partenaires qui lui fournissent ces informations.
        </p>
        <p>
          Les informations fournies sur ce site sont à titre indicatif et ne sauraient dispenser
          l'utilisateur d'une analyse complémentaire et personnalisée.
        </p>
      </section>

      <section>
        <h2>Traitement des données personnelles</h2>
        <p>
          Le traitement des données personnelles est décrit dans la{' '}
          <a href="#/politique-confidentialite" className="text-terracotta-600 font-semibold underline">politique de confidentialité</a>{' '}
          accessible sur ce site.
        </p>
      </section>

      <section>
        <h2>Médiation de la consommation</h2>
        <p>
          Conformément aux dispositions du Code de la consommation, le consommateur peut recourir
          gratuitement à un médiateur de la consommation en cas de litige non résolu avec{' '}
          {businessName}.
        </p>
        <div className="bg-beige-50 border border-beige-200 rounded-xl p-5 mt-4 space-y-2">
          <div><strong>Nom du médiateur : </strong>{mediateurConsommation.nom}</div>
          <div><strong>Site internet : </strong>{mediateurConsommation.siteInternet}</div>
          <div><strong>Adresse postale : </strong>{mediateurConsommation.adressePostale}</div>
          {mediateurConsommation.adresseEmail && mediateurConsommation.adresseEmail !== "À compléter" && (
            <div><strong>Adresse e-mail : </strong>{mediateurConsommation.adresseEmail}</div>
          )}
          <div><strong>Référence / numéro d'agrément : </strong>{mediateurConsommation.referenceAgrement}</div>
        </div>
        <p className="mt-3">
          Pour plus d'informations, consultez la page dédiée :{' '}
          <a href="#/mediateur" className="text-terracotta-600 font-semibold underline">Médiateur de la consommation</a>.
        </p>
      </section>
    </LegalLayout>
  );
}
