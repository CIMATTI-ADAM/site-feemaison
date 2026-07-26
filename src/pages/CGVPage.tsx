import { useSEO } from '../lib/seo';
import { siteConfig } from '../config/siteConfig';
import { LegalLayout } from '../components/LegalLayout';
import { Link } from '../lib/router';

export function CGVPage() {
  useSEO({
    title: 'Conditions Générales de Vente — Fée Maison',
    description: 'Conditions Générales de Vente de Fée Maison : prestations, devis, prix, paiement, annulation, médiation de la consommation.',
  });

  const { businessName, professionalName, contact, legal, mediateurConsommation } = siteConfig;

  return (
    <LegalLayout title="Conditions Générales de Vente" warning={siteConfig.legalWarning}>
      <section>
        <h2>1. Identité du Prestataire</h2>
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
          Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles
          entre {businessName}, dénommée ci-après le "Prestataire" et ses clients pour les prestations de cuisinière à domicile,
          que ce soit pour les prestations de batchcooking, de cours de cuisine ou de cuisine évènementielle. 
          Toute commande implique l'acceptation pleine et entière des présentes CGV.
        </p>
      </section>

      <section>
        <h2>3. Description des prestations</h2>
        <p>
          {businessName} propose plusieurs catégories de prestations :
        </p>
        <ul>
          <li>Batchcooking à domicile : préparation de plusieurs repas à l'avance au domicile du Client.</li>
          <li>Cours de cuisine : cours de cuisine au domicile du Client ou tout autre lieu mis à disposition par celui-ci,</li>
          <li>Cuisine évènementielle : repas, buffets, brunchs et menus sur mesure pour des évènements privés, professionnels, 
            des séjours ou des stages, au domicile du Client ou tout autre lieu mis à disposition par celui-ci.</li>
        </ul>
      </section>

      <section>
        <h2>4. Champ d'application</h2>
        <p>
          Les présentes CGV s'appliquent à toutes les prestations réalisées par {businessName}. 
          Des conditions spécifiques peuvent être définies dans le devis pour les prestations
          particulières.
        </p>
      </section>

      <section>
        <h2>5. Demande de devis</h2>
        <p>
          Toute prestation fait l'objet d'un devis préalable, établi sur la base des informations
          communiquées par le Client (nombre de personnes, date, lieu, type de prestation, besoins
          spécifiques). Le devis est gratuit et sans engagement.
        </p>
      </section>

      <section>
        <h2>6. Validation du devis</h2>
        <h3>-- Prestations de cuisine évènementielle :  </h3>
        <p>
          Pour les prestations de cuisine évènementielle, la réservation de la date n'est effective 
          qu'à compter de la réception du devis signé et de l'acompte. 
          Le montant de cet acompte est de 30%, sauf précision contraire sur le devis. 
          Le devis accepté vaut contrat.
        </p>
        <h3>-- Prestations de batchcooking et cours de cuisine :  </h3>
        <p>
          Le devis devient définitif dès lors qu'il est daté et signé par le Client.
          Aucun acompte n'est demandé. Cette signature vaut acceptation sans réserve de l'ensemble 
          des présentes Conditions Générales de Vente.
        </p>
        
      </section>
      
      <section>
        <h2>7. Droit de rétractation </h2>
        <h3>-- Prestations de cuisine évènementielle : absence de droit de rétractation </h3>
        <p>
          Conformément à l'article L.221-28 du Code de la consommation, les prestations de cuisine 
          évènementielle réservées pour une date ou une période d'exécution déterminée ne bénéficient 
          pas du droit légal derétractation de quatorze (14) jours. Toute commande validée 
          par la signature du devis et le versement de l'acompte est donc ferme et définitive, 
          sous réserve des conditions d'annulation prévues aux présentes Conditions Générales de Vente.
        </p>

        <h3>-- Prestations de batchcooking et cours de cuisine à domicile : droit de rétractation applicable</h3>
        <p>
          Conformément à l'article L.221-18 et suivants du Code de la consommation, lorsque 
          le contrat est conclu à distance ou hors établissement, le Client consommateur dispose 
          d'un droit de rétractation de quatorze (14) jours à compter de la conclusion du contrat.
          </p>
          <p>
          Pour exercer ce droit, le Client informe le Prestataire de sa décision de se rétracter par 
          tout myen dénué d'ambiguïté avant l'expiration de ce délai.
          </p>
          <p>
          Toutefois, si le Client demande expressément que la prestation commence avant la fin du délai 
          de rétractation, il accepte que le Prestataire débute son exécution. En cas de rétractation 
          après le commencement de la prestation, le Client reste redevable du montant correspondant 
          aux prestations déjà réalisées ainsi qu'aux frais engagés à sa demande, conformément 
          aux dispositions du Code de la consommation.
          </p>
          <p>
          Si la prestation est intégralement exécutée avant l'expiration du délai de rétractation, 
          avec l'accord préalable et exprès du Client et sa reconnaisance de la perte de son droit de 
          rétractation, celui-ci ne pourra plus être exercé.
        </p>
      
      </section>

      <section>
        <h2>8. Conditions d'annulation</h2>
        <p>
          Toute demande d'annulation doit être formulée par écrit (courrier ou mail).
          En dehors des cas où le Client bénéficie d'un droit légal de rétractation, 
          l'acompte versé reste acquis au Prestataire à titre d'indemnisation des frais engagés 
          et de la réservation de la date.
          En cas d'annulation par le client, l’acompte de 30% versé à la réservation n’est pas remboursable, peu importe le délai d’annulation. 
          De plus, en cas d'annulation les sommes suivantes restent dues : 
        </p>
        <ul>
          <li>à moins de 30 jours de l’évènement : 50% du montant total du devis est dû,</li>
          <li>à moins de 15 jours de l’évènement : 75% du montant total du devis est dû,</li>
          <li>à moins de 7 jours de l’évènement ou en cas de non-présentation : 100% du montant total du devis est dû.</li>
        </ul>
        <p>
          Si des conditions différentes sont indiquées sur le devis, ce sont ces dernières qui prévalent.
        </p>
      </section>
      

      <section>
        <h2>9. Prix</h2>
        <p>
          Les tarifs établis sur le devis sont exprimés en net et valables pour la durée spécifiée sur le devis. 
          Passé ce délai, ils sont susceptibles d’être modifiés.
          Ils peuvent varier en fonction du nombre de personnes, de la complexité des menus, des produits choisis et des conditions de réalisation.
        </p>
      </section>

      <section>
        <h2>10. Frais éventuels</h2>
        <p>
          Des frais supplémentaires peuvent s'appliquer :
        </p>
        <ul>
          <li> Frais de déplacement au-delà de la zone principale : Les frais de 
            déplacement sont inclus dans un rayon de 15 km autour de Lannion. 
            Au-delà, un forfait de 2,00 € par km est facturé.
          </li>
          <li> Frais pour réaliser les courses si elles sont confiées à {businessName} 
            Pour les prestations de Batchcooking, l'organisation des courses est définie 
            selon la formule retenue : courses confiées à {businessName} (facturées en sus) 
            ou réalisées par le Client. 
            Les ingrédients privilégiés sont des produits frais et de saison.
          </li>
          <li> Location de matériel spécifique
          </li>
        </ul>
        <p>
          Ces frais sont indiqués dans le devis.
        </p>
      </section>
      

      <section>
        <h2>11. Modalités de paiement</h2>
        <p>
          Le paiement s'effectue selon les modalités définies dans le devis. Sauf disposition
          contraire, le solde est dû à l'issue de la prestation.
        </p>
      </section>


      <section>
        <h2>11. Conditions de report</h2>
        <p>
          Un report peut être organisé d'un commun accord. Les conditions et d'éventuels frais
          supplémentaires sont définis au cas par cas.
        </p>
      </section>

      <section>
        <h2>12. Retard du client</h2>
        <p>
          En cas de retard du Client le jour de la prestation, le temps écoulé peut être facturé ou
          la prestation adaptée. Toute situation particulière sera discutée en amont.
        </p>
      </section>

      <section>
        <h2>13. Nombre de personnes</h2>
        <p>
          Pour les prestations de cuisine évènementielle, le nombre définitif de personnes doit 
          être confirmé au plus tard 30 jours avant l’événement. 
          Ce nombre servira de base de facturation. 
        </p>
        <p>
          Toute diminution supérieure à 10 % du nombre de convives initialement prévu sur le devis 
          ne sera pas prise en compte dans la facture finale. 
          A l’inverse, toute augmentation de ce nombre sera prise en compte et facturée.
        </p>
      </section>

      <section>
        <h2>14. Accès au domicile ou au lieu de prestation</h2>
        <p>
          Le Client s'assure que {businessName} dispose d'un accès au domicile ou au lieu de la
          prestation aux horaires convenus, et que le lieu est dans des conditions d'hygiène et de
          sécurité conformes.
        </p>
      </section>

      <section>
        <h2>15. Matériel et équipements disponibles</h2>
        <p>
          Le Client met à disposition le matériel de cuisine nécessaire, dans un état de
          fonctionnement et de propreté suffisant. La liste du matériel disponible est vérifiée
          lors de l'échange préalable. En cas de matériel manquant, des solutions peuvent être
          envisagées (location, apport par {businessName}).
        </p>
      </section>


      <section>
        <h2>17. Allergies et régimes alimentaires</h2>
        <p>
          Le Client est tenu de signaler toute allergie, intolérance ou régime alimentaire
          particulier lors de l'échange préalable. {businessName} prend en compte ces éléments dans
          l'élaboration des menus mais ne peut garantir l'absence totale de traces d'allergènes.
        </p>
      </section>

      <section>
        <h2>18. Responsabilité du Client</h2>
        <p>
          Le Client est responsable des informations fournies (allergies, nombre de personnes,
          équipements) et de l'accès au lieu de prestation.
        </p>
      </section>

      <section>
        <h2>19. Conservation des plats</h2>
        <p>
          Pour les prestations de batchcooking, {businessName} fournit des conseils de conservation
          et d'étiquetage. Le Client est responsable du respect des consignes de conservation après
          la prestation.
        </p>
        <p>
          Pour les prestations évènementielles, les restes alimentaires doivent être jetés conformément 
          à la législation en vigueur. Le Prestataire se dégage de toute responsabilité sur les risques 
          encourus dans le cas où le Client décide de conserver les produits restants impliquant une attestation de décharge signée. 
        </p>
      </section>

      <section>
        <h2>20. Poubelles</h2>
        <p>
          Les poubelles et verres ne sont pas repris, sauf en cas de : 
          </p>
          <ul>
          <li>Demande explicite du Client, entraînant une facturation supplémentaire.</li>
          <li>Container disponible sur site et mis à la disposition du Prestataire.</li>
          </ul>
      </section>


      <section>
        <h2>21. Matériel et vaisselle (mis à disposition par {businessName})</h2>
        <p>
          Des contenants pour le batchcooking ou de la vaisselle/verrerie et ustensiles 
          utiles au bon déroulement de l’évènement, peuvent être laissés sur place 
          après le départ du Prestataire. 

          L’ensemble du matériel laissé à disposition est à ranger dans les racks et bacs 
          prévus à cet effet afin de faciliter la reprise le lendemain de la prestation. 
          Toute perte, casse ou détérioration de la vaisselle, du matériel ou des équipements 
          au cours de la prestation sera facturée au Client selon les tarifs de remplacement en vigueur.
          </p>
      </section>

      
      

      <section>
        <h2>22. Responsabilité du Prestataire</h2>
        <p>
          {businessName} s'engage à réaliser les prestations avec soin et professionnalisme. 
          Sa responsabilité est engagée dans les limites du droit applicable.
          {businessName} est couvert par une assurance responsabilité civile professionnelle pour 
          la durée de la prestation. Elle ne pourra être tenue responsable des dommages causés par 
          des tiers, du fait des convives ou de toute utilisation inappropriée des installations 
          du domicile du Client ou du lieu de réception.
        </p>
      </section>

      <section>
        <h2>23. Force majeure</h2>
        <p>
          Aucune des parties n'est responsable des manquements à ses obligations résultant d'un cas
          de force majeure, tel que défini par la jurisprudence française.
        </p>
      </section>



      <section>
        <h2>24. Réclamations</h2>
        <p>
          Toute réclamation doit être adressée par écrit à {businessName} ({contact.email}) dans un
          délai raisonnable après la prestation. {businessName} s'engage à traiter chaque réclamation
          avec attention.
        </p>
      </section>

      <section>
        <h2>25. Médiation de la consommation</h2>
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
          /* <div><strong>Référence / numéro d'agrément : </strong>{mediateurConsommation.referenceAgrement}</div>
          */
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
        <h2>26. Protection des données</h2>
        <p>
          Le traitement des données personnelles est décrit dans la{' '}
          <Link to="politique-confidentialite">politique de confidentialité</Link>.
        </p>
      </section>

      <section>
        <h2>27. Propriété intellectuelle</h2>
        <p>
          Les recettes, menus et contenus créés par {businessName} restent sa propriété
          intellectuelle. Le Client s'engage à ne pas reproduire ni diffuser ces contenus sans
          autorisation.
        </p>
      </section>

      <section>
        <h2>28. Droit applicable</h2>
        <p>
          Les présentes CGV sont soumises au droit français.
        </p>
      </section>

      <section>
        <h2>29. Règlement des litiges</h2>
        <p>
          En cas de litige, une solution amiable sera recherchée en priorité. À défaut, les
          tribunaux français seront compétents, sous réserve du recours à la médiation de la
          consommation décrite à l'article 24.
        </p>
      </section>
    </LegalLayout>
  );
}
