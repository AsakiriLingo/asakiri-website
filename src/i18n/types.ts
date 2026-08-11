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

export interface BrandPrinciple {
  title: string;
  body: string;
}

export interface BrandContent {
  seo: {
    title: string;
    description: string;
  };
  title: string;
  lede: string;
  logoHeading: string;
  logoBody: string;
  logoDownload: string;
  colorHeading: string;
  colorBody: string;
  typeHeading: string;
  typeBody: string;
  displayRole: string;
  bodyRole: string;
  voiceHeading: string;
  voice: BrandPrinciple[];
  namingHeading: string;
  namingBody: string;
  dosLabel: string;
  dontsLabel: string;
  dos: string[];
  donts: string[];
}

export interface ContactMethod {
  label: string;
  value: string;
}

export interface ContactContent {
  seo: {
    title: string;
    description: string;
  };
  title: string;
  lede: string;
  email: ContactMethod;
  discord: ContactMethod;
  github: ContactMethod;
  linkedin: ContactMethod;
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
  contactLink: string;
  brandLink: string;
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
  contact: ContactContent;
  brandKit: BrandContent;
  notFound: NotFoundContent;
}
