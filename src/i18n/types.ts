export type Locale = "en" | "ja" | "es" | "it" | "pt";

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

export interface FundingMilestone {
  name: string;
  ships: string;
  effort: string;
}

export interface FundingContent {
  seo: {
    title: string;
    description: string;
  };
  label: string;
  title: string;
  lede: string;
  problemHeading: string;
  problemBody: string[];
  chainHeading: string;
  chainIntro: string;
  chain: { step: string; note: string }[];
  chainNote: string;
  goodsHeading: string;
  goodsIntro: string;
  goods: { name: string; body: string; status: string }[];
  fundingHeading: string;
  fundingIntro: string;
  milestoneColumns: { name: string; ships: string; effort: string };
  milestones: FundingMilestone[];
  ctaHeading: string;
  ctaBody: string;
  ctaEmail: string;
  ctaPatreon: string;
  ctaRepo: string;
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
  partners: {
    title: string;
    body: string;
  };
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
  japaneseLabel: string;
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

export interface HowItWorksStep {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
}

export interface HowItWorksPoint {
  title: string;
  body: string;
}

export interface HowItWorksContent {
  seo: {
    title: string;
    description: string;
  };
  label: string;
  title: string;
  lede: string;
  stepsHeading: string;
  steps: HowItWorksStep[];
  libraryHeading: string;
  libraryLede: string;
  libraryPoints: HowItWorksPoint[];
  ctaHeading: string;
  ctaBody: string;
  ctaDownload: string;
  ctaDocs: string;
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
  footerExploreTitle: string;
  footerCommunityTitle: string;
  brand: string;
  brandRubyBase?: string;
  brandRubyText?: string;
  title: string;
  description: string;
  comingSoon: string;
  githubLink: string;
  githubAriaLabel: string;
  download: {
    label: string;
    ariaLabel: string;
    menuLabel: string;
    macos: string;
    windows: string;
    linux: string;
  };
  aboutLink: string;
  howItWorksLink: string;
  teamLink: string;
  sponsorLink: string;
  fundingLink: string;
  contactLink: string;
  brandLink: string;
  docsLink: string;
  privacyLink: string;
  termsLink: string;
  legalLabel: string;
  footer: string;
  howItWorks: HowItWorksContent;
  about: AboutContent;
  mission: StatementContent;
  vision: StatementContent;
  team: TeamContent;
  sponsor: SponsorContent;
  funding: FundingContent;
  privacy: LegalContent;
  terms: LegalContent;
  contact: ContactContent;
  brandKit: BrandContent;
  notFound: NotFoundContent;
}
