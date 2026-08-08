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
  brand: string;
  title: string;
  description: string;
  comingSoon: string;
  githubLink: string;
  githubAriaLabel: string;
  aboutLink: string;
  footer: string;
  about: AboutContent;
}
