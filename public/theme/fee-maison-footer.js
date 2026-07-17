/* ==========================================================
   FÉE MAISON — FOOTER PARTAGÉ
   Génération du pied de page commun
   ========================================================== */

(function () {
  "use strict";


  /* ----------------------------------------------------------
     OUTILS
     ---------------------------------------------------------- */

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }


  function hasText(value) {
    return (
      value !== undefined &&
      value !== null &&
      String(value).trim() !== ""
    );
  }


  function normalizeUrl(value) {
    if (!hasText(value)) {
      return "";
    }

    const url = String(value).trim();

    if (
      url.startsWith("http://") ||
      url.startsWith("https://")
    ) {
      return url;
    }

    return `https://${url}`;
  }


  function normalizePhoneLink(value) {
    if (!hasText(value)) {
      return "";
    }

    const phone = String(value)
      .trim()
      .replace(/[^\d+]/g, "");

    return `tel:${phone}`;
  }


  function normalizeEmailLink(value) {
    if (!hasText(value)) {
      return "";
    }

    return `mailto:${String(value).trim()}`;
  }


  function getFirstText(...values) {
    return values.find(hasText) ?? "";
  }


  /* ----------------------------------------------------------
     PICTOGRAMMES SVG
     ---------------------------------------------------------- */

  function createPhoneIcon() {
    return `
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2
             19.79 19.79 0 0 1-8.63-3.07
             19.5 19.5 0 0 1-6-6
             19.79 19.79 0 0 1-3.07-8.67
             A2 2 0 0 1 4.11 2h3
             a2 2 0 0 1 2 1.72
             12.84 12.84 0 0 0 .7 2.81
             2 2 0 0 1-.45 2.11
             L8.09 9.91
             a16 16 0 0 0 6 6
             l1.27-1.27
             a2 2 0 0 1 2.11-.45
             12.84 12.84 0 0 0 2.81.7
             A2 2 0 0 1 22 16.92z"
        ></path>
      </svg>
    `;
  }


  function createEmailIcon() {
    return `
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
          ry="2"
        ></rect>

        <path d="m3 7 9 6 9-6"></path>
      </svg>
    `;
  }


  function createWebsiteIcon() {
    return `
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M3 12h18"></path>
        <path
          d="M12 3
             a14.5 14.5 0 0 1 0 18
             a14.5 14.5 0 0 1 0-18z"
        ></path>
      </svg>
    `;
  }


  /* ----------------------------------------------------------
     TEXTE DE PERSONNALISATION
     ---------------------------------------------------------- */

  function createPersonalization(personalizationText) {
    if (!hasText(personalizationText)) {
      return "";
    }

    return `
      <div class="footer-personalization">
        <span
          class="personalization-heart"
          aria-hidden="true"
        >
          ♥
        </span>

        <p class="footer-personalization-text">
          ${escapeHtml(personalizationText)}
        </p>
      </div>
    `;
  }


  /* ----------------------------------------------------------
     BLOC MARQUE
     ---------------------------------------------------------- */

  function createFooterBrand(business) {
    const name = getFirstText(
      business.name,
      business.brandName,
      "Fée Maison"
    );

    const activity = getFirstText(
      business.activity,
      business.jobTitle,
      business.subtitle,
      "Cuisinière à domicile"
    );

    const logoUrl = getFirstText(
      business.logoUrl,
      business.logo,
      business.logoPath
    );

    const subtitle = getFirstText(
      business.footerSubtitle,
      business.tagline
    );

    const logoHtml = hasText(logoUrl)
      ? `
        <div class="footer-logo-wrapper">
          <img
            class="footer-logo"
            src="${escapeHtml(logoUrl)}"
            alt=""
          >
        </div>
      `
      : "";

    const subtitleHtml = hasText(subtitle)
      ? `
        <p class="footer-brand-subtitle">
          ${escapeHtml(subtitle)}
        </p>
      `
      : "";

    return `
      <div class="footer-brand">
        ${logoHtml}

        <div class="footer-brand-text">
          <p class="footer-brand-name">
            ${escapeHtml(name)}
          </p>

          <p class="footer-brand-activity">
            ${escapeHtml(activity)}
          </p>

          ${subtitleHtml}
        </div>
      </div>
    `;
  }


  /* ----------------------------------------------------------
     COORDONNÉES
     ---------------------------------------------------------- */

  function createContactItem({
    href,
    icon,
    text,
    label
  }) {
    if (!hasText(text)) {
      return "";
    }

    const safeText = escapeHtml(text);
    const safeLabel = escapeHtml(label || text);

    if (hasText(href)) {
      return `
        <a
          class="contact-item"
          href="${escapeHtml(href)}"
          aria-label="${safeLabel}"
        >
          <span class="contact-icon">
            ${icon}
          </span>

          <span class="contact-text">
            ${safeText}
          </span>
        </a>
      `;
    }

    return `
      <div class="contact-item">
        <span class="contact-icon">
          ${icon}
        </span>

        <span class="contact-text">
          ${safeText}
        </span>
      </div>
    `;
  }


  function createContactList(business) {
    const phone = getFirstText(
      business.phone,
      business.telephone,
      business.mobile
    );

    const email = getFirstText(
      business.email,
      business.mail
    );

    const website = getFirstText(
      business.website,
      business.site,
      business.url
    );

    const contacts = [];

    if (hasText(phone)) {
      contacts.push(
        createContactItem({
          href: normalizePhoneLink(phone),
          icon: createPhoneIcon(),
          text: phone,
          label: `Téléphoner au ${phone}`
        })
      );
    }

    if (hasText(email)) {
      contacts.push(
        createContactItem({
          href: normalizeEmailLink(email),
          icon: createEmailIcon(),
          text: email,
          label: `Envoyer un e-mail à ${email}`
        })
      );
    }

    if (hasText(website)) {
      contacts.push(
        createContactItem({
          href: normalizeUrl(website),
          icon: createWebsiteIcon(),
          text: website,
          label: `Consulter le site ${website}`
        })
      );
    }

    if (contacts.length === 0) {
      return "";
    }

    return `
      <div class="contact-list">
        ${contacts.join("")}
      </div>
    `;
  }


  /* ----------------------------------------------------------
     BANDEAU FINAL
     ---------------------------------------------------------- */

  function createFooterSignature(footerNote) {
    if (!hasText(footerNote)) {
      return "";
    }

    return `
      <div class="footer-signature">
        <p>
          ${escapeHtml(footerNote)}
        </p>
      </div>
    `;
  }


  /* ----------------------------------------------------------
     SÉPARATEUR
     ---------------------------------------------------------- */

  function createFooterDivider() {
    return `
      <div
        class="footer-divider"
        aria-hidden="true"
      >
        <span class="footer-divider-line"></span>
        <span class="footer-divider-mark">✦</span>
        <span class="footer-divider-line"></span>
      </div>
    `;
  }


  /* ----------------------------------------------------------
     CRÉATION COMPLÈTE DU FOOTER
     ---------------------------------------------------------- */

  function createFeeMaisonFooter(options = {}) {
  const business = options.business ?? {};

  const documentConfig =
    options.documentConfig ??
    options.document ??
    {};

  const displayConfig =
    options.displayConfig ??
    options.display ??
    {};

  const personalizationText = getFirstText(
    options.personalizationText,
    documentConfig.personalizationText,
    documentConfig.personalization,
    business.personalizationText,
    "Chaque prestation est adaptée à vos goûts, à vos besoins, à votre rythme de vie et à votre organisation."
  );

  const footerNote = getFirstText(
    options.footerNote,
    documentConfig.footerNote,
    documentConfig.signature,
    displayConfig.footerNote,
    "Une cuisine maison, généreuse et personnalisée, directement chez vous."
  );

  const variant = getFirstText(
    options.variant,
    displayConfig.footerVariant
  );

  const variantClass = hasText(variant)
    ? ` is-${escapeHtml(variant)}`
    : "";

  const showPersonalization =
    displayConfig.showPersonalizationBlock !== false;

  const showLogo =
    displayConfig.showLogoInFooter !== false;

  const showFooterNote =
    displayConfig.showFooterNote !== false;

  const footerBusiness = {
    ...business,

    logoUrl: showLogo
      ? business.logoUrl
      : ""
  };

  return `
    <footer class="menu-footer${variantClass}">
      ${createFooterDivider()}

      <div class="footer-main">
        ${
          showPersonalization
            ? createPersonalization(personalizationText)
            : ""
        }

        ${createFooterBrand(footerBusiness)}

        ${createContactList(business)}
      </div>

      ${
        showFooterNote
          ? createFooterSignature(footerNote)
          : ""
      }
    </footer>
  `;
}


  /* ----------------------------------------------------------
     EXPORT GLOBAL
     ---------------------------------------------------------- */

  window.createFeeMaisonFooter =
    createFeeMaisonFooter;

})();