export interface AboutSection {
  heading: string;
  body: string[];
}

export interface AboutContent {
  seo: {
    title: string;
    description: string;
  };
  title: string;
  lede: string;
  sections: AboutSection[];
}

export interface StatementContent {
  seo: {
    title: string;
    description: string;
  };
  label: string;
  body: string;
}

export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalContent {
  seo: {
    title: string;
    description: string;
  };
  title: string;
  updated: string;
  lede: string;
  sections: LegalSection[];
}

export interface SponsorContent {
  seo: {
    title: string;
    description: string;
  };
  label: string;
  title: string;
  body: string;
  cta: string;
}

export interface NotFoundContent {
  seo: {
    title: string;
    description: string;
  };
  label: string;
  title: string;
  body: string;
  homeLink: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
  linkedin?: string;
  email?: string;
}

export interface TeamContent {
  seo: {
    title: string;
    description: string;
  };
  title: string;
  lede: string;
  members: TeamMember[];
}

export interface LandingMessages {
  seo: {
    title: string;
    description: string;
    imageAlt: string;
  };
  localeName: string;
  alternateLocaleName: string;
  navigationLabel: string;
  communityLabel: string;
  siteLinksLabel: string;
  brand: string;
  title: string;
  description: string;
  comingSoon: string;
  githubLink: string;
  githubAriaLabel: string;
  aboutLink: string;
  teamLink: string;
  sponsorLink: string;
  privacyLink: string;
  termsLink: string;
  legalLabel: string;
  footer: string;
  about: AboutContent;
  mission: StatementContent;
  vision: StatementContent;
  team: TeamContent;
  sponsor: SponsorContent;
  privacy: LegalContent;
  terms: LegalContent;
  notFound: NotFoundContent;
}
