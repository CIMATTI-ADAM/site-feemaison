/**
 * ============================================================
 * PARAMÈTRES DE LA CARTE BATCH COOKING — FÉE MAISON
 * ============================================================
 *
 * Ce fichier contient tout ce qui doit rester facilement
 * modifiable :
 *
 * - identité de l’entreprise ;
 * - coordonnées ;
 * - saison ;
 * - textes ;
 * - couleurs ;
 * - logo et filigrane ;
 * - catégories ;
 * - recettes ;
 * - pictogrammes associés aux recettes.
 *
 * Pour modifier la carte :
 * 1. changer uniquement les valeurs de ce fichier ;
 * 2. enregistrer avec Ctrl + S ;
 * 3. actualiser la page dans Chrome.
 *
 * La mise en page se trouve dans style.css.
 * La génération du contenu se trouve dans index.html.
 * ============================================================
 */

window.menuConfig = {
  /**
   * ----------------------------------------------------------
   * IDENTITÉ DE FÉE MAISON
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
     * Facultatif :
     * ajouter ici l’adresse complète si tu souhaites l’afficher.
     */
    address: "",

    /**
     * Le logo principal peut être affiché en pied de page.
     * Modifie simplement le chemin si le fichier change de nom.
     */
    logoUrl:
      "/images/logo/cuisiniere-transparente.png",

    /**
     * Illustration utilisée comme filigrane sur toute la page.
     *
     * Le meilleur résultat est obtenu avec :
     * - une image PNG transparente ;
     * - uniquement le dessin de la cuisinière ;
     * - sans texte ;
     * - sans fond coloré.
     */
    watermarkUrl:
      "/images/logo/fee-maison-cuisiniere-filigrane.png",
  },

  /**
   * ----------------------------------------------------------
   * INFORMATIONS GÉNÉRALES DE LA CARTE
   * ----------------------------------------------------------
   */
  booklet: {
    title: "Fée Maison",

    topLabel: "Fée Maison • Batch cooking à domicile",

    slogan: "Une cuisine sur mesure pour savourer votre quotidien !",

    menuTitle: "Carte des plats",

    season: "Été 2026",

    introduction:
      "Des repas faits maison, préparés chez vous avec des produits bruts, locaux et de saison, adaptés à vos envies et à vos habitudes alimentaires",

    personalizationText:
      "Chaque menu est personnalisé selon vos goûts, vos envies et votre organisation familiale.",

    seasonalNote:
      "Les recettes évoluent au fil des saisons, des arrivages et des produits disponibles.",
  },

  /**
   * ----------------------------------------------------------
   * CHARTE GRAPHIQUE
   * ----------------------------------------------------------
   *
   * Toutes les couleurs du document sont centralisées ici.
   * Tu pourras donc changer l’ambiance de la carte sans toucher
   * au fichier CSS.
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

    green: "#6E8B4E",
    greenLight: "#EDF3E8",

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
   * LIBELLÉS DES PICTOGRAMMES
   * ----------------------------------------------------------
   *
   * Les pictogrammes sont affichés automatiquement selon les
   * tags présents dans chaque recette.
   */
  tagLabels: {
    veggie: {
      label: "Spécial végé",
      symbol: "🌿",
      cssClass: "veggie",
    },

    cold: {
      label: "Repas froid pour l'été",
      symbol: "☀️",
      cssClass: "cold",
    },

    freezer: {
      label: "Compatible congélation",
      symbol: "❄️",
      cssClass: "freezer",
    },

    spicy: {
      label: "Légèrement relevé",
      symbol: "🌶️",
      cssClass: "spicy",
    },

    bestseller: {
      label: "Best seller",
      symbol: " ",  /*  symbol: "⭐",  */
      cssClass: "bestseller",
    },
  },

  /**
   * ----------------------------------------------------------
   * ORDRE ET CONTENU DES CATÉGORIES
   * ----------------------------------------------------------
   *
   * Pour changer l’ordre des catégories :
   * déplacer simplement les blocs ci-dessous.
   *
   * Pour ajouter une recette :
   *
   * {
   *   name: "Nom de la recette",
   *   tags: ["veggie", "freezer"]
   * }
   *
   * Tags disponibles :
   * - veggie
   * - cold
   * - freezer
   * - spicy
   * - bestseller
   */
  categories: [
    {
      id: "best-sellers",

      title: "Best sellers",

      icon: "☆",

      column: "left",

      recipes: [
        {
          name: "Taboulé",
          tags: ["bestseller", "cold", "veggie"],
        },

        {
          name: "Courgettes farcies au quinoa, citron et fromage de chèvre",
          tags: ["bestseller", "veggie"],
        },

        {
          name: "Parmiggiana d'aubergines",
          tags: ["bestseller", "veggie"],
        },

        {
          name: "Dahl de lentilles corail au lait de coco",
          tags: ["bestseller", "veggie", "spicy"],
        },

        {
          name:
            "Linguine carbonara aux courgettes, à ma façon",
          tags: ["bestseller", "veggie"],
        },
      ],
    },

    {
      id: "viandes-poissons",

      title: "Viandes & poissons",

      icon: "◇",

      column: "right",

      recipes: [
        {
          name:
            "Poulet façon grand-mère (avec légumes et pommes de terre)",
          tags: [],
        },

        {
          name:
            "Poisson blanc vapeur, selon arrivage, et tagliatelles de courgettes",
          tags: [],
        },

        {
          name: "Mafé de poulet et boulgour",
          tags: [],
        },

        {
          name: "Rougail saucisse et riz",
          tags: ["spicy"],
        },

        {
          name: "Tomates farcies au veau et pâtes",
          tags: [],
        },
      ],
    },

    {
      id: "quiches",

      title: "Quiches salées et petite salade",

      icon: "◒",

      column: "left",

      recipes: [
        {
          name:
            "Quiche aux courgettes et bleu d’Auvergne",
          tags: ["veggie"],
        },

        {
          name: "Quiche aux poireaux et saumon",
          tags: [],
        },

        {
          name:
            "Quiche aux tomates et moutarde à l’ancienne",
          tags: ["veggie"],
        },

        {
          name:
            "Quiche au fenouil et fromage fondant",
          tags: ["veggie"],
        },

         {
          name:
            "Quiche aux champignons, lardons et fromage moelleux",
          tags: [],
        },
      ],
    },

    {
      id: "gratins-lasagnes",

      title: "Gratins & lasagnes",

      icon: "▦",

      column: "right",

      recipes: [
        {
          name:
            "Lasagnes de légumes du soleil et mozzarella",
          tags: ["veggie"],
        },

        {
          name: "Lasagnes au bœuf et Comté",
          tags: [],
        },

        {
          name:
            "Gratin de poireaux, pommes de terre et chèvre frais",
          tags: ["veggie"],
        },

        {
          name:
            "Roulés de poireaux au jambon et béchamel",
          tags: [],
        },

        {
          name:
            "Oeufs durs aux épinards et béchamel",
          tags: [],
        },
      ],
    },

    {
      id: "desserts",

      title: "Desserts",

      icon: "✦",

      column: "left",

      recipes: [
        {
          name: "Panna cotta et coulis de fruits d’été",
          tags: [],
        },

        {
          name: "Gâteau moelleux au chocolat",
          tags: [],
        },

        {
          name: "Tarte à la rhubarbe",
          tags: [],
        },

        {
          name: "Clafoutis aux abricots",
          tags: [],
        },
      ],
    },
  ],

  /**
   * ----------------------------------------------------------
   * LÉGENDE DES PICTOGRAMMES
   * ----------------------------------------------------------
   *
   * Mettre enabled à false pour masquer complètement la légende.
   *
   * L’ordre des éléments dans "items" détermine leur ordre
   * d’affichage dans le document.
   */
  legend: {
    enabled: true,

    items: [
      "veggie",
      "cold",
      "spicy",
     /* "freezer",
      "bestseller",
      */
    ],
  },

  /**
   * ----------------------------------------------------------
   * OPTIONS D’AFFICHAGE
   * ----------------------------------------------------------
   */
  display: {
    showLogoInFooter: true,

    showWatermark: true,

    showContactIcons: true,

    showRecipeBullets: true,

    showCategoryIcons: true,

    showLegend: true,
  },
};