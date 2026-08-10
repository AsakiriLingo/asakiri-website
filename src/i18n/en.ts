import type { LandingMessages } from "./types";

export const enMessages = {
  seo: {
    title: "Asakiri | Create and learn language courses",
    description:
      "Asakiri is a home for language learning: build deep courses with rich media and exercises, then study them in a free learner app. Your work stays yours.",
    imageAlt: "Asakiri, a home for language learning",
  },
  localeName: "English",
  alternateLocaleName: "日本語",
  navigationLabel: "Primary navigation",
  communityLabel: "Community links",
  siteLinksLabel: "More pages",
  brand: "Asakiri",
  title: "Language learning, made to stay yours.",
  description:
    "Asakiri is a home for language learning. Build deep, structured courses with rich media and exercises, then study them in a free learner app. Everything you make stays yours.",
  comingSoon: "Coming soon",
  githubLink: "View on GitHub",
  githubAriaLabel: "Open Asakiri Studio on GitHub",
  aboutLink: "About",
  teamLink: "Team",
  sponsorLink: "Sponsors",
  footer: "Made for the people who build and learn languages.",
  about: {
    seo: {
      title: "Why Asakiri exists | Asakiri",
      description:
        "Why Asakiri exists: a project that pairs the depth of a textbook with the practice of a learning app, especially for smaller and overlooked languages.",
    },
    title: "Why Asakiri exists",
    lede: "Asakiri started with a language I wanted to learn and couldn't find a good way into.",
    sections: [
      {
        heading: "The resources weren't there",
        body: [
          "A few years ago, I wanted to learn Georgian. I looked for a course the way I would for French or Spanish and found very little: a few textbooks, some videos, scattered forum posts.",
          "The problem became obvious pretty quickly. If a language doesn't have a large number of learners, it rarely gets the same quality of learning tools.",
          "For less commonly taught languages, learners are often left to assemble their own curriculum from whatever they can find. That always felt backwards to me. The languages with the fewest resources are often the ones that most need people willing to build them.",
        ],
      },
      {
        heading: "Depth and practice in one place",
        body: [
          "I also wanted a different kind of learning experience.",
          "I need the structure of a good textbook: concepts introduced in the right order, grammar explained properly, and lessons that build on what came before.",
          "But reading alone isn't enough. I also need frequent practice: short exercises, repetition, listening, writing, and opportunities to actually use what I've learned.",
          "Most language tools lean heavily toward one side. Textbooks have depth but little interaction. Apps are good at practice but often skip the explanation and structure behind it.",
          "Asakiri is an attempt to combine both: the depth of a textbook with the practice of a learning app.",
        ],
      },
      {
        heading: "What Asakiri is",
        body: [
          "Asakiri is a home for language learning, and it has two sides. One is a place to build language courses with structured lessons, reusable content, rich media, and interactive exercises. The other is a free app to learn from them.",
          "Courses remain portable and under the control of the people who make them. The goal is to let anyone who cares about a language, especially smaller and overlooked languages, build a course worth learning from, and to give learners a good way to study it.",
          "Asakiri is still early. If that idea interests you, follow along, try it out, or help build it.",
        ],
      },
    ],
  },
  mission: {
    seo: {
      title: "Mission | Asakiri",
      description:
        "Asakiri's mission: make every language fully learnable by putting the tools to create, own, and share deep courses in everyone's hands.",
    },
    label: "Mission",
    body:
      "Make every language fully learnable by putting the tools to create, own, and share deep courses in everyone's hands.",
  },
  vision: {
    seo: {
      title: "Vision | Asakiri",
      description:
        "Asakiri's vision: every language, endangered or overlooked, stays learnable and alive, passed on instead of lost.",
    },
    label: "Vision",
    body:
      "Every language, endangered or overlooked, stays learnable and alive, passed on instead of lost.",
  },
  team: {
    seo: {
      title: "Team | Asakiri",
      description:
        "Meet the small team behind Asakiri: one founder and two very opinionated cats.",
    },
    title: "The team",
    lede: "A small team building Asakiri. One human doing the typing, and two cats supervising closely.",
    members: [
      {
        name: "Alok",
        role: "Founder & Lead",
        bio: "Reports directly to Sole and Mio. Language learner.",
        image: "/team/alok.jpg",
        imageAlt: "Illustrated orange cat, Asakiri's mascot for Alok",
        linkedin: "https://www.linkedin.com/in/alekoi",
      },
      {
        name: "Sole",
        role: "Chief Curiosity Officer",
        bio: "Inspects every new box, bug, and feature before it's allowed to ship.",
        image: "/team/sole.jpg",
        imageAlt: "White and tabby cat with wide green eyes looking at the camera",
      },
      {
        name: "Mio",
        role: "Director of Deep Focus",
        bio: "Holds the team record for the longest uninterrupted staring session.",
        image: "/team/mio.jpg",
        imageAlt: "Close-up of a brown tabby cat with green eyes",
      },
    ],
  },
  sponsor: {
    seo: {
      title: "Sponsors | Asakiri",
      description:
        "Asakiri is built in the open and funded by the people who believe in it. No sponsors yet, so you could be the first.",
    },
    label: "Sponsors",
    title: "Be the first.",
    body:
      "Asakiri is built in the open and made possible by the people who believe in it. There are no sponsors here yet, so this space is wide open. Back the project on Patreon and you'll be the very first name on the list.",
    cta: "Sponsor on Patreon",
  },
} satisfies LandingMessages;
