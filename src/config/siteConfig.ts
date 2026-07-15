// ============================================================
// FICHIER DE CONFIGURATION CENTRAL - FÉE MAISON
// Toutes les informations paramétrables du site sont ici.
// Modifiez ce fichier pour mettre à jour le contenu du site
// sans toucher à la structure du code.
// ============================================================

export const siteConfig = {
  // --- IDENTITÉ DE L'ENTREPRISE ---
  businessName: "Fée Maison",
  professionalName: "Catherine Cimatti-Adam",
  tagline: "Une cuisine maison, généreuse et personnalisée, directement chez vous",
  subtitle:
    "Catherine de Fée Maison vous accompagne au quotidien avec le batchcooking à domicile et imagine les repas de vos évènements, séjours et moments de partage.",

  // --- COORDONNÉES ---
  contact: {
    email: "feemaison.lannion@gmail.com",
    phone: "06 84 88 61 11",
    address: "Brélévenez, Lannion",
    city: "Lannion",
    department: "Côtes d'Armor",
    region: "Bretagne",
  },

  // --- ZONE D'INTERVENTION ---
  interventionZone:
    "Batchcooking : Lannion et tout le Trégor / Evènements et séjours : en Bretagne, Pays de la Loire, voire toute la France sur devis",
  interventionZoneShort: "Trégor — Côtes d'Armor — France",

  // --- INFORMATIONS LÉGALES ---
  legal: {
    siret: "385 295 696 00038",
    legalStatus: "Entreprise Individuelle - ADAM EI", // ex: Entreprise individuelle, SASU, etc.
    vatNumber: "non assujetti à la TVA", // Numéro de TVA intracommunautaire si applicable
    publicationDirector: "Catherine Cimatti-Adam", // Directrice de publication
    // Hébergeur du site
    host: {
      name: "Hostinger",
      address: "À compléter",
      city: "À compléter",
      country: "À compléter",
      website: "À compléter",
    },
    // Éditeur du site
    editor: {
      name: "À compléter",
      address: "À compléter",
      email: "À compléter",
    },
  },

  // --- MÉDIATEUR DE LA CONSOMMATION ---
  // IMPORTANT : Renseignez ces informations avant la mise en ligne du site.
  mediateurConsommation: {
    nom: "À compléter",
    siteInternet: "À compléter",
    adressePostale: "À compléter",
    adresseEmail: "À compléter", // Laisser vide si non applicable
    referenceAgrement: "À compléter",
    conditionsSaisine:
      "À compléter — Indiquez ici les conditions permettant au consommateur de saisir le médiateur, notamment le délai après réclamation écrite adressée à Fée Maison et les situations éligibles à la médiation.",
  },

  // --- RÉSEAUX SOCIAUX ---
  socialMedia: {
    facebook: "", // URL complète ou laisser vide
    instagram: "", // URL complète ou laisser vide
    linkedin: "", // URL complète ou laisser vide
  },

  // --- FORMULAIRE DE CONTACT ---
  contactFormRecipient: "feemaison.lannion@gmail.com",

  // --- CRÉDIT D'IMPÔT ---
  creditImpot: {
    enabled: true,
    texte:
      "Les prestations de préparation de repas réalisées au domicile peuvent, sous réserve du respect des conditions légales et administratives applicables, ouvrir droit au crédit d'impôt au titre des services à la personne. Contactez Fée Maison pour vérifier les modalités applicables à votre situation.",
    lienInfos: "https://www.service-public.fr/particuliers/vosdroits/F12", // URL d'information officielle
  },

  // --- RGPD ---
  rgpd: {
    dureeConservationDonnees: "3 ans à compter du dernier contact",
    droitsContact: "feemaison.lannion@gmail.com",
  },

  // --- TÉMOIGNAGES ---
  // Durée d'affichage du carrousel (en millisecondes)
  testimonialCarouselSpeed: 5000,

  // --- SEO ---
  seo: {
    defaultTitle: "Fée Maison — Cuisinière à domicile | Batchcooking & Évènements | Lannion, Trégor",
    defaultDescription:
      "Catherine, cuisinière à domicile à Lannion. Batchcooking à domicile, repas sur mesure pour évènements, séjours bien-être, séminaires. Trégor, Côtes d'Armor et toute la France.",
    keywords:
      "cuisinière à domicile, batchcooking à domicile, préparation repas domicile, repas maison, fait maison, produits frais locaux, repas sur mesure, cuisine séjour yoga, cuisinière séminaire, buffet anniversaire, cuisine évènementielle, repas stage photo, crédit impôt préparation repas, cuisinière Lannion, Trégor, Côtes d'Armor",
    ogImage: "/images/photosCC/Event-buffet_03.jpeg",
  },

  // --- AVERTISSEMENT JURIDIQUE (affiché dans les pages légales) ---
  legalWarning:
    "Les Conditions générales de vente doivent être relues et adaptées à l'activité réelle de Fée Maison par une personne compétente avant la mise en ligne du site.",
};

export type SiteConfig = typeof siteConfig;
