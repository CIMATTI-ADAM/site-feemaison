/**
 * ============================================================
 * PARAMÈTRES — DÉROULEMENT D’UNE PRESTATION BATCH COOKING
 * FÉE MAISON
 * ============================================================
 *
 * Ce fichier contient tout ce qui doit rester facile à modifier :
 *
 * - identité de l’entreprise ;
 * - coordonnées ;
 * - titres et textes ;
 * - couleurs ;
 * - filigrane ;
 * - pictogrammes ;
 * - ordre des étapes ;
 * - textes du pied de page.
 *
 * Pour modifier le document :
 * 1. change uniquement les valeurs de ce fichier ;
 * 2. enregistre avec Ctrl + S ;
 * 3. recharge la page dans Chrome.
 *
 * Le style se trouvera dans style.css.
 * La génération de la page se trouvera dans index.html.
 * ============================================================
 */

window.deroulementConfig = {
  /**
   * ----------------------------------------------------------
   * IDENTITÉ DE L’ENTREPRISE
   * ----------------------------------------------------------
   */
  business: {
    name: "Fée Maison",
    activity: "Cuisinière à domicile",
    service: "Batch cooking",

    phone: "06 84 88 61 11",
    email: "feemaison.lannion@gmail.com",
    website: "www.feemaisonlannion.fr",

    /**
     * Petit logo utilisé dans le pied de page.
     */
    logoUrl:
      "/images/logo/cuisiniere-transparente.png",

    /**
     * Illustration utilisée en filigrane sur la page.
     */
    watermarkUrl:
      "/images/logo/fee-maison-cuisiniere-filigrane.png",
  },

  /**
   * ----------------------------------------------------------
   * TITRES ET TEXTES PRINCIPAUX
   * ----------------------------------------------------------
   */
  document: {
    topLabel: "Fée Maison • Batch cooking à domicile",

    title: "Le déroulement de la prestation",

    subtitle:
      "Une organisation simple, personnalisée et pensée pour alléger votre quotidien.",

    introduction:
      "De notre premier échange jusqu’au rangement de vos plats, chaque étape est conçue pour vous faire gagner du temps tout en profitant d’une vraie cuisine maison.",

    personalizationText:
      "Chaque prestation est adaptée à vos goûts, à vos besoins, à votre rythme de vie et à votre organisation familiale.",

    footerNote:
      "Une cuisine maison, généreuse et personnalisée, directement chez vous.",
  },

  /**
   * ----------------------------------------------------------
   * CHARTE GRAPHIQUE
   * ----------------------------------------------------------
   *
   * Toutes les couleurs sont centralisées ici afin de pouvoir
   * modifier facilement l’ambiance du document.
   */
  colors: {
    burgundy: "#7F1F20",
    burgundyDark: "#651718",
    burgundySoft: "#A84B4C",

    cream: "#F7E4D6",
    creamLight: "#FFF9F4",
    creamSoft: "#FBEFE6",

    duckBlue: "#18727D",
    duckBlueLight: "#E8F3F3",

    gold: "#C99D5D",
    goldLight: "#E8CFAB",

    text: "#3E2E2A",
    textSoft: "#725F58",

    white: "#FFFFFF",
  },

   /**
   * ----------------------------------------------------------
   * PARAMÈTRES DU FILIGRANE
   * ----------------------------------------------------------
   *
   * opacity :
   * - 0.03 = très discret ;
   * - 0.05 = discret ;
   * - 0.08 = visible ;
   * - 0.10 = assez marqué.
   *
   * Les valeurs de position et de taille seront utilisées
   * par le fichier CSS.
   */
  watermark: {
    enabled: true,
    opacity: 0.248,
    width: "175mm",
    positionX: "center",
    positionY: "54%",
  },


  /**
   * ----------------------------------------------------------
   * ÉTAPES DE LA PRESTATION
   * ----------------------------------------------------------
   *
   * L’ordre des blocs ci-dessous détermine l’ordre d’affichage.
   *
   * Les icônes sont indiquées ici par un nom logique.
   * Le fichier index.html les associera à des pictogrammes
   * homogènes et élégants.
   */
  steps: [
    {
      id: "rencontre",

      number: "01",

      icon: "handshake",

      title: "Nous nous rencontrons",

      shortLabel: "Premier échange",

      text:
        "Nous échangeons afin de personnaliser la prestation selon vos besoins, vos habitudes, vos envies et votre organisation. Vous choisissez ensuite la formule qui vous convient.",
    },

    {
      id: "choix-plats",

      number: "02",

      icon: "target",

      title: "Vous décidez des plats",

      shortLabel: "Votre sélection",

      text:
        "Vous choisissez vos recettes parmi les propositions de la carte de saison. Les plats peuvent être adaptés à vos goûts, à certaines habitudes alimentaires et aux contraintes de votre foyer.",
    },

    {
      id: "courses",

      number: "03",

      icon: "shopping-cart",

      title: "Les courses sont réalisées",

      shortLabel: "Les ingrédients",

      text:
        "Selon la formule choisie, vous réalisez les courses à partir de la liste fournie ou je peux m’en charger pour vous. Les produits sont sélectionnés avec une attention particulière portée à la qualité et à la saisonnalité.",
    },

    {
      id: "cuisine-domicile",

      number: "04",

      icon: "home",

      title: "Je cuisine à votre domicile",

      shortLabel: "La préparation",

      text:
        "Je me déplace chez vous et prépare les plats sélectionnés dans votre cuisine. À la fin de la prestation, le plan de travail, les équipements utilisés et la cuisine sont nettoyés et rangés.",
    },

    {
      id: "plats-prets",

      number: "05",

      icon: "serving-dish",

      title: "Tous vos plats sont prêts",

      shortLabel: "Votre semaine simplifiée",

      text:
        "Les plats sont rangés au réfrigérateur ou préparés pour la congélation selon les recettes. Je vous laisse également les conseils utiles pour les conserver, les réchauffer et les déguster dans les meilleures conditions.",
    },
  ],

  /**
   * ----------------------------------------------------------
   * PARAMÈTRES D’AFFICHAGE
   * ----------------------------------------------------------
   */
  display: {
    showStepNumbers: true,

    showShortLabels: true,

    showWatermark: true,

    showLogoInFooter: true,

    showContactIcons: true,

    showIntroduction: true,

    showPersonalizationBlock: true,
  },

  /**
   * ----------------------------------------------------------
   * OPTIONS D’IMPRESSION
   * ----------------------------------------------------------
   *
   * Ces valeurs seront exploitées par index.html et style.css.
   */
  printing: {
    allowBackgroundChoice: true,

    defaultWithBackground: true,

    keepWatermarkWithoutBackground: true,
  },
};