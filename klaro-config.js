/**
 * Klaro.js cookie consent configuration for Eitan & Meir
 * https://klaro.org/docs/integration/annotated-configuration
 */
window.klaroConfig = {
  testing: false,
  elementID: 'klaro',
  storageMethod: 'localStorage',
  storageName: 'klaro',
  cookieExpiresAfterDays: 365,
  default: false,
  mustConsent: false,
  acceptAll: true,
  hideDeclineAll: false,
  hideLearnMore: false,
  htmlTexts: true,

  translations: {
    de: {
      privacyPolicyUrl: '/datenschutzerklaerung.html',
      consentNotice: {
        description: 'Wir verwenden Cookies, um unsere Website bereitzustellen (notwendig), ihre Nutzung zu analysieren (Statistik) und Ihnen ggf. personalisierte Inhalte anzuzeigen (Marketing). Sie können alle akzeptieren, nur notwendige zulassen oder Ihre Auswahl anpassen. <a href="/datenschutzerklaerung.html">Mehr erfahren</a>',
      },
      consentModal: {
        title: 'Cookie-Einstellungen',
        description: 'Diese Website nutzt Cookies und ähnliche Technologien. Notwendige Cookies sind für den Betrieb unerlässlich. Statistik-Cookies helfen uns zu verstehen, wie Besucher die Seite nutzen. Marketing-Cookies dienen ggf. personalisierten Inhalten. Nicht notwendige Cookies werden nur nach Ihrer Einwilligung gesetzt. <a href="/datenschutzerklaerung.html">Datenschutzerklärung</a>',
      },
      purposes: {
        necessary: {
          title: 'Notwendig',
          description: 'Grundfunktionen wie Seitennavigation, Sicherheit und Consent-Speicherung.',
        },
        analytics: {
          title: 'Statistik',
          description: 'Anonyme Auswertung von Seitenaufrufen und Interaktionen.',
        },
        marketing: {
          title: 'Marketing',
          description: 'Personalisierung, ggf. Retargeting und Angebotsoptimierung.',
        },
      },
      app: {
        acceptAll: 'Alle akzeptieren',
        acceptSelected: 'Auswahl speichern',
        declineAll: 'Nur notwendige',
        showAll: 'Alle anzeigen',
        save: 'Speichern',
        close: 'Schließen',
      },
      purpose: {
        required: 'Dieser Dienst ist für die Grundfunktionen der Website erforderlich.',
        optional: 'Dieser Dienst ist optional.',
      },
    },
    en: {
      privacyPolicyUrl: '/privacy-policy.html',
      consentNotice: {
        description: 'We use cookies to provide our website (necessary), analyse its use (statistics) and to show you personalised content (marketing). You can accept all, only necessary, or adjust your choices. <a href="/privacy-policy.html">Learn more</a>',
      },
      consentModal: {
        title: 'Cookie settings',
        description: 'This site uses cookies and similar technologies. Necessary cookies are essential. Statistics cookies help us understand how visitors use the site. Marketing cookies may be used for personalised content. Non-essential cookies are only set with your consent. <a href="/privacy-policy.html">Privacy policy</a>',
      },
      purposes: {
        necessary: {
          title: 'Necessary',
          description: 'Core functionality such as navigation, security and consent storage.',
        },
        analytics: {
          title: 'Statistics',
          description: 'Anonymous analysis of page views and interactions.',
        },
        marketing: {
          title: 'Marketing',
          description: 'Personalisation and offer optimisation.',
        },
      },
      app: {
        acceptAll: 'Accept all',
        acceptSelected: 'Save selection',
        declineAll: 'Necessary only',
        showAll: 'Show all',
        save: 'Save',
        close: 'Close',
      },
    },
  },

  services: [
    {
      name: 'firebase-analytics',
      default: false,
      required: false,
      purposes: ['analytics'],
      translations: {
        de: {
          title: 'Firebase Analytics',
          description: 'Google Firebase Analytics zur anonymisierten Auswertung der Nutzung unserer Website.',
        },
        en: {
          title: 'Firebase Analytics',
          description: 'Google Firebase Analytics for anonymous analysis of how our website is used.',
        },
      },
    },
  ],
};
