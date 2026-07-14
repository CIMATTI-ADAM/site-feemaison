import { useSEO } from '../lib/seo';
import { siteConfig } from '../config/siteConfig';
import { LegalLayout } from '../components/LegalLayout';
import { Link } from '../lib/router';

export function CGVPage() {
  useSEO({
    title: 'Conditions générales de vente — Fée Maison',
    description: 'Conditions générales de vente de Fée Maison : prestations, devis, prix, paiement, annulation, médiation de la consommation.',
  });

  const { businessName, professionalName, contact, legal, mediateurConsommation } = siteConfig;

  return (
    <LegalLayout title="Conditions générales de vente" warning={siteConfig.legalWarning}>
      <section>
        <h2>1. Identité du prestataire</h2>
        <p>
          {businessName}, représenté par {professionalName}.<br />
          Adresse : {contact.address}<br />
          SIRET : {legal.siret}<br />
          E-mail : {contact.email}<br />
          Téléphone : {contact.phone}
        </p>
      </section>

      <section>
        <h2>2. Objet des CGV</h2>
        <p>
          Les présentes Conditions générales de vente (CGV) régissent les relations contractuelles
          entre {businessName} et ses clients pour les prestations de cuisinière à domicile,
          notamment le batchcooking et la cuisine évènementielle. Toute commande implique
          l'acceptation pleine et entière des présentes CGV.
        </p>
      </section>

      <section>
        <h2>3. Description des prestations</h2>
        <p>
          {businessName} propose deux catégories de prestations :
        </p>
        <ul>
          <li>Batchcooking à domicile : préparation de plusieurs repas à l'avance au domicile du client.</li>
          <li>Cuisine évènementielle : repas, buffets, brunchs et menus sur mesure pour des évènements privés, professionnels, des séjours ou des stages.</li>
        </ul>
      </section>

      <section>
        <h2>4. Champ d'application</h2>
        <p>
          Les présentes CGV s'appliquent à toutes les prestations réalisées par {businessName}. Des
          conditions spécifiques peuvent être définies dans le devis pour les prestations
          particulières.
        </p>
      </section>

      <section>
        <h2>5. Demande de devis</h2>
        <p>
          Toute prestation fait l'objet d'un devis préalable, établi sur la base des informations
          communiquées par le client (nombre de personnes, date, lieu, type de prestation, besoins
          spécifiques). Le devis est gratuit et sans engagement.
        </p>
      </section>

      <section>
        <h2>6. Validation de la commande</h2>
        <p>
          La commande est validée après acceptation du devis par le client et versement de l'acompte
          éventuellement demandé. Le devis accepté vaut contrat.
        </p>
      </section>

      <section>
        <h2>7. Prix</h2>
        <p>
          Les prix sont indiqués dans le devis. Ils peuvent varier en fonction du nombre de
          personnes, de la complexité des menus, des produits choisis et des conditions de
          réalisation.
        </p>
      </section>

      <section>
        <h2>8. Frais éventuels</h2>
        <p>
          Des frais supplémentaires peuvent s'appliquer (frais de déplacement au-delà de la zone
          principale, frais de courses si confiées à {businessName}, location de matériel
          spécifique). Ces frais sont indiqués dans le devis.
        </p>
      </section>

      <section>
        <h2>9. Modalités de paiement</h2>
        <p>
          Le paiement s'effectue selon les modalités définies dans le devis. Sauf disposition
          contraire, le solde est dû à l'issue de la prestation.
        </p>
      </section>

      <section>
        <h2>10. Acompte</h2>
        <p>
          Un acompte peut être demandé pour confirmer la réservation. Le montant et les conditions
          de l'acompte sont précisés dans le devis.
        </p>
      </section>

      <section>
        <h2>11. Conditions d'annulation</h2>
        <p>
          En cas d'annulation par le client, les conditions suivantes peuvent s'appliquer (à définir
          et adapter dans le devis) :
        </p>
        <ul>
          <li>Annulation plus de 14 jours avant : remboursement de l'acompte.</li>
          <li>Annulation entre 7 et 14 jours avant : retenue de 50 % de l'acompte.</li>
          <li>Annulation moins de 7 jours avant : retenue intégrale de l'acompte.</li>
        </ul>
        <p>
          Ces conditions sont indicatives et doivent être adaptées à chaque prestation dans le
          devis.
        </p>
      </section>

      <section>
        <h2>12. Conditions de report</h2>
        <p>
          Un report peut être organisé d'un commun accord. Les conditions et d'éventuels frais
          supplémentaires sont définis au cas par cas.
        </p>
      </section>

      <section>
        <h2>13. Retard du client</h2>
        <p>
          En cas de retard du client le jour de la prestation, le temps écoulé peut être facturé ou
          la prestation adaptée. Toute situation particulière sera discutée en amont.
        </p>
      </section>

      <section>
        <h2>14. Accès au domicile ou au lieu de prestation</h2>
        <p>
          Le client s'assure que {businessName} dispose d'un accès au domicile ou au lieu de la
          prestation aux horaires convenus, et que le lieu est dans des conditions d'hygiène et de
          sécurité conformes.
        </p>
      </section>

      <section>
        <h2>15. Matériel et équipements disponibles</h2>
        <p>
          Le client met à disposition le matériel de cuisine nécessaire, dans un état de
          fonctionnement et de propreté suffisant. La liste du matériel disponible est vérifiée
          lors de l'échange préalable. En cas de matériel manquant, des solutions peuvent être
          envisagées (location, apport par {businessName}).
        </p>
      </section>

      <section>
        <h2>16. Courses et ingrédients</h2>
        <p>
          L'organisation des courses est définie selon la formule retenue : courses confiées à{' '}
          {businessName} (facturées en sus) ou réalisées par le client. Les ingrédients privilégient
          les produits frais et de saison dans la mesure du possible.
        </p>
      </section>

      <section>
        <h2>17. Allergies et régimes alimentaires</h2>
        <p>
          Le client est tenu de signaler toute allergie, intolérance ou régime alimentaire
          particulier lors de l'échange préalable. {businessName} prend en compte ces éléments dans
          l'élaboration des menus mais ne peut garantir l'absence totale de traces d'allergènes.
        </p>
      </section>

      <section>
        <h2>18. Responsabilité du client</h2>
        <p>
          Le client est responsable des informations fournies (allergies, nombre de personnes,
          équipements) et de l'accès au lieu de prestation.
        </p>
      </section>

      <section>
        <h2>19. Conservation des plats</h2>
        <p>
          Pour les prestations de batchcooking, {businessName} fournit des conseils de conservation
          et d'étiquetage. Le client est responsable du respect des consignes de conservation après
          la prestation.
        </p>
      </section>

      <section>
        <h2>20. Responsabilité du prestataire</h2>
        <p>
          {businessName} s'engage à réaliser les prestations avec soin et professionnalisme. Sa
          responsabilité est engagée dans les limites du droit applicable.
        </p>
      </section>

      <section>
        <h2>21. Force majeure</h2>
        <p>
          Aucune des parties n'est responsable des manquements à ses obligations résultant d'un cas
          de force majeure, tel que défini par la jurisprudence française.
        </p>
      </section>

      <section>
        <h2>22. Droit de rétractation</h2>
        <p>
          Le droit de rétractation, lorsqu'il est applicable, est exercé dans les conditions prévues
          par le Code de la consommation. Pour certaines prestations réalisées à une date convenue,
          le droit de rétractation peut ne pas s'appliquer. Les conditions exactes seront précisées
          dans le devis.
        </p>
      </section>

      <section>
        <h2>23. Réclamations</h2>
        <p>
          Toute réclamation doit être adressée par écrit à {businessName} ({contact.email}) dans un
          délai raisonnable après la prestation. {businessName} s'engage à traiter chaque réclamation
          avec attention.
        </p>
      </section>

      <section>
        <h2>24. Médiation de la consommation</h2>
        <p>
          Conformément aux dispositions du Code de la consommation, en cas de litige non résolu
          après une réclamation écrite adressée à {businessName}, le consommateur peut recourir
          gratuitement à un médiateur de la consommation.
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
          <strong>Modalités de saisine :</strong> {mediateurConsommation.conditionsSaisine}
        </p>
        <p>
          Pour plus d'informations, consultez la page dédiée :{' '}
          <Link to="mediateur">Médiateur de la consommation</Link>.
        </p>
      </section>

      <section>
        <h2>25. Protection des données</h2>
        <p>
          Le traitement des données personnelles est décrit dans la{' '}
          <Link to="politique-confidentialite">politique de confidentialité</Link>.
        </p>
      </section>

      <section>
        <h2>26. Propriété intellectuelle</h2>
        <p>
          Les recettes, menus et contenus créés par {businessName} restent sa propriété
          intellectuelle. Le client s'engage à ne pas reproduire ni diffuser ces contenus sans
          autorisation.
        </p>
      </section>

      <section>
        <h2>27. Droit applicable</h2>
        <p>
          Les présentes CGV sont soumises au droit français.
        </p>
      </section>

      <section>
        <h2>28. Règlement des litiges</h2>
        <p>
          En cas de litige, une solution amiable sera recherchée en priorité. À défaut, les
          tribunaux français seront compétents, sous réserve du recours à la médiation de la
          consommation décrite à l'article 24.
        </p>
      </section>
    </LegalLayout>
  );
}
