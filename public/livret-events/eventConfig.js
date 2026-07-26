/**
 * ============================================================
 * PARAMÈTRES DE LA CARTE ÉVÉNEMENTS — FÉE MAISON
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
 * - entrées ;
 * - plats ;
 * - desserts ;
 * - pictogrammes associés aux propositions.
 *
 * Pour modifier la carte :
 *
 * 1. changer uniquement les valeurs de ce fichier ;
 * 2. enregistrer avec Ctrl + S ;
 * 3. actualiser la page dans Chrome.
 *
 * La mise en page se trouve dans style.css.
 * La génération du contenu se trouve dans index.html.
 * ============================================================
 */

window.eventConfig = {


  /**
   * ----------------------------------------------------------
   * IDENTITÉ DE FÉE MAISON
   * ----------------------------------------------------------
   */

  business: {

    name: "Fée Maison",

    activity: "Cuisinière à domicile",

    service: "Événements",


    phone: "06 84 88 61 11",

    email: "feemaison.lannion@gmail.com",

    website: "www.feemaisonlannion.fr",


    /**
     * Facultatif :
     * ajouter ici l’adresse complète si tu souhaites l’afficher.
     */

    address: "",


    /**
     * Logo utilisé dans le footer commun Fée Maison.
     */

    logoUrl:
      "/images/logo/cuisiniere-transparente.png",


    /**
     * Illustration utilisée comme filigrane.
     */

    watermarkUrl:
      "/images/logo/fee-maison-cuisiniere-filigrane.png",

  },


  /**
   * ----------------------------------------------------------
   * INFORMATIONS GÉNÉRALES DE LA CARTE
   * ----------------------------------------------------------
   *
   * Ces textes pourront être modifiés librement sans toucher
   * au HTML.
   */

  document: {

    title:
      "Fée Maison",


    topLabel:
      "Fée Maison • Cuisine à domicile",


    slogan:
      "Une cuisine sur mesure pour savourer vos moments précieux !",


    menuTitle:
      "Carte événements",


    season:
      "Juillet et Août 2026",


    introduction:
      "Composez votre menu parmi une sélection d’entrées, de plats et de desserts faits maison. Un menu unique pour l'ensemble des convives.",


    personalizationText:
      "Les menus sont réalisés maison à base de produits frais, locaux et majoritairement bios.",


    seasonalNote:
      "Les recettes évoluent au fil des saisons, des arrivages et des produits disponibles.",

  },


  /**
   * ----------------------------------------------------------
   * CHARTE GRAPHIQUE
   * ----------------------------------------------------------
   *
   * Palette identique au livret Batch.
   *
   * Ne pas modifier ici sauf si tu souhaites réellement
   * changer l’identité graphique Fée Maison.
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
   * Valeurs volontairement reprises du livret Batch.
   *
   * opacity :
   * - plus la valeur est basse, plus le filigrane est discret ;
   * - plus elle est haute, plus il est visible.
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
   * Ces pictogrammes sont utilisés :
   *
   * - à côté des propositions ;
   * - dans la légende en bas de page.
   *
   * Le blé et le lait seront barrés par le CSS.
   */

  tagLabels: {


    veggie: {

      label:
        "Spécial végé",

      symbol:
        "🌿",

      cssClass:
        "veggie",

    },


    glutenFree: {

      label:
        "Sans gluten",

      symbol:
        "🌾",

      cssClass:
        "glutenFree",

    },


    lactoseFree: {

      label:
        "Sans lactose",

      symbol:
        "🥛",

      cssClass:
        "lactoseFree",

    },


    spicy: {

      label:
        "Légèrement relevé",

      symbol:
        "🌶️",

      cssClass:
        "spicy",

    },

  },


  /**
   * ----------------------------------------------------------
   * CONTENU DE LA CARTE
   * ----------------------------------------------------------
   *
   * La carte comprend trois catégories :
   *
   * - Entrées
   * - Plats
   * - Desserts
   *
   * Chaque catégorie contient quatre propositions.
   *
   * Chaque proposition est prévue sur deux niveaux :
   *
   * name :
   * nom principal du plat
   *
   * details :
   * ingrédients, garniture, accompagnement ou dressage
   *
   * tags :
   * pictogrammes éventuels
   *
   * Exemple :
   *
   * {
   *   name: "Nom de la recette",
   *   details: "Garniture, sauce et accompagnement",
   *   tags: ["veggie", "glutenFree"]
   * }
   */

  categories: [


    /**
     * ========================================================
     * ENTRÉES
     * ========================================================
     */

    {

      id:
        "entrees",


      title:
        "Entrées",


      icon:
        "✦",


      dishes: [


        {

          name:
            "Tatin de tomates anciennes, chèvre frais et pistou",

          details:
            "Roquette, pignons torréfiés, crème de balsamique et basilic frais",

          tags:
            ["veggie"],

        },


        {

          name:
            "Salade de boulgour aux légumes rôtis et fêta",

          details:
            "Menthe fraîche, miel, grenade, pistaches concassées",

          tags:
            ["veggie"],

        },


        {

          name:
            "Aubergine rôtie, burrata et tomates cerise confites",

          details:
            "Basilic frais, huile d’olive et fleur de sel",

          tags:
            ["veggie", "glutenFree"],

        },


        {

          name:
            "Roulés de jambon cru,fromage frais aux herbes et légumes croquants",

          details:
            "Jeunes pousses, radis et huile de basilic",

          tags:
            ["glutenFree"],

        },

      ],

    },


    /**
     * ========================================================
     * PLATS
     * ========================================================
     */

    {

      id:
        "plats",


      title:
        "Plats",


      icon:
        "◆",


      dishes: [


        {

          name:
            "Echine de porc braisée au cidre et pommes de terre grenailles rôties",

          details:
            "Légumes glacés, pommes fruits sautées et jus réduit",

          tags:
            ["glutenFree"],

        },


        {

          name:
            "Joue de boeuf confite au vin rouge et écrasé de pommes de terre",

          details:
            "Echalotes confites, noisettes, huile de persil",

          tags:
            ["glutenFree"],

        },


        {

          name:
            "Palette de porc confite au miel et au thym, avec une polenta crémeuse au parmesan",

          details:
            "Jus réduit, tomates cerise rôties et thym frais",

          tags:
            ["glutenFree"],

        },


        {

          name:
            "Curry doux de légumes et poulet au lait de coco avec un riz parfumé",

          details:
            "Coriandre fraîche et légumes de saison",

          tags: [
            "glutenFree",
            "lactoseFree",
            "spicy",
          ],

        },

      ],

    },


    /**
     * ========================================================
     * DESSERTS
     * ========================================================
     */

    {

      id:
        "desserts",


      title:
        "Desserts",


      icon:
        "✦",


      dishes: [


        {

          name:
            "Tiramisu aux fruits rouges",

          details:
            "Fruits frais, pistaches, feuilles de menthe",

          tags:
            ["veggie"],

        },


        {

          name:
            "Moelleux au chocolat",

          details:
            "Nappé de ganache au chocolat",

          tags:
            ["veggie"],

        },


        {

          name:
            "Charlotte aux abricots et à la vanille",

          details:
            "Médaillons d'abricots, amandes effilées, coulis de fruit",

          tags:
            ["veggie"],

        },


        {

          name:
            "Salade de fruits frais",

          details:
            "Suivant les produits disponibles au marché",

          tags: [
            "glutenFree",
            "lactoseFree",
          ],

        },

      ],

    },

  ],


  /**
   * ----------------------------------------------------------
   * LÉGENDE DES PICTOGRAMMES
   * ----------------------------------------------------------
   *
   * La légende Events comprend quatre colonnes.
   *
   * L’ordre indiqué ici détermine l’ordre d’affichage :
   *
   * 1. spécial végé ;
   * 2. sans gluten ;
   * 3. sans lactose ;
   * 4. légèrement relevé.
   */

  legend: {

    enabled: true,


    items: [

      "veggie",

      "glutenFree",

      "lactoseFree",

      "spicy",

    ],

  },


  /**
   * ----------------------------------------------------------
   * OPTIONS D’AFFICHAGE
   * ----------------------------------------------------------
   *
   * Ces paramètres utilisent la même logique que le Batch :
   *
   * true  = afficher
   * false = masquer
   */

  display: {


    /**
     * Logo de la cuisinière dans le footer.
     */

    showLogoInFooter: true,


    /**
     * Filigrane central.
     */

    showWatermark: true,


    /**
     * Icônes téléphone / email / site dans le footer.
     */

    showContactIcons: true,


    /**
     * Cercles devant Entrées / Plats / Desserts.
     */

    showCategoryIcons: true,


    /**
     * Légende des pictogrammes.
     */

    showLegend: true,


    /**
     * Introduction située sous le titre de la carte.
     */

    showIntroduction: true,


    /**
     * Footer commun Fée Maison.
     *
     * Cette propriété est conservée pour la lisibilité
     * de la configuration. Le HTML pourra également
     * l’utiliser si nous souhaitons rendre le footer facultatif.
     */

    showFooter: true,

  },

};