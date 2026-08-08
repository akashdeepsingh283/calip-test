const SITE_URL = "https://calip.io";
const SITE_NAME = "Calip.io";
const SITE_DESCRIPTION = "Calip.io is a Web3-powered investment platform connecting visionary startups with individual investors through verified deal flow, AI-driven screening, and on-chain transparency.";
const SITE_LOCALE = "en_US";

export const siteConfig = {
  url: SITE_URL,
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  locale: SITE_LOCALE,
  twitterHandle: "@InfoCalip",
  ogImage: `${SITE_URL}/og-image.svg`,
  ogImageAlt: "Calip.io — Web3 Startup Investment Platform",
  themeColor: "#8B7CFF",
  backgroundColor: "#0a0a0f",
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Why Calip.io", href: "/why-us" },
  { name: "For Investors", href: "/join/individual-enquiry" },
  { name: "For Startups", href: "/startup" },
  { name: "FAQ", href: "/faq" },
  { name: "Glossary", href: "/glossary" },
  { name: "Contact", href: "/contact" },
];

export const pages = {
  home: {
    title: "Calip.io — Web3 Startup Investment Platform for Verified Deal Flow",
    description: SITE_DESCRIPTION,
    keywords: ["startup investments", "Web3 investing", "deal flow platform", "startup discovery", "verified startups", "individual investors", "AI screening", "on-chain investing", "capital coordination"],
    path: "/",
  },
  about: {
    title: "About Calip.io — AI-Powered Startup Investment Platform",
    description: "Learn how Calip.io creates a two-sided advantage: giving individual investors curated deal flow and signal, and giving startups visibility, capital, and growth infrastructure.",
    keywords: ["about calip", "startup investor platform", "Web3 ecosystem", "deal flow", "investor network"],
    path: "/about",
  },
  contact: {
    title: "Contact Calip.io — Get in Touch With Our Team",
    description: "Reach out to Calip.io for partnership inquiries, investor onboarding, or startup application support. We respond within 24 hours.",
    keywords: ["contact calip", "investor inquiry", "startup inquiry", "get in touch"],
    path: "/contact",
  },
  waitlist: {
    title: "Join the Calip.io Waitlist — Early Access to Startup Investments",
    description: "Reserve your spot on the Calip.io waitlist. Get early access to curated startup investments, priority deal flow, and exclusive founder connections.",
    keywords: ["waitlist", "early access", "startup investment platform", "Web3 investing"],
    path: "/waitlist",
  },
  join: {
    title: "Join Calip.io — Individual Investor or Startup Application",
    description: "Choose your path on Calip.io: access curated deal flow as an individual investor, or gain visibility and capital as a startup founder.",
    keywords: ["join calip", "individual investor", "startup application", "deal flow access"],
    path: "/join",
  },
  "individual-enquiry": {
    title: "Individual Investor Application — Calip.io",
    description: "Apply as an individual investor on Calip.io. Get early access to curated startup deal flow, AI-matched opportunities, and a private investor network.",
    keywords: ["individual investor", "investor application", "deal flow", "curated startups"],
    path: "/join/individual-enquiry",
  },
  startup: {
    title: "Startup Application — Get Funded on Calip.io",
    description: "Apply as a startup on Calip.io. Gain investor visibility, faster fundraising, Web3 community access, and growth infrastructure.",
    keywords: ["startup application", "get funded", "startup visibility", "fundraising platform"],
    path: "/startup",
  },
  "investor-enquiry": {
    title: "Investor Enquiry — Contact Calip.io",
    description: "Submit an investor enquiry to Calip.io. Share your email and our team will reach out with personalized deal flow and early access details.",
    keywords: ["investor enquiry", "contact calip", "investor access", "early deal flow"],
    path: "/contact/investor-enquiry",
  },
  "startup-enquiry": {
    title: "Startup Enquiry — Contact Calip.io",
    description: "Submit a startup enquiry to Calip.io. Tell us about your startup and our team will connect you with the right investors and resources.",
    keywords: ["startup enquiry", "startup contact", "funding enquiry", "calip startup"],
    path: "/contact/startup-enquiry",
  },
  faq: {
    title: "FAQ — Calip.io | Frequently Asked Questions",
    description: "Find answers to common questions about Calip.io, Startup Performance Tokens, startup onboarding, platform security, and more.",
    keywords: ["faq", "frequently asked questions", "calip faq", "startup performance tokens", "token trading", "startup onboarding", "platform security"],
    path: "/faq",
  },
  "why-us": {
    title: "Why Calip.io — Built for the Way Capital Should Move",
    description: "Discover why Calip.io is the smarter way to access startup opportunities: smart network, fast connections, data-driven insights, and security by design.",
    keywords: ["why calip", "startup investment platform", "Web3 investing", "deal flow", "smart network", "investor platform"],
    path: "/why-us",
  },
  wallet: {
    title: "Calip.io Wallet — Web3 Wallet Infrastructure for Startup Tokens",
    description: "Calip.io is building a premium wallet experience for secure Web3 onboarding, wallet authentication, and investor-grade transaction infrastructure.",
    keywords: ["calip wallet", "Web3 wallet", "crypto wallet", "startup token wallet", "blockchain wallet"],
    path: "/wallet",
  },
  "investor-enquiry-join": {
    title: "Investor Enquiry — Join Calip.io",
    description: "Submit your investor enquiry to join Calip.io. Get access to curated deal flow, AI-matched opportunities, and early platform access.",
    keywords: ["investor enquiry", "join calip", "investor access", "deal flow"],
    path: "/join/investor-enquiry",
  },
  glossary: {
    title: "Glossary — Startup Investment & Web3 Terms | Calip.io",
    description: "Learn the key terms and concepts behind startup investing, Web3, Startup Performance Tokens, deal flow, and the Calip.io platform.",
    keywords: ["glossary", "startup terms", "Web3 glossary", "STP definition", "deal flow definition", "investment terms", "Calip.io glossary"],
    path: "/glossary",
  },
  privacy: {
    title: "Privacy Policy — Calip.io",
    description: "Calip.io privacy policy. Learn how we collect, use, and protect your personal information on our Web3 startup investment platform.",
    keywords: ["privacy policy", "data protection", "calip privacy"],
    path: "/privacy",
  },
  terms: {
    title: "Terms of Service — Calip.io",
    description: "Calip.io terms of service. Read the terms governing your use of the Web3 startup investment platform and Startup Performance Token marketplace.",
    keywords: ["terms of service", "calip terms", "platform terms"],
    path: "/terms",
  },
  security: {
    title: "Security — How Calip.io Protects Your Data",
    description: "Learn about Calip.io's security infrastructure: encryption, blockchain transparency, audit-grade compliance, and secure digital asset management.",
    keywords: ["security", "platform security", "blockchain security", "data protection"],
    path: "/security",
  },
  legal: {
    title: "Legal Disclaimer — Calip.io",
    description: "Important legal disclaimers about Startup Performance Tokens, investment risks, and platform participation on Calip.io.",
    keywords: ["legal disclaimer", "STP disclaimer", "investment risk"],
    path: "/legal",
  },
};

export function generatePageMetadata(pageKey) {
  const page = pages[pageKey];
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: `${SITE_URL}${page.path}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${SITE_URL}${page.path}`,
      siteName: SITE_NAME,
      locale: SITE_LOCALE,
      type: page.path === "/" ? "website" : "article",
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      site: siteConfig.twitterHandle,
      images: [siteConfig.ogImage],
    },
  };
}

export function generateOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://calip.io/#organization",
    name: "Calip.io",
    alternateName: ["Calip", "Calip.io", "Kalip"],
    url: SITE_URL,
    logo: `${SITE_URL}/icon.png`,
    description: SITE_DESCRIPTION,
    foundingDate: "2025",
    sameAs: [
      "https://x.com/InfoCalip",
      "https://www.instagram.com/calip.io_01",
      "https://www.linkedin.com/company/124113941",
    ],
    knowsAbout: [
      { "@type": "Thing", name: "Startup Investment" },
      { "@type": "Thing", name: "Web3" },
      { "@type": "Thing", name: "Startup Performance Tokens" },
      { "@type": "Thing", name: "Deal Flow" },
      { "@type": "Thing", name: "Blockchain" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "info@calip.io",
      telephone: "+91-8980665439",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
  };
}

export function generateWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://calip.io/#website",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    publisher: { "@id": "https://calip.io/#organization" },
    inLanguage: "en-US",
  };
}

export function generateSoftwareAppJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Calip.io",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      category: "Free",
    },
    featureList: [
      "Verified startup discovery",
      "AI-driven deal flow screening",
      "On-chain investment transparency",
      "Smart investor-startup matching",
      "Encrypted deal pipeline",
      "Real-time ecosystem insights",
    ],
  };
}

export function generateBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function generateFaqJsonLd() {
  const faqs = [
    {
      question: "What is Calip.io?",
      answer: "Calip.io is a Web3-powered platform where individuals can discover promising startups, explore verified startup insights, and buy, sell, and trade Startup Performance Tokens. No venture capital connections. No insider access required. Our goal is to make startup opportunities more accessible while helping startups gain visibility and build a global community.",
    },
    {
      question: "What are Startup Performance Tokens?",
      answer: "A Startup Performance Token (STP) is a digital token created for a startup listed on Calip.io. Each token has a market value and can be bought, sold, or traded by users on the platform. Token activity may be influenced by startup growth, business milestones, community participation, platform activity, and market demand.",
    },
    {
      question: "Can I buy and sell Startup Performance Tokens?",
      answer: "Yes. Users will be able to buy, hold, sell, and trade Startup Performance Tokens through the Calip.io platform using supported payment and wallet infrastructure once the platform launches. Just like other digital assets, token prices may move up or down based on market activity and startup developments.",
    },
    {
      question: "Can I sell my Startup Performance Tokens at any time?",
      answer: "Yes. Users will be able to buy, hold, and sell Startup Performance Tokens through the platform marketplace, subject to market liquidity and platform availability.",
    },
    {
      question: "What determines the value of a Startup Performance Token?",
      answer: "Token value may be influenced by multiple factors including startup growth, business milestones, funding announcements, community participation, market demand, and ecosystem activity. As with any marketplace, prices can move up or down.",
    },
    {
      question: "Do Startup Performance Tokens represent company shares or equity?",
      answer: "No. Startup Performance Tokens do not represent equity ownership, voting rights, dividend rights, or legal ownership in the underlying startup. They function as utility-based participation tokens within the Calip.io ecosystem.",
    },
    {
      question: "Can I trade tokens from anywhere in the world?",
      answer: "Our vision is to build a global startup ecosystem where users can discover and trade Startup Performance Tokens from anywhere, subject to local laws and platform availability.",
    },
    {
      question: "Do I need startup or crypto experience?",
      answer: "No. Calip.io is designed for both beginners and experienced users. You do not need venture capital experience or deep crypto knowledge to explore startups and participate in the ecosystem.",
    },
    {
      question: "Why is Calip.io different from traditional startup investing?",
      answer: "Traditional startup opportunities are often limited to venture capital firms, angel investors, and private networks. Calip.io is building a platform that enables broader access to startup opportunities through Startup Performance Tokens, making startup participation more accessible while helping startups gain visibility and community engagement.",
    },
    {
      question: "How are startups selected for listing?",
      answer: "Every startup undergoes a structured onboarding and verification process. Factors may include company registration, founder verification, business traction, operational history, valuation references, and overall platform eligibility criteria.",
    },
    {
      question: "What benefits do startups receive?",
      answer: "Early startups joining Calip.io may receive free startup onboarding, free Startup Performance Token creation, free blockchain infrastructure setup, a dedicated startup profile page, startup analytics dashboard, global visibility within the ecosystem, revenue sharing opportunities from token activity, and community building tools.",
    },
    {
      question: "How do startups benefit from token activity?",
      answer: "Calip.io is building a model where startups may receive revenue-sharing opportunities related to activity generated around their Startup Performance Token. The objective is to align ecosystem growth with startup success.",
    },
    {
      question: "Is startup onboarding free?",
      answer: "Yes. During the early-access phase, startup onboarding is completely free. Eligible startups may receive free profile creation, free Startup Performance Token creation, free blockchain infrastructure support, and free ecosystem onboarding. This offer may change after the platform launch.",
    },
    {
      question: "Can any startup join Calip.io?",
      answer: "No. Startups must meet specific onboarding criteria and complete the platform verification process before being approved for listing. This helps maintain quality and transparency for all participants.",
    },
    {
      question: "Can Calip.io help startups raise funding?",
      answer: "While Calip.io is not a traditional fundraising platform, our long-term vision includes building relationships with global startup ecosystems, venture networks, and strategic partners. In the future, startups on Calip.io may gain opportunities for exposure to international investors and venture capital networks.",
    },
    {
      question: "Is Calip.io secure?",
      answer: "Security is a core part of the Calip.io ecosystem. The platform is being built using blockchain infrastructure designed to provide transparent transaction records, secure digital asset management, and auditable activity logs. Our goal is to create a trusted environment for both startups and participants.",
    },
    {
      question: "When will Calip.io launch?",
      answer: "Calip.io is currently in development. Join the waitlist to receive product updates, early access opportunities, and launch announcements.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateSpeakableJsonLd(url) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Calip.io — Web3 Startup Investment Platform",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".speakable-summary", "h1", "h2"],
    },
    url: url,
  };
}
