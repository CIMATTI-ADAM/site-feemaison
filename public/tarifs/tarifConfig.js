const tarifConfig = {
  /* ==========================================================
     ENTREPRISE
     ========================================================== */

  business: {
    name: "Fée Maison",
    activity: "Cuisinière à domicile",
    service: "Batch cooking",

    phone: "06 84 88 61 11",
    email: "feemaison.lannion@gmail.com",
    website: "www.feemaisonlannion.fr",

    logoUrl: "/images/logo/cuisiniere-transparente.png",

    watermarkUrl:
      "/images/logo/fee-maison-cuisiniere-filigrane.png"
  },

  /* ==========================================================
     FILIGRANE
     ========================================================== */

  watermark: {
    enabled: true,
    opacity: 0.248,
    width: "175mm",
    positionX: "center",
    positionY: "54%"
  },

  /* ==========================================================
     OPTIONS D’AFFICHAGE
     ========================================================== */

  display: {
    showLogoInFooter: true,
    showPersonalizationBlock: true,
    showWatermark: true,
    showFooterNote: true
  },

  /* ==========================================================
     TEXTES COMMUNS AUX TROIS PAGES
     ========================================================== */

  document: {
    topLabel: "Fée Maison • Batch cooking à domicile",

    mainTitle: "Mes tarifs",

    personalizationText:
      "Chaque prestation est adaptée à vos goûts, à vos besoins, à votre rythme de vie et à votre organisation familiale.",

    footerNote:
      "Une cuisine maison, généreuse et personnalisée, directement chez vous.",

    taxNote:
      "Les modalités et les éventuels avantages fiscaux seront précisés lors de l’établissement du devis."
  },

  /* ==========================================================
     PAGE 1 — PLATS DE 4 PARTS
     ========================================================== */

  pages: [
    {
      id: "quatre-parts",

      pageClass: "",

      title: "Tarifs",

      subtitle: "Des plats préparés en 4 parts",

      portionBadge: "Formules 4 parts",

      introduction:
        "Cette formule convient particulièrement à une famille de quatre personnes. Elle peut également convenir à un couple souhaitant manger deux fois le même plat dans la semaine, ou conserver certaines portions au congélateur.",

      section: {
        icon: "4",

        title: "Les formules 4 parts",

        subtitle:
          "Chaque plat préparé correspond à une recette réalisée en quatre portions.",

        cards: [
          {
            title: "Formule 3 plats",

            description:
              "3 recettes différentes préparées en 4 parts, soit 12 portions au total.",

            price: "À renseigner",

            fullPrice: "",

            taxNote: "",

            color: "gold"
          },

          {
            title: "Formule 4 plats",

            description:
              "4 recettes différentes préparées en 4 parts, soit 16 portions au total.",

            price: "À renseigner",

            fullPrice: "",

            taxNote: "",

            color: "sage"
          },

          {
            title: "Formule 5 plats",

            description:
              "5 recettes différentes préparées en 4 parts, soit 20 portions au total.",

            price: "À renseigner",

            fullPrice: "",

            taxNote: "",

            color: "terracotta"
          },

          {
            title: "Option courses",

            description:
              "Fée Maison peut également effectuer les courses nécessaires à la réalisation de la prestation.",

            price: "À renseigner",

            fullPrice: "",

            taxNote: "",

            color: "duck"
          }
        ]
      },

      note:
        "Les ingrédients ne sont pas compris dans le tarif de la prestation",

      highlight:
        "Une formule adaptée aux familles ou aux couples souhaitant prévoir plusieurs repas. Pour les personnes seules, il faudra congeler une partie des préparations."
    },

    /* ========================================================
       PAGE 2 — PLATS DE 2 PARTS
       ======================================================== */

    {
      id: "deux-parts",

      pageClass: "",

      title: "Tarifs",

      subtitle: "Des plats préparés en 2 parts",

      portionBadge: "Formules 2 parts",

      introduction:
        "Cette formule convient particulièrement à un couple. Elle peut également répondre aux besoins d’une personne seule qui accepte de manger deux fois le même plat dans la semaine ou congeler une portion.",

      section: {
        icon: "2",

        title: "Les formules 2 parts",

        subtitle:
          "Chaque plat préparé correspond à une recette réalisée en deux portions.",

        cards: [
          {
            title: "Formule 3 plats",

            description:
              "3 recettes différentes préparées en 2 parts, soit 6 portions au total.",

            price: "À renseigner",

            fullPrice: "",

            taxNote: "",

            color: "gold"
          },

          {
            title: "Formule 4 plats",

            description:
              "4 recettes différentes préparées en 2 parts, soit 8 portions au total.",

            price: "À renseigner",

            fullPrice: "",

            taxNote: "",

            color: "sage"
          },

          {
            title: "Formule 5 plats",

            description:
              "5 recettes différentes préparées en 2 parts, soit 10 portions au total.",

            price: "À renseigner",

            fullPrice: "",

            taxNote: "",

            color: "terracotta"
          },

          {
            title: "Option courses",

            description:
              "Fée Maison peut également effectuer les courses nécessaires à la réalisation de la prestation.",

            price: "À renseigner",

            fullPrice: "",

            taxNote: "",

            color: "duck"
          }
        ]
      },

      note:
        "Les ingrédients ne sont pas compris dans le tarif de la prestation.",

      highlight:
        "Une formule pensée pour les couples et les personnes seules qui souhaitent organiser leurs repas sans préparer de trop grandes quantités."
    },

    /* ========================================================
       PAGE 3 — PORTIONS INDIVIDUELLES
       ======================================================== */

    {
      id: "une-part",

      pageClass: "is-dense",

      title: "Tarifs",

      subtitle: "Des plats préparés en portions individuelles",

      portionBadge: "Formules 1 part",

      introduction:
        "Cette formule permet de manger un plat différent chaque jour, sans avoir à consommer deux fois la même recette ni devoir congeler les portions restantes. La préparation de chaque recette en quantité individuelle demande quasiment autant de temps et entraîne un tarif par part plus élevé.",

      section: {
        icon: "1",

        title: "Les formules individuelles",

        subtitle:
          "Chaque plat correspond à une recette différente préparée en une seule portion.",

        cards: [
          {
            title: "Formule 3 plats",

            description:
              "3 recettes différentes préparées en portions individuelles, soit 3 repas.",

            price: "À renseigner",

            fullPrice: "",

            taxNote: "",

            color: "gold"
          },

          {
            title: "Formule 4 plats",

            description:
              "4 recettes différentes préparées en portions individuelles, soit 4 repas.",

            price: "À renseigner",

            fullPrice: "",

            taxNote: "",

            color: "sage"
          },

          {
            title: "Formule 5 plats",

            description:
              "5 recettes différentes préparées en portions individuelles, soit 5 repas.",

            price: "À renseigner",

            fullPrice: "",

            taxNote: "",

            color: "terracotta"
          },

          {
            title: "Option courses",

            description:
              "Fée Maison peut également effectuer les courses nécessaires à la réalisation de la prestation.",

            price: "À renseigner",

            fullPrice: "",

            taxNote: "",

            color: "duck"
          }
        ]
      },

      note:
        "Les ingrédients ne sont pas compris dans le tarif de la prestation",

      highlight:
        "Cette formule offre la plus grande variété de repas, mais son coût est plus élevé car chaque recette est préparée séparément en petite quantité."
    }
  ]
};
