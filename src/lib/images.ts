// ============================================================
// SÉLECTION ÉDITORIALE DES PHOTOGRAPHIES
// Répartition des photos analysées visuellement.
// Chaque photo a été examinée pour déterminer son contenu
// réel et sa meilleure place dans le site.
// ============================================================

export type Photo = {
  src: string;
  alt: string;
  category: 'portrait' | 'plats' | 'buffet' | 'groupe' | 'preparation' | 'courses' | 'frigo' | 'service' | 'cheffe_privee';
};

// Hero — sélection des images les plus lumineuses et immersives
export const heroImages: Photo[] = [
  {
    src: '/images/photosCC/CC-preparations_01.jpeg',
    alt: 'Catherine en train de cuisiner des plats faits maison dans une cuisine chaleureuse',
    category: 'preparation',
  },
  {
    src: '/images/photosCC/Event-buffet_03.jpeg',
    alt: 'Buffet maison convivial avec des plats frais et colorés préparés par Fée Maison',
    category: 'buffet',
  },
];

// Page À propos — portrait et action de Catherine
export const aboutImages: Photo[] = [
  {
    src: '/images/photosCC/CC-preparations_04.jpeg',
    alt: 'Catherine préparant des plats maison avec soin',
    category: 'preparation',
  },
  {
    src: '/images/photosCC/CC-preparations_05.jpeg',
    alt: 'Catherine en cuisine, concentrée sur ses préparations',
    category: 'preparation',
  },
];

// Batchcooking — plats préparés, courses, frigo, étiquetage
export const batchcookingImages: Photo[] = [
  {
    src: '/images/photosCC/batch-plats_prepares_01.jpeg',
    alt: 'Plats préparés à domicile et étiquetés pour la semaine, batchcooking Fée Maison',
    category: 'plats',
  },
  {
    src: '/images/photosCC/batch-frigo_01.jpeg',
    alt: 'Réfrigérateur rangé avec les repas de la semaine préparés par le batchcooking à domicile',
    category: 'frigo',
  },
  {
    src: '/images/photosCC/batch-courses_01.jpeg',
    alt: 'Courses de produits frais pour la préparation des repas à domicile',
    category: 'courses',
  },
  {
    src: '/images/photosCC/batch-preparations_03.jpeg',
    alt: 'Préparation culinaire à domicile avec des produits frais et de saison',
    category: 'preparation',
  },
];

// Évènements — buffets, repas de groupe, tables dressées
export const eventImages: Photo[] = [
  {
    src: '/images/photosCC/Event-buffet_01.jpeg',
    alt: 'Buffet maison pour un évènement, plats variés et généreux préparés par Fée Maison',
    category: 'buffet',
  },
  {
    src: '/images/photosCC/Event-repas_groupe_01.jpeg',
    alt: 'Repas de groupe convivial, cuisine sur mesure pour un évènement privé',
    category: 'groupe',
  },
  {
    src: '/images/photosCC/Event-mignardises_01.jpeg',
    alt: 'Mignardises maison pour un évènement, douceurs sucrées préparées avec soin',
    category: 'buffet',
  },
  {
    src: '/images/photosCC/CC-service_02.jpeg',
    alt: 'Service de table soigné pour un évènement, plats dressés par Fée Maison',
    category: 'service',
  },
];

// Section "Deux façons de vous accompagner" — une image par carte
export const serviceCardImages = {
  batchcooking: {
    src: '/images/photosCC/batch-plats_prepares_02.jpeg',
    alt: 'Plats faits maison préparés à domicile pour la semaine',
  },
  evenements: {
    src: '/images/photosCC/Event-buffet_04.jpeg',
    alt: 'Table dressée et plats conviviaux pour un évènement',
  },
};

// Page Séjours bien-être / yoga — utilise les images de groupe et service
export const sejourImages: Photo[] = [
  {
    src: '/images/photosCC/Event-repas_groupe_02.jpeg',
    alt: 'Repas convivial lors d\'un séjour bien-être, cuisine équilibrée et maison',
    category: 'groupe',
  },
  {
    src: '/images/photosCC/CC-service_01.jpeg',
    alt: 'Table dressée avec soin pour un séjour, service attentif de Fée Maison',
    category: 'service',
  },
];

// Galerie — portfolio complet avec toutes les photos de qualité
export const galleryImages: Photo[] = [
  {
    src: '/images/photosCC/Chef-assiette_01.jpeg',
    alt: 'Assiette raffinée et généreuse, cuisine maison de Fée Maison',
    category: 'cheffe_privee',
  },
  {
    src: '/images/photosCC/Chef-assiette_02.jpeg',
    alt: 'Plat dressé avec soin, produit frais et cuisine de saison',
    category: 'cheffe_privee',
  },
  {
    src: '/images/photosCC/Chef-assiette_03.jpeg',
    alt: 'Assiette colorée aux légumes de saison, cuisine fait maison',
    category: 'cheffe_privee',
  },
  {
    src: '/images/photosCC/Chef-assiette_04.jpeg',
    alt: 'Création culinaire maison, produits frais et présentation soignée',
    category: 'cheffe_privee',
  },
  {
    src: '/images/photosCC/Chef-assiette_05.jpeg',
    alt: 'Plat du jour préparé avec des produits frais et locaux',
    category: 'cheffe_privee',
  },
  {
    src: '/images/photosCC/Chef-assiette_06.jpeg',
    alt: 'Assiette gourmande et créative, cuisine de cheffe privée à domicile',
    category: 'cheffe_privee',
  },
  {
    src: '/images/photosCC/batch-plats_prepares_03.jpeg',
    alt: 'Plats préparés à l\'avance et conservés pour la semaine, batchcooking à domicile',
    category: 'plats',
  },
  {
    src: '/images/photosCC/batch-plats_prepares_04.jpeg',
    alt: 'Plats variés préparés en batchcooking, repas maison pour toute la famille',
    category: 'plats',
  },
  {
    src: '/images/photosCC/batch-preparations_04.jpeg',
    alt: 'Préparation de plusieurs plats simultanément à domicile',
    category: 'preparation',
  },
  {
    src: '/images/photosCC/batch-preparations_05.jpeg',
    alt: 'Coulisses de la préparation culinaire, cuisine maison à domicile',
    category: 'preparation',
  },
  {
    src: '/images/photosCC/batch-preparations_06.jpeg',
    alt: 'Préparation de plats faits maison avec des ingrédients frais',
    category: 'preparation',
  },
  {
    src: '/images/photosCC/batch-preparations_07.jpeg',
    alt: 'Cuisinière à domicile préparant des plats de saison',
    category: 'preparation',
  },
  {
    src: '/images/photosCC/batch-preparations_08.jpeg',
    alt: 'Préparation culinaire soignée, étapes de cuisson à domicile',
    category: 'preparation',
  },
  {
    src: '/images/photosCC/batch-preparations_09.jpeg',
    alt: 'Plats en cours de préparation, cuisine maison et généreuse',
    category: 'preparation',
  },
  {
    src: '/images/photosCC/batch-_courses_02.jpeg',
    alt: 'Sélection de produits frais pour la préparation des repas',
    category: 'courses',
  },
  {
    src: '/images/photosCC/CC-preparations_02.jpeg',
    alt: 'Catherine en pleine préparation culinaire, gestes précis et soin',
    category: 'preparation',
  },
  {
    src: '/images/photosCC/CC-preparations_03.jpeg',
    alt: 'Préparation de plats maison, produits frais et locaux',
    category: 'preparation',
  },
  {
    src: '/images/photosCC/CC-preparations_06.jpeg',
    alt: 'Coulisses de la cuisine de Fée Maison, préparation attentive',
    category: 'preparation',
  },
  {
    src: '/images/photosCC/CC-preparations_07.jpeg',
    alt: 'Catherine cuisinant avec passion, produits de saison',
    category: 'preparation',
  },
  {
    src: '/images/photosCC/CC-preparations_08.jpeg',
    alt: 'Préparation soigneuse de plats maison à domicile',
    category: 'preparation',
  },
  {
    src: '/images/photosCC/CC-preparations_10.jpeg',
    alt: 'Plats en préparation, cuisine familiale et généreuse',
    category: 'preparation',
  },
  {
    src: '/images/photosCC/CC-preparations_11.jpeg',
    alt: 'Gestes de cuisinière à domicile, attention portée aux détails',
    category: 'preparation',
  },
  {
    src: '/images/photosCC/Event-buffet_02.jpeg',
    alt: 'Buffet coloré et varié pour un évènement, cuisine maison',
    category: 'buffet',
  },
  {
    src: '/images/photosCC/Event-buffet_05.jpeg',
    alt: 'Table de buffet conviviale, plats sucrés et salés maison',
    category: 'buffet',
  },
  {
    src: '/images/photosCC/Event-buffet_06.jpeg',
    alt: 'Présentation soignée d\'un buffet pour un évènement privé',
    category: 'buffet',
  },
  {
    src: '/images/photosCC/Event-Buffet_07.jpeg',
    alt: 'Buffet généreux et convivial, cuisine de saison pour un évènement',
    category: 'buffet',
  },
  {
    src: '/images/photosCC/Event-buffet_08.jpeg',
    alt: 'Divers plats préparés pour un buffet évènementiel, fait maison',
    category: 'buffet',
  },
  {
    src: '/images/photosCC/Event-mignardises_02.jpeg',
    alt: 'Mignardises sucrées maison pour un évènement, pâtisseries fines',
    category: 'buffet',
  },
  {
    src: '/images/photosCC/Event-repas_groupe_01.jpeg',
    alt: 'Repas de groupe convivial, cuisine sur mesure préparée par Fée Maison',
    category: 'groupe',
  },
  {
    src: '/images/photosCC/Event-repas_groupe_02.jpeg',
    alt: 'Table dressée pour un repas de groupe chaleureux, cuisine fait maison',
    category: 'groupe',
  },
  {
    src: '/images/photosCC/Event-repas_groupe_03.jpeg',
    alt: 'Repas de groupe convivial, cuisine sur mesure pour un séjour',
    category: 'groupe',
  },
  {
    src: '/images/photosCC/Event-repas_groupe_04.jpeg',
    alt: 'Table dressée pour un repas de groupe, ambiance chaleureuse',
    category: 'groupe',
  },
];
