/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      /**
       * ==========================================================
       * CHARTE GRAPHIQUE NUMÉRIQUE — FÉE MAISON
       * ==========================================================
       *
       * Ce fichier centralise les couleurs utilisées dans le site.
       *
       * Correspondances avec les anciens noms techniques :
       *
       * terracotta = bordeaux Fée Maison
       * sage        = bleu canard
       * cream       = crème et blanc cassé
       * beige       = tons sable et beige rosé
       * brown       = textes et bruns chauds
       *
       * Après une modification :
       * 1. enregistrer avec Ctrl + S ;
       * 2. arrêter npm run dev avec Ctrl + C ;
       * 3. relancer npm run dev.
       * ==========================================================
       */

      colors: {
        /**
         * CRÈME ET BLANC CASSÉ
         *
         * Couleur de référence de la communication papier :
         * #F7E4D6
         */
        cream: {
          50: '#FFFDFC',
          100: '#FCF7F3',
          200: '#FAEFE7',
          300: '#F7E4D6',
          400: '#EFD8C8',
          500: '#E8CDBB',
          600: '#CDAA92',
          700: '#AD876F',
          800: '#896954',
          900: '#674D3E',
        },

        /**
         * BEIGES CHAUDS
         *
         * Utilisés pour les bordures, cartes, séparateurs
         * et fonds secondaires.
         */
        beige: {
          50: '#FFFCFA',
          100: '#FBF5F0',
          200: '#F3E7DE',
          300: '#E8D6CA',
          400: '#D8BEAD',
          500: '#C5A28D',
          600: '#AA836D',
          700: '#896653',
          800: '#6E5143',
          900: '#584137',
        },

        /**
         * BORDEAUX FÉE MAISON
         *
         * Couleur de référence :
         * #7F1F20
         *
         * Le nom "terracotta" est conservé dans le code afin de
         * ne pas modifier toutes les classes Tailwind existantes.
         */
        terracotta: {
          50: '#FCF5F4',
          100: '#F7E9E8',
          200: '#EED1D0',
          300: '#DFAAA9',
          400: '#C97979',
          500: '#AA4A4C',
          600: '#7F1F20',
          700: '#651718',
          800: '#571416',
          900: '#471011',
        },

        /**
         * BLEU CANARD
         *
         * Couleur de référence :
         * #18727D
         *
         * Le nom "sage" est conservé dans le code existant.
         */
        sage: {
          50: '#F0F8F8',
          100: '#E0F0F1',
          200: '#BEDDDF',
          300: '#8FC2C6',
          400: '#59A1A8',
          500: '#32838B',
          600: '#18727D',
          700: '#125B64',
          800: '#0E4D55',
          900: '#0B4148',
        },

        /**
         * BRUNS ET TEXTES
         *
         * Évite l'utilisation d'un noir pur, trop dur pour
         * l'univers chaleureux de Fée Maison.
         */
        brown: {
          50: '#FAF8F7',
          100: '#F2ECE9',
          200: '#E4D8D2',
          300: '#CFBAB0',
          400: '#AE9185',
          500: '#8B6E64',
          600: '#6B514A',
          700: '#513C38',
          800: '#3E302D',
          900: '#302827',
        },
      },

      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Arial', 'system-ui', 'sans-serif'],
      },

      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.4s ease-out',
      },

      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },

        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },

        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },

  plugins: [],
};